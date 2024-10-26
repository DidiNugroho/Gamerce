"use client"; 

import AddToWishlist from "@/components/AddToWishlist";
import { ProductDetailClientProps } from "@/types";
import { useState } from "react";

const ProductDetailClient: React.FC<ProductDetailClientProps> = ({
  productId,
}) => {
  const [productAdded, setProductAdded] = useState(false);

  const handleProductAdded = async () => {
    setProductAdded(true);
  };

  return (
    <>
      <AddToWishlist
        productId={productId}
        onProductAdded={handleProductAdded}
      />
      {productAdded && <p>Product added to wishlist!</p>}
    </>
  );
};

export default ProductDetailClient;
