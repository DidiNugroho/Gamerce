import AddToWishlist from "@/components/AddToWishlist";
import ProductGallery from "@/components/ProductGallery";
import { ProductType } from "@/types";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

async function fetchProduct(slug: string): Promise<ProductType | null> {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${slug}`);
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

          <div className="mb-24">
            <span className="font-semibold">Tags: </span>
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 px-2 py-1 rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <AddToWishlist />
        </div>
      </div>
      <div>
        <p className="text-2xl mb-4 mt-16 font-extrabold">Product Description</p>
        <p className="mb-4 mt-12">{product.description}</p>
      </div>
    </div>
  );
}
