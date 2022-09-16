import { makeAutoObservable } from "mobx";
import { defaultUser, IUser } from "../types/IUser";

const adminRoleName = "ADMIN";

export default class UserStore {
    _isAuth! : boolean;
    _user!: IUser;

    constructor() {
        this._isAuth = false;
        this._user = defaultUser;
        makeAutoObservable(this);
    }

    setIsAuth(value: boolean) {
        this._isAuth = value;
    }

    get isAuth() : boolean {
        return this._isAuth;
    }

    get user() : IUser {
        return this._user;
    }

    get isAdmin() : boolean {
        return this._user?.role == adminRoleName;
    }

    setUser(user: IUser) {
        this._user = user;
    }
}