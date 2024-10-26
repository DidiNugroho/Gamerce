export interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

//Products and Wishlist Types
export interface ProductImageType {
  url: string;
  alt: string;
};

export interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export interface ProductDetailClientProps {
  productId: string;
}

export interface ProductGalleryProps {
  images: { url: string; alt: string }[];
  thumbnail: string;
}

export interface ProductType {
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


//Components Types
export interface AddToWishlistProps {
  productId: string;
  onProductAdded: () => void
}

export interface RemoveWishlistButtonProps {
  _id: string;
  onProductRemoved: () => void;
}

export interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

//Card Types
export interface CardProps {
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
  wishlist: { _id: string, productId: string, isInWishlist: boolean }[];
  onProductRemoved: () => void
  onProductAdded: () => void
}

export interface WishlistCardProps {
  _id: string;
  productId: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  excerpt: string;
  images: { url: string; alt: string }[];
  onProductRemoved: () => void;
}

export interface ProductCardProps {
  product: ProductType;
}