import { Billboard } from "@/types";

// calling the api url
const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);
    // make the url respone to json format
    return res.json();
};

export default getBillboard