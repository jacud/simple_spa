import { makeAutoObservable } from "mobx";
import { IProductCategory } from "../types/IProductCategory";

export default class ProductCategoryStore {
    private _productCategories: IProductCategory[] = []

    constructor() {
        makeAutoObservable(this);
    }

    setProductCategories(productCategories: IProductCategory[]) {
        this._productCategories = productCategories;
    }

    addProductCategories(productCategories: IProductCategory[]) {
        this._productCategories = [...this._productCategories, ...productCategories];
    }

    get productCategories() {
        return this._productCategories;
    }
}