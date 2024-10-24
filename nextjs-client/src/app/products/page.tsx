"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

interface Product {
  _id: string; 
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: { url: string; alt: string }[]; 
  createdAt: string;
  updatedAt: string;
}

export default function Products() {
  const [productsData, setProductsData] = useState<Product[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); 

        setProductsData(data); 
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4 mr-4 ml-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
        {productsData.length > 0 ? (
          productsData.map((product) => (
            <Link key={product._id} href={`/products/${product.slug}`}>
              <Card product={product} />
            </Link>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
