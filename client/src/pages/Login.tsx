import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../API/ServerInteractionApi";
import StyledButton from "../components/UI/button/StyledButton";
import StyledInput from "../components/UI/input/StyledInput";
import { GlobalContext } from "../context/globalContext";
import { defaultPath } from "../routes";
import { IUser } from "../types/IUser";
import { LOGIN_ROUTE } from "../utils/constants";

const Login = observer(() => {
    const { user } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location: Location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate();

    const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) : Promise<void> => {
        e.preventDefault();
        try {
            let loggedUser : IUser;
            if (isLogin) {
                const response = await login(email, password);
                loggedUser = response;
                
            } else {
                const response = await registration(email, password, "ADMIN");
                loggedUser = response;
            }

            user.setUser(loggedUser);
            user.setIsAuth(true);
            navigate(defaultPath);
        } catch (e: unknown) {
            alert((e as Error).message)
        }
    }

    return (
        <div>
            <h1>Страница логина</h1>
            <form>
                <StyledInput   
                    onChange={ (e: React.ChangeEvent<HTMLInputElement>)  => setEmail(e.target.value) }
                    type='text'
                    placeholder="Введите email"
                    name="email"
                    value={ email }
                />
                <StyledInput
                    onChange={ (e: React.ChangeEvent<HTMLInputElement>)  => setPassword(e.target.value) }
                    type='password'
                    placeholder="Введите пароль"
                    name="password"
                    value={ password }
                />
                <StyledButton type="submit" onClick={ clickHandler }>Вход</StyledButton>
            </form>
        </div>
    );
})

export default Login;