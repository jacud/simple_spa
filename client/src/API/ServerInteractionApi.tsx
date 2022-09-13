import jwt_decode from "jwt-decode"
import { IUser } from "../types/IUser";
import { $authHost, $host } from "./http"
import { save as saveSettings } from '../utils/storageService'

export async function registration (email: string, password: string, role: string = 'USER'): Promise<IUser> {
    const { data } = await $host.post('api/user/registration',  {email, password, role});
    saveSettings('token', data.token);
    return jwt_decode(data.token); 
}

export async function login(email: string, password: string, role: string = 'USER'): Promise<IUser> {
    const { data } = await $host.post('api/user/login',  {email, password});
    saveSettings('token', data.token);
    return jwt_decode(data.token);
}

export async function check(): Promise<IUser> {
    console.log('11111111111111111111111111');
    
    const { data } = await $authHost.get('api/user/auth')
    console.log('2222222222222222222222');
    saveSettings('token', data.token);
    return jwt_decode(data.token);
}