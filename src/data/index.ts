interface Category {
  id: string;
  name: string;
}

export interface Price {
  amount: number;
  currency: string;
}

interface Photo {
  url: string;
  is_default: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  available_quantity: number;
  current_price: Price[] | number;
  categories: Category[];
  is_available: boolean;
  photos: Photo[];
  url_slug: string;
  unique_id: string;
  date_created: string;
  last_updated: string;
  selling_price: number | null;
}

export interface ProductsResponse {
  items: Product[];
  next_page: number | null;
  page: number;
  size: number;
  total: number;
}
export const reviews = [
  {
    id: 1,
    name: "Jonny",
    rating: 5,
    image: "/jonny.png",
    content: "Great product, I love it!",
  },
  {
    id: 2,
    name: "Marcus",
    image: "/marcus.png",
    rating: 4,
    content:
      "The product is amazing! It has exceeded my expectations in every way.",
  },
  {
    id: 3,
    name: "Sanjay",
    rating: 3,
    image: "/sanjay.png",
    content: "The quality is top-notch, and the features are incredibly",
  },
];
