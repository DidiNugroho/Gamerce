import Image from "next/image";

interface Product {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-60 h-96 flex flex-col">
      {/* Image Section */}
      <div className="h-40 w-full mb-2">
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={160}
          height={160}
          className="object-cover w-full h-full rounded"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex-grow flex flex-col items-center">
        {/* Name with fixed height */}
        <h3 className="font-bold text-lg text-center mb-1 h-6 overflow-hidden">
          {product.name}
        </h3>

        {/* Excerpt with fixed height */}
        <p className="text-gray-600 text-sm text-center h-10 overflow-hidden">
          {product.excerpt}
        </p>

        {/* Price with margin spacing */}
        <p className="font-semibold text-xl mt-2">{`$${product.price}`}</p>
      </div>

      {/* Button Section */}
      <button className="mt-auto bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-300">
        View Product
      </button>
    </div>
  );
}
