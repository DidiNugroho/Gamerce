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
      <div className="bg-white rounded-lg shadow-md p-4 m-2 flex flex-col items-center w-48">
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover mb-2 rounded"
        />
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">{product.excerpt}</p>
        <p className="font-semibold text-xl">{`$${product.price}`}</p>
        <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition duration-300">
          View Product
        </button>
      </div>
    );
  }