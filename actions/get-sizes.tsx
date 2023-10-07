import { Size } from "@/types";

// calling the api url
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL);
    // make the url respone to json format
    return res.json();
};

export default getSizes