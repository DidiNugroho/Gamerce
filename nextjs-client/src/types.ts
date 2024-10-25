export type ProductImageType = {
  url: string;
  alt: string;
};

export type ProductType = {
  _id: string;
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
  isInWishlist: boolean;
}

export type WishlistResponseType = WishlistItemType[];
