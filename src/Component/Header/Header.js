import logo from "../../resources/Logo_6(white).png";

import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_navigation">
                    <div className="header_logo">
                        <img src={logo} width={60} alt="Logo"/>
                    </div>
                    <nav className="nav">
                        <NavLink exact to={'/'} className="nav_link">Популярное</NavLink>
                        <div className="nav_link">Рынок</div>
                        <div className="nav_link">Купить криптовалюту</div>
                        <div className="nav_link">Поддержка</div>
                    </nav>
                    <div className="header_button">
                        <a href="#" className="header_login">Войти</a>
                        <a href="#" className="header_registration">Создать аккаунт</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;