import queryString from "query-string";
import { Product } from "@/types";

// calling the api url
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

// creating interface to accept those filter in 'url'
interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = queryString.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });
    const res = await fetch(url);
    // make the url response to json format
    return res.json();
};

export default getProducts;