import ProductDetailClient from "@/components/ProductDetail";
import ProductGallery from "@/components/ProductGallery";
import { ProductType } from "@/types";
import { Metadata } from "next";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const slug = params.slug;

  const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`).then((res) => res.json());
  return {
    title: "Gamerce | " + product.name,
    description: product.description,
    openGraph: {
      images: [product.images[0]],
    },
  };
}

async function fetchProduct(slug: string): Promise<ProductType | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const product = await fetchProduct(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <ProductGallery images={product.images} thumbnail={product.thumbnail} />
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-12">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.excerpt}</p>
          <div className="text-lg font-semibold mb-4">
            Price: ${product.price.toLocaleString()}
          </div>

          <div className="mb-12">
            <span className="font-semibold">Tags: </span>
            {product.tags.map((tag) => (
              <span key={tag} className="bg-gray-200 px-2 py-1 rounded-full mr-2">
                {tag}
              </span>
            ))}
          </div>

          {/* Render the client component for interactive behavior */}
          <ProductDetailClient productId={product._id} />
        </div>
      </div>
      <div>
        <p className="text-2xl mb-4 mt-16 font-extrabold">Product Description</p>
        <p className="mb-4 mt-12">{product.description}</p>
      </div>
    </div>
  );
}
