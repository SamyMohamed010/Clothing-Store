export interface Product {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
  sale?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  image: string;
  count: number;
}
