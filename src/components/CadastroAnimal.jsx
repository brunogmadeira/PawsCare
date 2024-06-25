import React, { useState } from 'react';

function CadastroAnimal() {
  const [nomeAnimal, setNomeAnimal] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [foto, setFoto] = useState(null);
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [peso, setPeso] = useState('');
  const [items, setItems] = useState([]);

  const handleChangeNomeAnimal = (e) => {
    setNomeAnimal(e.target.value);
  };

  const handleChangeEndereco = (e) => {
    setEndereco(e.target.value);
  };

  const handleChangeTelefone = (e) => {
    setTelefone(e.target.value);
  };

  const handleChangeEspecie = (e) => {
    setEspecie(e.target.value);
  };

  const handleChangeRaca = (e) => {
    setRaca(e.target.value);
  };

  const handleChangeIdade = (e) => {
    setIdade(e.target.value);
  };

  const handleChangeGenero = (e) => {
    setGenero(e.target.value);
  };

  const handleChangePeso = (e) => {
    setPeso(e.target.value);
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

  const adicionarItem = () => {
    const newItem = { 
      nomeAnimal, 
      endereco, 
      telefone, 
      foto,
      especie,
      raca,
      idade,
      genero,
      peso
    };
    setItems([...items, newItem]);
    setNomeAnimal('');
    setEndereco('');
    setTelefone('');
    setFoto(null);
    setEspecie('');
    setRaca('');
    setIdade('');
    setGenero('');
    setPeso('');
  };

  const excluirItem = (index) => {
    const novosItems = [...items];
    novosItems.splice(index, 1);
    setItems(novosItems);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {items.map((item, index) => (
          <div key={index} style={{ marginRight: '20px', marginBottom: '20px' }}>
            <p>Nome do Animal: {item.nomeAnimal}</p>
            <p>Endereço: {item.endereco}</p>
            <p>Telefone: {item.telefone}</p>
            <p>Espécie: {item.especie}</p>
            <p>Raça: {item.raca}</p>
            <p>Idade: {item.idade}</p>
            <p>Gênero: {item.genero}</p>
            <p>Peso: {item.peso}</p>
            {item.foto && <img src={URL.createObjectURL(item.foto)} alt="Foto do animal" style={{ width: '100px', height: '100px' }} />}
            <button onClick={() => excluirItem(index)}>Excluir</button>
          </div>
        ))}
      </div>
      <input
        value={nomeAnimal}
        onChange={handleChangeNomeAnimal}
        type="text"
        placeholder="Nome do Animal"
      />
      <input
        value={endereco}
        onChange={handleChangeEndereco}
        type="text"
        placeholder="Endereço onde foi encontrado"
      />
      <input
        value={telefone}
        onChange={handleChangeTelefone}
        type="text"
        placeholder="Telefone"
      />
      <input
        value={especie}
        onChange={handleChangeEspecie}
        type="text"
        placeholder="Espécie"
      />
      <input
        value={raca}
        onChange={handleChangeRaca}
        type="text"
        placeholder="Raça"
      />
      <input
        value={idade}
        onChange={handleChangeIdade}
        type="text"
        placeholder="Idade"
      />
      <input
        value={genero}
        onChange={handleChangeGenero}
        type="text"
        placeholder="Gênero"
      />
      <input
        value={peso}
        onChange={handleChangePeso}
        type="text"
        placeholder="Peso"
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={adicionarItem} disabled={!nomeAnimal || !endereco || !telefone || !foto || !especie || !raca || !idade || !genero || !peso}>
        Adicionar
      </button>
    </div>
  );
}

export default CadastroAnimal;
