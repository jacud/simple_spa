import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/globalContext";
import { ABOUT_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../../../utils/constants";
import StyledButton from "../button/StyledButton";


const NavigationBar: FC = observer(() => {
    const { user } = useContext(GlobalContext);
    const navigate = useNavigate();
    const logout = () => {
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(LOGIN_ROUTE);
    }
    return (
        <div className="navbar">            
            <div className="navbar__links">
                <Link to={ SHOP_ROUTE }  > { process.env.REACT_APP_SHOP_NAME } </Link>
                <Link to={ POSTS_ROUTE } > Список постов </Link>
                <Link to={ ABOUT_ROUTE } > О сайте </Link>
            </div>
            <div className="navbar__links navbar__links__right">
                {
                    user.isAdmin && <Link to={ ADMIN_ROUTE } > Панель администратора </Link>
                }
                {
                    user.isAuth && <StyledButton onClick={ logout } > Выйти </StyledButton>
                }
                {
                    !user.isAuth && <StyledButton onClick={ () => navigate(LOGIN_ROUTE) } > Войти </StyledButton>
                }
                {
                    !user.isAuth && <StyledButton onClick={ () => navigate(REGISTRATION_ROUTE) } > Регистрация </StyledButton>
                }
            </div>
        </div>
    );
})

export default NavigationBar;