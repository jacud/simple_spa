import { makeAutoObservable } from "mobx";
import { IManufacturer } from "../types/IManufacturer";

export default class ManufacturerStore {
    private _manufacturers: IManufacturer[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setManufacturers(manufacturers: IManufacturer[]) {
        this._manufacturers = manufacturers;
    }

    get manufacturers() {
        return this._manufacturers;
    }
}