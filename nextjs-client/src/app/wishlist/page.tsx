"use client";

import { WishlistResponseType } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistResponseType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/wishlist');
        if (!response.ok) {
          throw new Error('Failed to fetch wishlist');
        }
        const data: WishlistResponseType = await response.json();
        console.log(data)
        setWishlist(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {wishlist && wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist?.map((item) => (
            <li key={item.productId}>
              <h2>{item.ProductData?.name}</h2>
              <p>{item.ProductData?.description}</p>
              <p>Price: ${item.ProductData?.price}</p>
              {item.ProductData?.images?.map((image) => (
                <Image 
                  width={200} 
                  height={200} 
                  key={image.url} 
                  src={image.url} 
                  alt={image.alt} 
                />
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
