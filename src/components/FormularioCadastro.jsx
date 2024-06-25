import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext, UserProvider } from '../context/UserContext';

const FormularioCadastro = () => {
    const navigate = useNavigate();
    const { updateUser } = useContext(UserContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser({ nome, email, tipo });
        navigate('/');
    };

    const checkboxStyle = {
        marginRight: '20px',
    };
    const labelCheckboxStyled ={
        paddingLeft: '4px'
    };

    return (
        <UserProvider>
            <div>
                <div className="formulario-ong">
                    <form method="post" onSubmit={handleSubmit}>
                        <h1>Cadastro</h1>
                        <p>
                            <label style={checkboxStyle}>
                                <input type="checkbox" name="tipo_usuario" value="ONG" onChange={() => setTipo('ONG')} />
                                <span style={labelCheckboxStyled}>ONG</span>
                            </label>
                            <label style={checkboxStyle}>
                                <input type="checkbox" name="tipo_usuario" value="Voluntário" onChange={() => setTipo('Voluntário')} />
                                <span style={labelCheckboxStyled}>Voluntário</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="nome_completo">Seu nome completo:</label>
                            <input id="nome_completo" name="nome_completo" required="required" type="text" placeholder="ex. Seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="email">Seu e-mail</label>
                            <input id="email" name="email" required="required" type="text" placeholder="ex. seuemail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="senha">Sua senha</label>
                            <input id="senha" name="senha" required="required" type="password" placeholder="ex. senha" />
                        </p>
                        <p>
                            <input type="submit" value="Cadastrar" />
                        </p>
                        <Link to="/">Voltar ao login principal</Link>
                    </form>
                </div>
            </div>
        </UserProvider>
    );
};

export default FormularioCadastro;