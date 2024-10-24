import Image from "next/image";
import AddToWishlist from "./AddToWishlist";

interface CardProps {
  product: {
    _id: string;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
  };
}

export default function Card({ product }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg hover:scale-105 overflow-hidden w-72 h-96 flex flex-col">
      <div className="h-48 w-full relative">
        <Image
          src={product.thumbnail}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between p-4 flex-grow">
        <h2 className="text-lg font-semibold truncate">{product.name}</h2>
        <p className="text-gray-700 text-sm truncate">{product.excerpt}</p>
        <p className="text-xl font-bold mt-2">{`$${product.price}`}</p>

        <div className="flex justify-end mt-4">
          <AddToWishlist productId={product._id} />
        </div>
      </div>
    </div>
  );
}
