import Page404 from "../pages/404";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Basket from "../pages/Basket";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import { ABOUT_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, ERROR_ROUTE, LOGIN_ROUTE, POSTS_ROUTE, POST_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/constants";

interface IRoute {
    path: string,
    component: () => JSX.Element,
    replace?: boolean
}

export const privateRoutes : IRoute[] = [
    { path: POSTS_ROUTE, component: Posts },
    { path: POST_ROUTE, component: PostIdPage },
    { path: ADMIN_ROUTE, component: Admin },
    { path: BASKET_ROUTE, component: Basket },
]

export const publicRoutes : IRoute[] = [
    { path: LOGIN_ROUTE, component: Login },
    { path: REGISTRATION_ROUTE, component: Login },
]

export const commonRoutes : IRoute[] = [
    { path: ABOUT_ROUTE, component: About },
    { path: ERROR_ROUTE, component: Page404 },
    { path: SHOP_ROUTE, component: Shop },
    { path: PRODUCT_ROUTE, component: Product },
]

export const adminRoutes : IRoute[] = [
    { path: ADMIN_ROUTE, component: Admin }
]

export const defaultPath: string = SHOP_ROUTE

export const loginPath: string = LOGIN_ROUTE

export const errorRoute: IRoute = { path: ERROR_ROUTE, component: Page404, replace: true }