import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <>
      <nav className="flex py-8 items-center justify-between p-4 bg-gray-900 text-white">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="https://via.placeholder.com/40"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Gamerce</span>
        </Link>

        <div className="flex-1 mx-4">
          <SearchInput />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:underline">
            Sign In
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/wishlist" className="hover:underline">
            Wishlist
          </Link>
        </div>
      </nav>
    </>
  );
}
