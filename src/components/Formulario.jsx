import { Link } from "react-router-dom";

const Formulario = () => {
    return (
        <div>
            <div className="formulario">
                <form method="post" action="">
                    <h1>Login</h1>
                    <p>
                        <label htmlFor="nome_login">Seu e-mail</label>
                        <input id="nome_login" name="nome_login" required="required" type="text" placeholder="ex. seuemail@gmail.com" />
                    </p>
                    <p>
                        <label htmlFor="email_login">Sua senha</label>
                        <input id="email_login" name="email_login" required="required" type="password" placeholder="ex. senha" />
                    </p>
                    <p>
                    <Link to="TelaHome"> <input type="submit" value="Logar" /> </Link>
                    </p>
                    <Link to="/login-ong">Clique aqui caso seja uma ONG</Link>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
