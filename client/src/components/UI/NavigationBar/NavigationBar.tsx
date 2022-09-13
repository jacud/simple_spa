import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/globalContext";
import { loginPath } from "../../../routes";
import StyledButton from "../button/StyledButton";

interface INavigationProps {}

const NavigationBar: FC<INavigationProps> = observer(() => {
    const { user } = useContext(GlobalContext);
    const navigate = useNavigate();
    const logout = () => {
        user.setIsAuth(false);
        
        navigate(loginPath);
        localStorage.removeItem('auth');
    }
 return (
    <div className="navbar">
        {user.isAuth && <StyledButton onClick={logout} >Выйти</StyledButton>}
        <div className="navbar__links">
            <Link to={'/about'} > О сайте </Link>
            <Link to={'/posts'} > Список постов </Link>
        </div>
    </div>
 );
})

export default NavigationBar;