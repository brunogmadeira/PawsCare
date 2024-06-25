import React, { useState, useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';

const Home = () => {
  const { animals } = useContext(AnimalContext);
  const [searchText, setSearchText] = useState('');
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    const filtered = animals.filter(animal =>
      animal.nome.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredAnimals(filtered);
  };

  const handleOfferAssistance = (animal) => {
    setSelectedAnimal(animal);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedAnimal(null);
    setEmailInput('');
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSendEmail = () => {
    // Lógica para enviar e-mail
    alert(`E-mail enviado para: ${emailInput}`);
    handleModalClose();
  };

  return (
    <div className="containerHome">
      <div className="BlocoHomeEsq">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Pesquisar animais..."
        />
        <div className="animalList">
          {searchText ? (
            filteredAnimals.map((animal, index) => (
              <div key={index} className="animalCard">
                <p>Nome: {animal.nome}</p>
                <p>Raça: {animal.raca}</p>
                <p>Cor: {animal.cor}</p>
                <p>Tipo de Pelo: {animal.tipoPelo}</p>
                <p>Endereço: {animal.endereco}</p>
                <p>Telefone: {animal.telefone}</p>
                {animal.foto && <img src={URL.createObjectURL(animal.foto)} alt="Foto do animal" style={{ width: '100px', height: '100px' }} />}
                <button onClick={() => handleOfferAssistance(animal)}>Oferecer Assistência</button>
              </div>
            ))
          ) : (
            animals.map((animal, index) => (
              <div key={index} className="animalCard">
                <p>Nome: {animal.nome}</p>
                <p>Raça: {animal.raca}</p>
                <p>Cor: {animal.cor}</p>
                <p>Tipo de Pelo: {animal.tipoPelo}</p>
                <p>Endereço: {animal.endereco}</p>
                <p>Telefone: {animal.telefone}</p>
                {animal.foto && <img src={URL.createObjectURL(animal.foto)} alt="Foto do animal" style={{ width: '100px', height: '100px' }} />}
                <button onClick={() => handleOfferAssistance(animal)}>Oferecer Assistência</button>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>&times;</span>
            <h2>Oferecer Assistência</h2>
            <p>Por favor, insira o e-mail para oferecer assistência ao animal {selectedAnimal.nome}.</p>
            <input type="text" value={emailInput} onChange={handleEmailChange} placeholder="Seu e-mail" />
            <button onClick={handleSendEmail}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
