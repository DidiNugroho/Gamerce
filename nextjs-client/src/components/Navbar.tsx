"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authContext";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="flex py-8 items-center justify-between p-4 bg-gray-900 text-white">
      <Link href="/" className="flex items-center space-x-4">
        <Bars3Icon className="w-10 h-10 text-white" />
        <span className="text-4xl font-bold">Gamerce</span>
      </Link>

      <div className="flex-1 mx-4">
        <SearchInput />
      </div>

      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            <Link href="/wishlist" className="hover:underline">
              Wishlist
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:underline">
              Sign In
            </Link>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            <Link href="/wishlist" className="hover:underline">
              Wishlist
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
