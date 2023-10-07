import React from "react";
import NoResults from "./ui/no-result";
import ProductCard from "./ui/product-cart";
import { Product } from "@/types";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div id="scroll-container" className="scrollable-x-container">
        <div className="carousel-content">
          {items.map((item) => (
            <div key={item.id} className="carousel-item">
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
