"use client";

import React from "react";
import Image from "next/image";
import IconButton from "./icon-button";
import Currency from "./currency";
import PreviewModal from "../preview-modal";
import useCart from "@/hooks/use-cart";

import { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCard {
    data: Product;
}

// ui for product card
const ProductCard: React.FC<ProductCard> = ({
    data
}) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const cart = useCart();
    const previewModal = usePreviewModal();
    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    }

    return (
        <div onClick={handleClick} className="bg-white dark:bg-black drop-shadow-lg group cursor-pointer rounded-xl border p-3 space-y-4 hover:shadow-lg transform hover:scale-105 transition-all duration-500">
            {/* Images and Actions */}
            <div
                className="aspect-square rounded-xl bg-gray-100 dark:bg-black relative hover:brightness-50 duration-500">
                <Image
                    src={data?.images?.[0].url}
                    fill
                    alt="Image"
                    className="aspect-square bg-cover rounded-md hover:bg-gradient-to-t from-black to-gray-400"
                />
                {/* chart n preview will appear in mid of product when we hover it */}
            </div>
            <div className="relative">
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 py-8 bottom-5 duration-500">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-sm lg:text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
}

export default ProductCard;