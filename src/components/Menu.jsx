import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="containerMenu">
      <div className="childMenu">
        <button className="styleMenu">Sobre</button>
      </div>
      <Link to="../TelaHome" className="childMenu">
        <button className="styleMenu">Home</button>
      </Link>
      <Link to="../TelaCadastro" className="childMenu">
        <button className="styleMenu">Cadastro de animais</button>
      </Link>
      <Link to="../TelaPerfil" className="childMenu">
        <button className="styleMenu">Perfil</button>
      </Link>
    </div>
  );
};

export default Menu;
