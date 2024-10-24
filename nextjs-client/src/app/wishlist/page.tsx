"use client";

import WishlistCard from '@/components/WishlistCard';
import { WishlistResponseType } from '@/types';
import React, { useEffect, useState } from 'react';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistResponseType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWishlist = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/wishlist');
      if (!response.ok) {
        throw new Error('Failed to fetch wishlist');
      }
      const data: WishlistResponseType = await response.json();
      console.log(data);
      setWishlist(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {wishlist && wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlist?.map((item) => (
            <WishlistCard 
              key={item.productId}
              _id={item._id}
              productId={item.productId} 
              title={item.ProductData?.name} 
              slug={item.ProductData?.slug} 
              excerpt={item.ProductData?.excerpt} 
              description={item.ProductData?.description}
              price={item.ProductData?.price}
              images={item.ProductData?.images} 
              onProductRemoved={fetchWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
}
