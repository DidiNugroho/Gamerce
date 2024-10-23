"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from "react";
import Swal from "sweetalert2";

export default function RegisterForm() {
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })

  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify(input)
      })
      const response = await res.json()

      if(!res.ok) {
        throw response;
      }

      router.push("/login")
      
    } catch (error: any) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }

  return (
    <div className="flex items-center justify-between min-h-screen ml-36">
      {/* Form Container */}
      <form className="flex flex-col mr-48 justify-center max-w-lg w-full space-y-6 font-[sans-serif] text-[#333]"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="text-2xl block font-extrabold">
            Welcome to Gamerce
          </label>
          <label className="mb-2 text-sm block">
            Create Your Gamerce Account
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
            className="px-4 py-3 mt-6 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={handleChange}
            className="px-4 mt-6 py-3 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className="px-4 mt-6 py-3 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="px-4 mt-6 py-3 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 font-bold text-white py-3 mt-6 rounded-md w-full hover:bg-red-600 transition uppercase"
        >
          Sign Up
        </button>

        <div className="flex justify-center items-center mt-4">
          <span className="text-center text-xs">OR</span>
        </div>

        <div className="text-center">
          <Link href={"/login"}>
            <button
              type="button"
              className="bg-white font-bold text-black py-3 mt-2 rounded-md w-full border border-gray-400 hover:bg-gray-100 transition uppercase"
            >
              Sign In
            </button>
          </Link>
        </div>
      </form>

      {/* Image Container */}
      <div className="hidden md:flex w-full h-screen bg-black text-white p-8">
        <div className="space-y-4 mt-48">
          <h2 className="text-xl font-bold">Sign up for your FREE Gamerce account and enjoy these benefits:</h2>
          <h3 className="font-semibold">Gamerce account exclusive benefits:</h3>
          <p><strong>PRODUCTS CHECKING</strong><br />Check All Products Available.</p>
          <p><strong>WISHLIST FEATURE</strong><br />Save your favorite product to wishlist.</p>
        </div>
      </div>
    </div>
  );
}
