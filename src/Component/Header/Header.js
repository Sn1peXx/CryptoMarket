import {NavLink} from "react-router-dom";

import logo from "../../resources/Logo_6(white).png";
import './Header.css'


const Header = ({isAuth, removeUserData}) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header_navigation">
                    <div className="header_logo">
                        <img src={logo} width={60} alt="Logo"/>
                    </div>
                    <nav className="nav">
                        <NavLink exact to={'/'} className="nav_link">Популярное</NavLink>
                        <NavLink exact to="/chart" className="nav_link">Рынок</NavLink>
                        <NavLink exact to="/orders" className="nav_link">История ордеров</NavLink>
                        <NavLink exact to="/wallet" className="nav_link">Кошелек</NavLink>
                    </nav>
                    {isAuth
                        ? <button className="header_exit" onClick={() => removeUserData()}>Выйти</button>
                        : <div className="header_button">
                            <NavLink to={'/login'} className="header_login">Войти</NavLink>
                            <NavLink to={'/register'} className="header_registration">Создать аккаунт</NavLink>
                          </div>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;