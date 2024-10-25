"use client";
import { errorHandler } from "@/helpers/errorHandler";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function FeaturedCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        const featuredProducts = data.slice(0, 10); // Only 10 products
        setData(featuredProducts);
      } catch (error) {
        return errorHandler(error);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className="overflow-x-auto px-4 py-6">
      <div className="flex space-x-6 max-w-6xl mx-auto">
        {data.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}
