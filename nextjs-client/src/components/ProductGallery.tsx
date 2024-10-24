"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: { url: string; alt: string }[];
  thumbnail: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  thumbnail,
}) => {
  const [selectedImage, setSelectedImage] = useState(thumbnail);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col items-center gap-4 mr-6">
      <Image
        width={1000}
        height={1000}
        src={selectedImage || "/fallback-image.jpg"}
        alt="Selected Product Image"
        className="object-cover h-96"
      />

      <div className="flex gap-2">
        {images.map((image, index) => (
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
  );
};

export default ProductGallery;
