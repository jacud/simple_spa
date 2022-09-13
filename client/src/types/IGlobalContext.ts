import LoadingStateStore from "../store/LoadingStateStore"
import ManufacturerStore from "../store/ManufacturerStore"
import ProductCategoryStore from "../store/ProductCategoryStore"
import ProductStore from "../store/ProductStore"
import UserStore from "../store/UserStore"

export interface  IGlobalContext {
    loadingState: LoadingStateStore,
    user: UserStore,
    manufacturer: ManufacturerStore,
    product: ProductStore,
    category: ProductCategoryStore
}

export const defaultGlobalContext : IGlobalContext = {
    loadingState: new LoadingStateStore(),
    user: new UserStore(),
    manufacturer: new ManufacturerStore(),
    product: new ProductStore(),
    category: new ProductCategoryStore()
}