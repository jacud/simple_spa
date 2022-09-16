import { makeAutoObservable } from "mobx";

export default class LoadingStateStore {
    private _isLoading = true;
    
    constructor() {
        makeAutoObservable(this);
    }

    setIsLoading(value: boolean) {
        this._isLoading = value;
    }

    get isLoading() : boolean {
        return this._isLoading;
    }
}