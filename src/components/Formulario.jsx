import { useNavigate, Link } from "react-router-dom";

const Formulario = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/TelaSobre');
    };

    return (
            <div className="formulario">
                <form method="post" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p>
                        <label htmlFor="email">Seu e-mail</label>
                        <input id="email" name="email" required="required" type="text" placeholder="ex. seuemail@gmail.com" />
                    </p>
                    <p>
                        <label htmlFor="senha">Sua senha</label>
                        <input id="senha" name="senha" required="required" type="password" placeholder="ex. senha" />
                    </p>
                    <p>
                        <input type="submit" value="Entrar" />
                    </p>
                    <Link to="/FormularioCadastro">Não possui uma conta? Cadastre-se!</Link>
                </form>
            </div>
    );
};

export default Formulario;
