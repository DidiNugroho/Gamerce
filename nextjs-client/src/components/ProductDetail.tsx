"use client"; // This component can use client-side features

import AddToWishlist from "@/components/AddToWishlist";
import { useState } from "react";

interface ProductDetailClientProps {
  productId: string;
}

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
