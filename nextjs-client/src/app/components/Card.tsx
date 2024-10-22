import Image from "next/image";

// Card.tsx
interface CardProps {
  product: {
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
      <Image
        src={product.thumbnail}
        alt={product.name}
        width={300} 
        height={200} 
        className="object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{product.name}</h2>
        <p className="text-gray-700 text-sm">{product.excerpt}</p>
        <p className="text-xl font-bold mt-2">{`$${product.price}`}</p>
      </div>
    </div>
  );
}
