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

  const { addAnimal } = useContext(AnimalContext);

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
    });
    setNome('');
    setRaca('');
    setCor('');
    setTipoPelo('');
    setEndereco('');
    setTelefone('');
    setFoto(null);
    // Mensagem para o usuário após o cadastro do animal
    setMensagem('Animal cadastrado com sucesso!');
    setTimeout(() => {
      setMensagem('');
    }, 3000); // Limpa a mensagem após 3 segundos
  };

  return (
    <div>
      <h2>Cadastro de Animal</h2>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome do Animal"
          required
        />
        <input
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          type="text"
          placeholder="Raça"
          required
        />
        <input
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          type="text"
          placeholder="Cor"
          required
        />
        <input
          value={tipoPelo}
          onChange={(e) => setTipoPelo(e.target.value)}
          type="text"
          placeholder="Tipo de Pelo"
          required
        />
        <input
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          type="text"
          placeholder="Endereço onde foi encontrado"
          required
        />
        <input
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="text"
          placeholder="Telefone"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroAnimal;
