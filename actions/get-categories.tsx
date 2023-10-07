import { Category } from "@/types";

// calling the api url
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URL);
    // make the url respone to json format
    return res.json();
};

export default getCategories