import { Link } from "react-router-dom";

const FormularioONG = () => {
    return (
        <div>
            <div className="formulario-ong">
                <form method="post" action="">
                    <h1>Login ONG</h1>
                    <p>
                        <label htmlFor="nome_login_ong">Seu e-mail</label>
                        <input id="nome_login_ong" name="nome_login_ong" required="required" type="text" placeholder="ex. seuemail@gmail.com" />
                    </p>
                    <p>
                        <label htmlFor="email_login_ong">Sua senha</label>
                        <input id="email_login_ong" name="email_login_ong" required="required" type="password" placeholder="ex. senha" />
                    </p>
                    <p>
                        <input type="submit" value="Logar" />
                    </p>
                    <Link to="/">Voltar ao login principal</Link>
                </form>
            </div>
        </div>
    );
};

export default FormularioONG;
