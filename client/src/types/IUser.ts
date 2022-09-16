export interface IUser {
    id: number,
    email: string,
    login?: string,
    role?: string
}

export const defaultUser: IUser = {
    id: 0,
    email: '',
    login: ''
}