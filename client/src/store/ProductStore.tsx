import { makeAutoObservable } from "mobx";
import { IProduct } from "../types/IProduct";



export default class ProductStore {
    private _products: IProduct[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setProducts(products: IProduct[]) {
        this._products = products;
    }

    addProducts(products: IProduct[]) {
        this._products = [...this._products, ...products];
    }

    get products() : boolean {
        return this.products;
    }
}