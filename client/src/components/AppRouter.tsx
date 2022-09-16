import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
import { adminRoutes, commonRoutes, defaultPath, errorRoute, privateRoutes, publicRoutes } from "../routes";
import Loader from "./UI/loader/Loader";

const AppRouter : FC = observer(() => {
    const { loadingState, user } = useContext(GlobalContext);
    if (loadingState.isLoading) {
        return (<Loader />);
    }

    const isAuth = user.isAuth;
    const isAdmin = user.isAdmin;
  
    return (
    
        <Routes>
            {
                isAuth && privateRoutes.map((route) =>
                    <Route key={ route.path }  path={ route.path } element={ <route.component/> }/>
                )
            }

            {
                isAdmin && adminRoutes.map((route) =>
                    <Route key={ route.path }  path={ route.path } element={ <route.component/> }/>
                )
            }
    
            {
                !isAuth && publicRoutes.map((route) =>
                    <Route key={ route.path }  path={ route.path } element={ <route.component/> }/>
                )
            }

            {
                commonRoutes.map((route) =>
                    <Route key={ route.path }  path={ route.path } element={ <route.component/> }/>
                )
            }      
      
            <Route path="*" element={ <Navigate to={ errorRoute.path } replace={ errorRoute.replace } /> }/>

            <Route path="/" element={ <Navigate to={ defaultPath } replace /> }/>
        </Routes>
    );
})

export default AppRouter;