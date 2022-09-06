import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../components/UI/button/StyledButton";
import StyledInput from "../components/UI/input/StyledInput";
import { AuthContext } from "../context";
import { defaultPath } from "../routes";

const Login = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const navigate = new useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        setAuth(true);
        navigate(defaultPath);
        localStorage.setItem("auth", "true");
    }
    return (
        <div>
            <h1>Страница логина</h1>
            <form>
                <StyledInput type='text' placeholder="Введите логин" name="login" />
                <StyledInput type='password' placeholder="Введите пароль" name="password" />
                <StyledButton type="submit" onClick={clickHandler}>Вход</StyledButton>
            </form>
        </div>
    );
}

export default Login;