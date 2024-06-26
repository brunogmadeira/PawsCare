import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const FormularioCadastro = () => {
    const navigate = useNavigate();
    const { updateUser } = useContext(UserContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipoCadastro, setTipoCadastro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!tipoCadastro) {
            alert('Por favor, selecione um tipo de cadastro.');
            return;
        }

        updateUser({ nome, email, tipoCadastro });
        navigate('/');
    };

    const handleCheckboxChange = (value) => {
        setTipoCadastro(value);
    };

    const checkboxStyle = {
        marginRight: '20px',
    };
    const labelCheckboxStyled = {
        paddingLeft: '4px',
    };

    return (
        <div>
            <div className="formulario-ong">
                <form onSubmit={handleSubmit}>
                    <h1>Cadastro</h1>
                    <p>
                        <label style={checkboxStyle}>
                            <input
                                type="checkbox"
                                name="tipo_usuario"
                                value="ONG"
                                checked={tipoCadastro === 'ONG'}
                                onChange={() => handleCheckboxChange('ONG')}
                            />
                            <span style={labelCheckboxStyled}>ONG</span>
                        </label>
                        <label style={checkboxStyle}>
                            <input
                                type="checkbox"
                                name="tipo_usuario"
                                value="Voluntário"
                                checked={tipoCadastro === 'Voluntário'}
                                onChange={() => handleCheckboxChange('Voluntário')}
                            />
                            <span style={labelCheckboxStyled}>Voluntário</span>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="nome_completo">Seu nome completo:</label>
                        <input
                            id="nome_completo"
                            name="nome_completo"
                            required
                            type="text"
                            placeholder="ex. Seu Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </p>
                    <p>
                        <label htmlFor="email">Seu e-mail</label>
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            placeholder="ex. seuemail@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </p>
                    <p>
                        <label htmlFor="senha">Sua senha</label>
                        <input id="senha" name="senha" required type="password" placeholder="ex. senha" />
                    </p>
                    <p>
                        <input type="submit" value="Cadastrar" />
                    </p>
                    <Link to="/">Voltar ao login principal</Link>
                </form>
            </div>
        </div>
    );
};

export default FormularioCadastro;
