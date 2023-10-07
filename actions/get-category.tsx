import { Category } from "@/types";

// calling the api url
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${URL}/${id}`);
    // make the url respone to json format
    return res.json();
};

export default getCategory;