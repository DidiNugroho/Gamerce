// WishlistCard.tsx
"use client";

import Image from "next/image";
import React from "react";
import RemoveWishlistButton from "./RemoveFromWishlistButton";
import { WishlistCardProps } from "@/types";

export default function WishlistCard({
  _id,
  title,
  description,
  price,
  images,
  excerpt,
  slug,
  onProductRemoved,
}: WishlistCardProps) {
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
          <RemoveWishlistButton _id={_id} onProductRemoved={onProductRemoved} />
        </div>
      </div>
    </article>
  );
}
