"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

interface RemoveWishlistButtonProps {
  _id: string;
  onProductRemoved: () => void;
}

export default function RemoveWishlistButton({
  _id,
  onProductRemoved,
}: RemoveWishlistButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id }),
      });

      const response = await res.json();

      if (!res.ok) throw new Error(response.message || "Failed to remove from wishlist");

      Swal.fire({
        title: "Success!",
        text: "Product removed from wishlist successfully!",
        icon: "success",
        confirmButtonText: "Nice",
      });

      onProductRemoved();
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
      onClick={handleRemove}
      disabled={loading}
      className={`py-2 px-4 rounded-lg transition duration-300 ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-500 hover:bg-red-600 text-white"
      }`}
    >
      {loading ? "Removing..." : "Remove From Wishlist"}
    </button>
  );
}
