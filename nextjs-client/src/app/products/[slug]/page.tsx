"use client";

import { useState } from "react";
import Image from "next/image";
import AddToWishlist from "@/app/components/AddToWishlist";

type Product = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: { url: string; alt: string }[];
  createdAt: string;
  updatedAt: string;
};

const product: Product = {
  name: "Cunabula Caelestis Volaticus",
  slug: "suspendo-tenetur",
  description:
    "Ciminatio velociter spero voro demoror vetus voluptas alter copia. Timor coniecto damno comptus usus crinis crebro tametsi. Summisse decumbo virtus calculus vomito utroque bibo aufero aro.\nAdinventitias apto aestas annus deduco capio vehemens. Delibero deporto placeat voluptatibus aeternus deficio. Vis super voluptate autem amicitia capillus vinitor suasoria sufficio deduco.",
  excerpt: "Thorax saepe deficio adimpleo conitor.",
  price: 5249399,
  tags: ["trucido", "talio", "arceo"],
  thumbnail: "https://loremflickr.com/400/400/cats",
  images: [
    { url: "https://loremflickr.com/400/400/abstract", alt: "Abstract Image" },
    { url: "https://loremflickr.com/400/400/cats", alt: "Cats Image" },
    { url: "https://loremflickr.com/400/400/food", alt: "Food Image" },
    {
      url: "https://loremflickr.com/400/400/transport",
      alt: "Transport Image",
    },
  ],
  createdAt: "2023-12-15T15:32:06.350Z",
  updatedAt: "2024-03-18T14:47:12.101Z",
};

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // const handleAddToWishlist = () => {
  //   if (!wishlist.includes(product.slug)) {
  //     setWishlist([...wishlist, product.slug]);
  //     alert(`${product.name} has been added to your wishlist!`);
  //   } else {
  //     alert(`${product.name} is already in your wishlist.`);
  //   }
  // };

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left: Main Image */}
        <div className="flex flex-col items-center gap-4 mr-6">
          <Image
            width={1000}
            height={1000}
            src={selectedImage}
            alt="Selected Product Image"
            className="object-cover h-96"
          />

          {/* Thumbnails */}
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <Image
                key={index}
                width={50}
                height={50}
                src={image.url}
                alt={image.alt}
                onClick={() => handleImageClick(image.url)}
                className={`w-16 h-16 object-cover cursor-pointer rounded ${
                  selectedImage === image.url ? "ring-2 ring-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
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
