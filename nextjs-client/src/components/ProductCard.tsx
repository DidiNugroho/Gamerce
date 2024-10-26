import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="bg-white rounded-lg shadow-md p-4 w-60 h-96 flex-shrink-0 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="h-40 w-full mb-2">
        <Image
          src={product.thumbnail}
          alt={product.name}
          width={160}
          height={160}
          className="object-cover w-full h-full rounded"
        />
      </div>

      <div className="flex-grow flex flex-col items-center">
        <h3 className="font-bold text-lg text-center mb-1 h-6 overflow-hidden">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-8 text-sm text-center h-10 overflow-hidden">
          {product.excerpt}
        </p>

        <p className="font-semibold text-xl mt-12">{`$${product.price}`}</p>
      </div>
    </Link>
  );
}
