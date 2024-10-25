"use client";

import { useEffect, useRef, useState } from "react";
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

interface WishlistItem {
  _id: string, 
  productId: string, 
  isInWishlist: boolean
}

export default function Products() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const pageRef = useRef(1);


  const fetchWishlist = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      setWishlist(data);
    } catch (err) {
      console.error("Failed to fetch wishlist:", err);
    }
  };


  const fetchProducts = async (query: string = "") => {
    setError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?search=${query}&limit=10&page=${page}`
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

  const fetchProductsRef = useRef(fetchProducts);

  useEffect(() => {
    fetchWishlist();
    pageRef.current = 1; 
    const query = searchQuery || "";
    fetchProductsRef.current(query); 

    if (searchQuery.length === 0) {
      fetchProductsRef.current(); 
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
              <Card product={product} wishlist={wishlist} onProductRemoved={fetchWishlist} onProductAdded={fetchWishlist}/>
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
