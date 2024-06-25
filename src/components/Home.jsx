import React from 'react';
import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';

const Home = () => {
  const { animals } = useContext(AnimalContext);

  return (
    <div className="containerHome">
      <div className="BlocoHomeEsq">
        <h1 className="TitleHome">Lista de Animais</h1>
        <div className="animalList">
          {animals.map((animal, index) => (
            <div key={index} className="animalCard">
              <p>Nome: {animal.nome}</p>
              <p>Raça: {animal.raca}</p>
              <p>Cor: {animal.cor}</p>
              <p>Tipo de Pelo: {animal.tipoPelo}</p>
              <p>Endereço: {animal.endereco}</p>
              <p>Telefone: {animal.telefone}</p>
              {animal.foto && <img src={URL.createObjectURL(animal.foto)} alt="Foto do animal" style={{ width: '100px', height: '100px' }} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
