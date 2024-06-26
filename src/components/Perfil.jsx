// Perfil.js
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext'; 
import { FaHome, FaUser, FaQuestion } from "react-icons/fa";

const Perfil = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext); 

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

    return (
        <div>
            <h2>Perfil do Usuário</h2>
            {getUserIcon()}
            <p>Nome: {user.nome}</p>
            <p>Email: {user.email}</p>
            <p>Tipo de Cadastro: {user.tipoCadastro}</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Voltar</button>
            </form>
        </div>
    );
};

export default Perfil;
