import Page404 from "../pages/404";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

interface IRoute {
    path: string,
    component: () => JSX.Element,
    replace?: boolean
}

export const privateRoutes : IRoute[] = [
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
]

export const publicRoutes : IRoute[] = [
    {path: '/login', component: Login},
    {path: '/404', component: Page404},
]

export const commonRoutes : IRoute[] = [
    {path: '/about', component: About},
    {path: '/404', component: Page404},
]


export const defaultPath: string = '/posts'

export const loginPath: string = '/login'

export const errorRoute: IRoute = {path: '/404', component: Page404, replace: true}