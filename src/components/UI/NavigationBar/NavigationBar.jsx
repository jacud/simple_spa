import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import { loginPath } from "../../../routes";
import StyledButton from "../button/StyledButton";

const NavigationBar = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        setAuth(false);
        navigate(loginPath);
        localStorage.removeItem('auth');
    }
 return (
    <div className="navbar">
        {isAuth  && <StyledButton onClick={logout} >Выйти</StyledButton>}
        <div className="navbar__links">
            <Link to={'/about'} > О сайте </Link>
            <Link to={'/posts'} > Список постов </Link>
        </div>
    </div>
 );
}

export default NavigationBar;