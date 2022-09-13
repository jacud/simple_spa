export interface IUser {
    id: number,
    email: string,
    login?: string,
}

export const defaultUser: IUser = {
    id: 0,
    email: '',
    login: ''
}