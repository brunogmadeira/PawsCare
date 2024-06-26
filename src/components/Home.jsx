import React, { useState, useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';

const TelaHome = () => {
    const { animals } = useContext(AnimalContext);
    const [searchText, setSearchText] = useState('');
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
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
    };

    const buttonStyle  = {
        backgroundColor: '#939',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
    }

    const modalStyle = {
      display: showModal ? 'block' : 'none',
      position: 'fixed',
      zIndex: 1000,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      overflow: 'auto',
      paddingTop: '50px',
    };
  
    const modalContentStyle = {
      backgroundColor: '#242424',
      margin: 'auto',
      padding: '20px',
      borderRadius: '5px',
      border: '1px solid #939',
      width: '80%',
      maxWidth: '600px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };
  
    const closeStyle = {
      color: '#aaa',
      float: 'right',
      fontSize: '28px',
      fontWeight: 'bold',
    };
  
    const whatsappLinkStyle = {
      textDecoration: 'none',
      display: 'block',
      marginTop: '10px',
      textAlign: 'center',
    };

    // Função para oferecer assistência via WhatsApp
    const handleOfferAssistanceWhatsapp = () => {
        const phone = encodeURIComponent(selectedAnimal.telefone);
        const msg = encodeURIComponent('Olá, estou oferecendo assistência para o animal ' + selectedAnimal.nome);
        window.open('https://wa.me/' + '+55' + phone + '?text=' + msg, '_blank');
    };

    return (
        <div className="containerHome">
          <div className="BlocoHomeEsq">
          <h1 style={{ color: 'white', fontSize: '2em' }}>Procure por um companheiro!</h1>
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Pesquisar animais..."
            />
            <br />
            <br />
            <br />
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
                    <button onClick={() => handleOfferAssistance(animal)} style={buttonStyle}>Oferecer Assistência</button>
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
                    <button onClick={() => handleOfferAssistance(animal)} style={buttonStyle}>Oferecer Assistência</button>
                  </div>
                ))
              )}
            </div>
          </div>
    
          {showModal && (
          <div style={modalStyle}>
          <div style={modalContentStyle}>
            <span className="close" style={closeStyle} onClick={handleModalClose}>&times;</span>
            <h2>Oferecer Assistência</h2>
            <p>Para oferecer assistência ao animal {selectedAnimal.nome}, clique no botão abaixo para ser redirecionado ao WhatsApp.</p>
            <a href="https://chat.whatsapp.com/DXN4NzqEqID7BW6QCnZEKf" target="_blank" rel="noopener noreferrer" style={whatsappLinkStyle}>
              <button style={buttonStyle}>Oferecer Assistência via WhatsApp</button>
            </a>
          </div>
          </div>
          )}
        </div>
      );
    };

export default TelaHome;
