import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { commonRoutes, defaultPath, errorRoute, loginPath, privateRoutes, publicRoutes } from "../routes";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);
  if(isLoading) {
    return (<Loader />);
  }
  return (
    
    <Routes>
      {
        isAuth && privateRoutes.map((route, index) =>
          <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
        )
      }
    
      {
        !isAuth && publicRoutes.map((route, index) =>
          <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
        )
      }

      {
        commonRoutes.map((route, index) =>
          <Route key={route.path} exact={route.exact} path={route.path} element={<route.component/>}/>
        )
      }      
      
      <Route path="*" element={
        <Navigate to={errorRoute.path} replace={errorRoute.replace} />
      }/>

      <Route path="/" element={
        <Navigate to={isAuth ? defaultPath : loginPath} replace />
      }/>
    </Routes>
  );
}

export default AppRouter;