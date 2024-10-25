"use client";

import { useState } from "react";
import Swal from "sweetalert2";

interface AddToWishlistProps {
  productId: string;
  onProductAdded: () => void
}

export default function AddToWishlist({ productId, onProductAdded }: AddToWishlistProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const response = await res.json();

      if (!res.ok) throw new Error(response.message || "Failed to add to wishlist");

      onProductAdded()

      Swal.fire({
        title: "Success!",
        text: "Product added to wishlist!",
        icon: "success",
        confirmButtonText: "Nice",
      });
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={loading}
    >
      {loading ? "Adding..." : "Add to Wishlist"}
    </button>
  );
}
