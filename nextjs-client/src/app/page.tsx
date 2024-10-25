import Image from "next/image";
import Link from "next/link";
import FeaturedCard from "@/components/FeaturedCard";
export default function Home() {
  
  return (
    <div className="relative font-sans">
      <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          width={200}
          height={200}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] max-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 overflow-hidden">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Find Your Favorite Product
          </h2>
          <p className="sm:text-lg text-base text-center text-gray-200">
            Add your favorite product to your wishlist today!
          </p>
          <button
            type="button"
            className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Find Now
          </button>
        </div>
      </div>

      {/* Products Display Section */}
      <div className="overflow-x-auto ml-64 mr-64 py-6">
        <div className="flex justify-between items-center mb-4 ml-12">
          <div className="flex">
            <h2 className="text-4xl ml-48 font-bold">Gamers Favourite.</h2>
            <h2 className="text-4xl text-gray-500 font-bold ml-2">
              Best Sellers.
            </h2>
          </div>
          <div className="flex justify-end">
            <Link
              href="/products"
              className="bg-black text-white px-4 mr-56 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              See All
            </Link>
          </div>
        </div>

        {/* Horizontal Scrollable Cards Section */}
        <div className="overflow-x-auto py-4">
          <div className="flex space-x-6 max-w-6xl mx-auto">
            <FeaturedCard />
          </div>
        </div>

      </div>
    </div>
  );
}
