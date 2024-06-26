import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'; 
import { FaHome, FaUser, FaQuestion, FaPen, FaTrash, FaSave, FaTimes } from "react-icons/fa";

const Perfil = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useContext(UserContext);

    const [editingField, setEditingField] = useState(null);
    const [newValue, setNewValue] = useState('');

    const [editingAnimalIndex, setEditingAnimalIndex] = useState(null);
    const [animalNewValue, setAnimalNewValue] = useState({});

    const handleEdit = (field) => {
        setEditingField(field);
        setNewValue(user[field]);
    };

    const handleSave = (field) => {
        updateUser({ ...user, [field]: newValue });
        setEditingField(null);
    };

    const handleCancel = () => {
        setEditingField(null);
    };

    const handleChange = (event) => {
        setNewValue(event.target.value);
    };

    const handleCheckboxChange = (value) => {
        setNewValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/TelaHome');
    };

    const getUserIcon = () => {
        switch (user.tipoCadastro) {
            case 'ONG':
                return <FaHome />;
            case 'Voluntário':
                return <FaUser />;
            default:
                return <FaQuestion />;
        }
    };

    const handleAnimalEdit = (index) => {
        setEditingAnimalIndex(index);
        setAnimalNewValue(user.animais[index]);
    };

    const handleAnimalSave = () => {
        const updatedAnimals = user.animais.map((animal, index) =>
            index === editingAnimalIndex ? animalNewValue : animal
        );
        updateUser({ ...user, animais: updatedAnimals });
        setEditingAnimalIndex(null);
    };

    const handleAnimalCancel = () => {
        setEditingAnimalIndex(null);
    };

    const handleAnimalChange = (event) => {
        const { name, value } = event.target;
        setAnimalNewValue({ ...animalNewValue, [name]: value });
    };

    const handleAnimalDelete = (index) => {
        const updatedAnimals = user.animais.filter((_, i) => i !== index);
        updateUser({ ...user, animais: updatedAnimals });
    };

    const perfilStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #939',
        borderRadius: '8px',
        width: '40%',   
        height: 'auto',
        marginLeft: '30%'
    };


    const iconStyle = {
        fontSize: '2em',
        marginRight: '10px',
    };

    const textStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const inputStyle = {
        marginRight: '10px',
    };

    const buttonStyle = {
        marginRight: '5px',
    };

    const checkboxContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    };

    const animalListStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        gap: '20px',
    };

    const animalCardStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        flex: '0 0 20%', 
    };

    const animalFormStyle = {
        flexDirection: 'column',
        padding: '10px',
    };

    return (
        <div style={perfilStyle}>
            <h2>Perfil do Usuário</h2>
            <div style={textStyle}>
                <div style={iconStyle}>{getUserIcon()}</div>
                {editingField !== 'nome' ? (
                    <>
                        <p style={{ marginRight: '20px' }}>{user.nome}</p>
                        <button onClick={() => handleEdit('nome')}><FaPen /></button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            value={newValue}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        <button onClick={() => handleSave('nome')} style={buttonStyle}><FaSave/></button>
                        <button onClick={handleCancel}><FaTimes/></button>
                    </>
                )}
            </div>
            <div style={textStyle}>
                {editingField !== 'email' ? (
                    <>
                        <p style={{ marginRight: '20px' }}>{user.email}</p>
                        <button onClick={() => handleEdit('email')}><FaPen /></button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            value={newValue}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        <button onClick={() => handleSave('email')} style={buttonStyle}><FaSave/></button>
                        <button onClick={handleCancel}><FaTimes/></button>
                    </>
                )}
            </div>
            <div style={textStyle}>
                {editingField !== 'tipoCadastro' ? (
                    <>
                        <p style={{ marginRight: '20px' }}>{user.tipoCadastro}</p>
                        <button onClick={() => handleEdit('tipoCadastro')}><FaPen /></button>
                    </>
                ) : (
                    <div style={checkboxContainerStyle}>
                        <label style={{ marginRight: '10px' }}>
                            <input
                                type="checkbox"
                                checked={newValue === 'ONG'}
                                onChange={() => handleCheckboxChange('ONG')}
                            />
                            ONG
                        </label>
                        <label style={{ marginRight: '10px' }}>
                            <input
                                type="checkbox"
                                checked={newValue === 'Voluntário'}
                                onChange={() => handleCheckboxChange('Voluntário')}
                            />
                            Voluntário
                        </label>
                        <button onClick={() => handleSave('tipoCadastro')} style={buttonStyle}><FaSave/></button>
                        <button onClick={handleCancel}><FaTimes/></button>
                    </div>
                )}
            </div>
            <h3>Animais Cadastrados:</h3>
            <br />
            <div style={animalListStyle}>
                {user.animais && user.animais.length > 0 ? (
                    user.animais.map((animal, index) => (
                        <div key={index} style={animalCardStyle} className="animalCard">
                            {editingAnimalIndex === index ? (
                                <div style={animalFormStyle}>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={animalNewValue.nome}
                                        onChange={handleAnimalChange}
                                        placeholder="Nome"
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="raca"
                                        value={animalNewValue.raca}
                                        onChange={handleAnimalChange}
                                        placeholder="Raça"
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="cor"
                                        value={animalNewValue.cor}
                                        onChange={handleAnimalChange}
                                        placeholder="Cor"
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="tipoPelo"
                                        value={animalNewValue.tipoPelo}
                                        onChange={handleAnimalChange}
                                        placeholder="Tipo de Pelo"
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="endereco"
                                        value={animalNewValue.endereco}
                                        onChange={handleAnimalChange}
                                        placeholder="Endereço"
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="telefone"
                                        value={animalNewValue.telefone}
                                        onChange={handleAnimalChange}
                                        placeholder="Telefone"
                                        style={inputStyle}
                                    />
                                    <br/>
                                    <button onClick={handleAnimalSave} style={buttonStyle}><FaSave /></button>
                                    <button onClick={handleAnimalCancel}><FaTimes /></button>
                                </div>
                            ) : (
                                <>
                                    <p>Nome: {animal.nome}</p>
                                    <p>Raça: {animal.raca}</p>
                                    <p>Cor: {animal.cor}</p>
                                    <p>Tipo de Pelo: {animal.tipoPelo}</p>
                                    <p>Endereço: {animal.endereco}</p>
                                    <p>Telefone: {animal.telefone}</p>
                                    {animal.foto && <img src={URL.createObjectURL(animal.foto)} alt="Foto do animal" style={{ width: '100px', height: '100px' }} />}
                                    <button onClick={() => handleAnimalEdit(index)} style={buttonStyle}><FaPen /></button>
                                    <button onClick={() => handleAnimalDelete(index)}><FaTrash /></button>
                                </>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Nenhum animal cadastrado.</p>
                )}
            </div>
            <form onSubmit={handleSubmit}></form>
            <Link to="../"><div className='childMenu'><button className="buttomSair">Sair</button></div></Link>
        </div>    
    
    );
};

export default Perfil;
