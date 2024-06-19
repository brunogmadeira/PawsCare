import { Link } from "react-router-dom"

const Formulario = () => {

    return (
        <div>
        <div className="formulario">
        <form method="post" action=""> 
          <h1>Login</h1> 
          <p> 
            <label for="nome_login">Seu email</label>
            <input id="nome_login" name="nome_login" required="required"cd type="text" placeholder="ex. seuemail@gmail.com"/>
          </p>
          <p> 
            <label for="email_login">Sua senha</label>
            <input id="email_login" name="email_login" required="required" type="password" placeholder="ex. senha" /> 
          </p>
          <p> 
          <Link to="TelaHome"> <input type="submit" value="Logar" /> </Link>
          </p>
        </form>
        </div>
      </div>
    )
}

export default Formulario