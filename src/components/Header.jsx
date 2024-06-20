import Menu from "./Menu";
const Header = () => {
    return(
            <header>
                <div className="barra">
                    <h1 className="titleHeader">PawsCare</h1>
                </div>
                <div>
                    <Menu/>
                </div>
            </header>
    )
}

export default Header;