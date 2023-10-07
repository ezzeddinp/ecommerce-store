import { Product } from "@/types";

// calling the api url
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`);
    // make the url respone to json format
    return res.json();
};

export default getProduct;