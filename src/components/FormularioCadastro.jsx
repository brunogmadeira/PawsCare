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
                        <label htmlFor="nome_completo">Seu nome completo:</label>
                        <input id="nome_completo" name="nome_completo" required="required" type="text" placeholder="ex. Seu Nome" />
                    </p>
                    <p>
                        <label htmlFor="email">Seu e-mail</label>
                        <input id="email" name="email" required="required" type="text" placeholder="ex. seuemail@gmail.com" />
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
    );
};

export default FormularioCadastro;
