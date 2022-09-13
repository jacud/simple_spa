import React, { FC, useContext, useEffect } from "react";
import './styles/App.scss'
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/UI/NavigationBar/NavigationBar";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { GlobalContext } from "./context/globalContext";
import { check } from "./API/ServerInteractionApi";
import { IUser } from "./types/IUser";
import Loader from "./components/UI/loader/Loader";

const App : FC = observer(() => {
  const {loadingState, user} = useContext(GlobalContext);

  useEffect(() => {
    check().then((data: IUser) => {
      user.setIsAuth(true);
      user.setUser(data);
    }).finally(() => {
      loadingState.setIsLoading(false);
    });
  }, []);

  if(loadingState.isLoading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App;

