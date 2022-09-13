export interface IProduct {
    id: number,
    name: string,
    price: number,
    img: string,
    rating: number,
    productCategoryId: number,
    manufacturerId: number
}

export const defaultProduct: IProduct = {
    id: 0,
    name: '',
    price: 0,
    img: '',
    rating: 0,
    productCategoryId: 0,
    manufacturerId: 0
}