import Page404 from "../pages/404";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/404', component: Page404, exact: true},
]

export const commonRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/404', component: Page404, exact: true},
]


export const defaultPath = '/posts'

export const loginPath = '/login'

export const errorRoute = {path: '/404', component: Page404, replace: true}