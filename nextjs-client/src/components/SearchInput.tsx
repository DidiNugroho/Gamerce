import React from "react";

export default function SearchInput() {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 rounded-md text-black placeholder-gray-400 border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
    />
  );
}
