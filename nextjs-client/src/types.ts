export type ProductImageType = {
  url: string;
  alt: string;
};

export type ProductType = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: ProductImageType[];
  createdAt: string;
  updatedAt: string;
};

export interface WishlistItemType {
  _id: string;
  userId: string;
  productId: string;
  ProductData: ProductType;
}

export type WishlistResponseType = WishlistItemType[];
