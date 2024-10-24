"use client";

import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";

interface WishlistCardProps {
  _id: string;
  productId: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  excerpt: string;
  images: { url: string; alt: string }[];
  onProductRemoved: () => void;
}

export default function WishlistCard({
  _id,
  productId,
  title,
  description,
  price,
  images,
  excerpt,
  slug,
  onProductRemoved
}: WishlistCardProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/wishlist", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id }),
      });

      const response = await res.json();

      if (!res.ok) throw new Error(response.message || "Failed to add to wishlist");

      Swal.fire({
        title: "Success!",
        text: "Product removed from wishlist successfully!",
        icon: "success",
        confirmButtonText: "Nice",
      });

      onProductRemoved()
      
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="w-full rounded-xl border-2 border-gray-100 bg-white shadow-md">
      <div className="flex p-4 sm:p-6 lg:p-8">
        <a href={`/products/${slug}`} className="block shrink-0">
          <Image
            width={200}
            height={200}
            alt={images[0]?.alt || "Product Image"}
            src={images[0]?.url || "fallback-image-url.jpg"}
            className="rounded-lg object-cover"
          />
        </a>
        <div className="flex flex-col justify-between ml-4">
          <div>
            <h3 className="font-medium text-lg">
              <a href={`/products/${slug}`} className="hover:underline">
                {title}
              </a>
            </h3>
            <p className="line-clamp-2 text-sm text-gray-700 mb-2">
              {description}
            </p>
            <p className="line-clamp-2 text-sm text-gray-700 mb-4">{excerpt}</p>
            <p className="text-sm font-semibold text-gray-900">
              Price: ${price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center ml-auto">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`py-2 px-4 rounded-lg transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            {loading ? "Removing..." : "Remove From Wishlist"}
          </button>
        </div>
      </div>
    </article>
  );
}
