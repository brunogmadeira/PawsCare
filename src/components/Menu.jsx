import { Link } from "react-router-dom"

const Menu = () => {
    return(
            <div className='containerMenu'>
                <Link to="../TelaHome"><div className='childMenu'> <button className="styleMenu">Home</button></div></Link>
                <Link to="../TelaCadastro"><div className='childMenu'><button className="styleMenu">Cadastro De Animais</button></div> </Link>
                <div className='childMenu'><button className="styleMenu">Contato De Abrigos</button></div>
                <div className="childMenu"><button className="styleMenu">Sobre</button></div>
            </div>
    )  
}
export default Menu;
