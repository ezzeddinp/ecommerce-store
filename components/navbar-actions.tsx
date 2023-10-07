"use client"

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react"
import { Button } from "./ui/button";

import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4 dark:outline-1">
            <Button onClick={() => router.push("/cart")} className="hover:scale-110 hover:bg-stone-950 dark:hover:scale-110 dark:outline-1 transition dark:hover:duration-500 flex items-center rounded-md bg-black dark:bg-white px-4 py-2 drop-shadow-md">
                <ShoppingBag
                    size={15}
                    className="black dark:hover:white"
                />
                {/* this will render the amount of item in the cart */}
                <span className="ml-2 text-sm font-medium text-white dark:text-black">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
}

export default NavbarActions;