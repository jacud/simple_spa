import jwt_decode from "jwt-decode"
import { IUser } from "../types/IUser";
import { $authHost, $host } from "./http"
import { save as saveSettings } from '../utils/storageService'

export async function registration (email: string, password: string, role = 'USER'): Promise<IUser> {
    const { data } = await $host.post('api/user/registration',  { email, password, role });
    saveSettings('token', data.token);
    return jwt_decode(data.token); 
}

export async function login(email: string, password: string): Promise<IUser> {
    const { data } = await $host.post('api/user/login',  { email, password });
    saveSettings('token', data.token);
    return jwt_decode(data.token);
}

export async function check(): Promise<IUser> {
   
    const { data } = await $authHost.get('api/user/auth')
    saveSettings('token', data.token);
    return jwt_decode(data.token);
}