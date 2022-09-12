import React, { useEffect, useState } from "react";
import './styles/App.scss'
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/UI/NavigationBar/NavigationBar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { defaultAuthState } from "./types/IAuthContext";


export default function App() {
  const [isAuth, setAuth] = useState<boolean>(defaultAuthState.isAuth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setAuth(true);
    } 
    setIsLoading(false);  
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setAuth,
      isLoading
    }}>
      <BrowserRouter>
        <NavigationBar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

