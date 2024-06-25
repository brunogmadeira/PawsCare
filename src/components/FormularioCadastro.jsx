import { useNavigate, Link } from "react-router-dom";

const FormularioCadastro = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div>
            <div className="formulario-ong">
                <form method="post" onSubmit={handleSubmit}>
                    <h1>Cadastro</h1>
                    <p>
                        <label htmlFor="nome_login_ong">Seu nome completo:</label>
                        <input id="nome_login_ong" name="nome_login_ong" required="nome" type="text" placeholder="ex. Seu Nome" />
                    </p>
                    <p>
                        <label htmlFor="nome_login_ong">Seu e-mail</label>
                        <input id="nome_login_ong" name="nome_login_ong" required="required" type="text" placeholder="ex. seuemail@gmail.com" />
                    </p>
                    <p>
                        <label htmlFor="email_login_ong">Sua senha</label>
                        <input id="email_login_ong" name="email_login_ong" required="required" type="password" placeholder="ex. senha" />
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
