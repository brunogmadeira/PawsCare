import { useNavigate, Link } from "react-router-dom";

const Formulario = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/TelaSobre');
    };

    const styles = {
        titulo: {
            fontSize: '30px', 
            fontWeight: 'bold',
        },
         inputStyle : {
            margin: '8px 0',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #939',
            fontSize: '1rem',
            outline: 'none',
          },
          button: {
            backgroundColor: '#939',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '10px',
          },
      };

    return (
            <div className="formulario">
                <form method="post" onSubmit={handleSubmit}>
                    <h1 style={styles.titulo}>Login</h1>
                    <p>
                        <label htmlFor="email">Seu e-mail</label>
                        <input id="email" name="email" required="required" type="text" placeholder="email@email.com" style={styles.inputStyle}/>
                    </p>
                    <p>
                        <label htmlFor="senha">Sua senha</label>
                        <input id="senha" name="senha" required="required" type="password" placeholder="Digite sua senha" style={styles.inputStyle}/>
                    </p>
                    <p>
                        <input type="submit" value="Entrar" style={styles.button}/>
                    </p>
                    <Link to="/FormularioCadastro">Não possui uma conta? Cadastre-se!</Link>
                </form>
            </div>
    );
};

export default Formulario;
