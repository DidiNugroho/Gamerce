"use client";
import { errorHandler } from "@/helpers/errorHandler";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function FeaturedCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?limit=10`);
        const data = await response.json();
        setData(data);
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
