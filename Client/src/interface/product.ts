import ICategory from "./category";
interface IProduct {
    createdAt: any;
    _id?: string;
    name: string;
    price: number;
    discount: number;
    buyCounts: number;
    author: string;
    description: string;
    quantity: number;
    images: any[];
    categoryId?: ICategory
}

export default IProduct;