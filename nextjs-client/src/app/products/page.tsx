"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Card from "../../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const fetchProducts = async (query: string = "") => {
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:3000/api/products?search=${query}&limit=10&page=${page}`
      );
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const data = await response.json();

      if (data.length === 0) {
        setHasMore(false);
      }

      if (data.length > 0) {
        setProductsData([...productsData, ...data]);
      }
      setPage(page + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    }
  };

  useEffect(() => {
    if(searchQuery) {
      fetchProducts(searchQuery)
      if(page < 2) {
        setHasMore(false)
      }
    }
    if(searchQuery.length == 0) {
      fetchProducts()
    }
  }, [searchQuery]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4 mr-24 ml-40">
      <InfiniteScroll
        dataLength={productsData.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8">
          {productsData.map((product) => (
            <Link key={product._id} href={`/products/${product.slug}`}>
              <Card product={product} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
