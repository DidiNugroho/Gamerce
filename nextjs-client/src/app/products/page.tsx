"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
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
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const fetchProducts = async (query: string = "") => {
    setLoading(true);
    setError(null);

    try {
      const url = query
        ? `http://localhost:3000/api/products?q=${encodeURIComponent(query)}`
        : `http://localhost:3000/api/products`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const data = await response.json();
      setProductsData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(searchQuery);
  }, [searchQuery]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4 mr-24 ml-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8">
        {productsData.length > 0 ? (
          productsData.map((product) => (
            <Link key={product._id} href={`/products/${product.slug}`}>
              <Card product={product} />
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
