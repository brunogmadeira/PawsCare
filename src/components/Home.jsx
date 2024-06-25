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

    return (
        <div>
            <div>
                <h2>Pesquise o animal que deseja</h2>
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Pesquisar animais..."
                />
                <div>
                    {searchText ? (
                        filteredAnimals.map((animal, index) => (
                            <div key={index}>
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
                            <div key={index}>
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
                <div>
                    <div>
                        <span onClick={handleModalClose}>Fechar</span>
                        <h2>Oferecer Assistência</h2>
                        <p>Para oferecer assistência ao animal {selectedAnimal.nome}, clique no botão abaixo para ser redirecionado ao WhatsApp.</p>
                        <a href="https://chat.whatsapp.com/DXN4NzqEqID7BW6QCnZEKf" target="_blank" rel="noopener noreferrer">
                            <button>Oferecer Assistência via WhatsApp</button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TelaHome;
