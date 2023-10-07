
import { Product } from "@/types";
import Currency from "./ui/currency";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-3 flex items-center justify-between">
                <p className="text-2xl text-gray-900 dark:text-white">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-extrabold text-black dark:text-white">Size:</h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-extrabold text-black dark:text-white">Color:</h3>
                    <div
                        className="h-6 w-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: data?.color?.value }}
                    />
                </div>
                <div className="mt-10 flex items-center gap-x-3 dark:outline-1">
                    <Button className="flex items-center gap-x-2 hover:scale-105 hover:bg-stone-950 dark:hover:scale-110 dark:outline-1 transition dark:hover:duration-500 rounded-md bg-black dark:bg-white dark:text-black px-4 py-2 drop-shadow-md">
                        Add To Cart
                        <ShoppingCart />
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default Info;