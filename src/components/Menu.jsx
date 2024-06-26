import { Link } from "react-router-dom"

const Menu = () => {
    return(
        
            <div className='containerMenu '>
                <Link to="../TelaSobre"><div className='childMenu'> <button className="styleMenu">Sobre</button></div></Link>
                <Link to="../TelaHome"><div className='childMenu'> <button className="styleMenu">Home</button></div></Link>
                <Link to="../TelaCadastro"><div className='childMenu'><button className="styleMenu">Cadastro de animais</button></div> </Link>
                <Link to="../TelaPerfil"><div className='childMenu'><button className="styleMenu">Perfil</button></div></Link>
            </div>
    )  
}
export default Menu;
