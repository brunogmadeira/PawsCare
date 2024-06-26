import React, { useState, useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';

function CadastroAnimal() {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [cor, setCor] = useState('');
  const [tipoPelo, setTipoPelo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [foto, setFoto] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const { addAnimal, userEmail } = useContext(AnimalContext); // Obtém o userEmail do contexto

  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #939',
      borderRadius: '8px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      margin: '8px 0',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #939',
      fontSize: '1rem',
      outline: 'none',
    },
    fileInput: {
      margin: '8px 0',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #939',
      fontSize: '1rem',
      outline: 'none',
    },
    button: {
      backgroundColor: '#939',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 300 * 1024) {
        alert('O tamanho da imagem deve ser no máximo 300KB.');
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width > 300 || img.height > 300) {
          alert('A imagem deve ter no máximo 300px por 300px.');
        } else {
          setFoto(file);
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnimal({
      nome,
      raca,
      cor,
      tipoPelo,
      endereco,
      telefone,
      foto
    }, userEmail); // Passa userEmail ao adicionar o animal
    setNome('');
    setRaca('');
    setCor('');
    setTipoPelo('');
    setEndereco('');
    setTelefone('');
    setFoto(null);
    setMensagem('Animal cadastrado com sucesso!');
    setTimeout(() => {
      setMensagem('');
    }, 3000);
  };

  return (
    <div style={styles.container}>
    <h2>Cadastre seu amiguinho!</h2>
    {mensagem && <p>{mensagem}</p>}
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        style={styles.input}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Nome do Animal"
        required
      />
      <input
        style={styles.input}
        value={raca}
        onChange={(e) => setRaca(e.target.value)}
        type="text"
        placeholder="Raça"
        required
      />
      <input
        style={styles.input}
        value={cor}
        onChange={(e) => setCor(e.target.value)}
        type="text"
        placeholder="Cor"
        required
      />
      <input
        style={styles.input}
        value={tipoPelo}
        onChange={(e) => setTipoPelo(e.target.value)}
        type="text"
        placeholder="Tipo de Pelo"
        required
      />
      <input
        style={styles.input}
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        type="text"
        placeholder="Endereço onde foi encontrado"
        required
      />
      <input
        style={styles.input}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        type="text"
        placeholder="Telefone"
        required
      />
      <input
        style={styles.fileInput}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      <button style={styles.button} type="submit">Cadastrar</button>
    </form>
  </div>
  );
}

export default CadastroAnimal;
