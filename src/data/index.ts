import exp from "constants";

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string[];
  category: string;
};

export const products = [
  {
    id: 1,
    name: "Men Printed T-Shirt",
    price: 12000,
    category: "T-shirts",
    image: [
      "/product1.png",
      "/Tproduct1A.png",
      "Tproduct1B.png",
      "Tproduct1C.png",
    ],
  },
  {
    id: 2,
    name: "Alberta Sunset Men’s Shirt",
    price: 12000,
    category: "T-shirts",
    image: [
      "/product2.png",
      "/Tproduct2A.png",
      "/Tproduct2B.png",
      "/Tproduct2C.png",
    ],
  },
  {
    id: 3,
    name: "Men Cartoon Face Print Tee",
    price: 12000,
    category: "T-shirts",
    image: [
      "/product3.png",
      "/Tproduct3A.png",
      "/Tproduct3B.png  ",
      "/Tproduct3C.png",
    ],
  },
  {
    id: 4,
    name: "Unisex Hoodies Pullover Sweatshirts Anime Jujutsu Kaisen Print Sweater",
    price: 12000,
    category: "Hoodies",
    image: [
      "/product4.png",
      "/Hproduct4A.png",
      "/Hproduct4B.png",
      "/Hproduct4C.png",
    ],
  },
  {
    id: 5,
    name: "Toji Fushiguro Noir Hoodie - Jujustu Kaisen XXL ",
    price: 12000,
    category: "Hoodies",
    image: [
      "/product5.png",
      "/Hproduct5A.png",
      "Hproduct5B.png",
      "/Hproduct5C.png",
    ],
  },
  {
    id: 6,
    name: "TOPBRAND LIFE Men's Polyester Simple Casual Sweater Top Black-XL",
    price: 12000,
    category: "Hoodies",
    image: [
      "/product6.png",
      "/Hproduct6A.png",
      "/Hproduct6B.png",
      "/Hproduct6C.png",
    ],
  },
  {
    id: 7,
    name: "TOPBRAND LIFE Men's Polyester Simple Casual Sweater Top Black-XL",
    price: 12000,
    category: "Sweet Shirts",
    image: [
      "/product7.png",
      "/Sproduct7A.png",
      "/Sproduct7B.png",
      "/Sproduct7C.png",
    ],
  },
  {
    id: 8,
    name: "396 Hooded Casual Jacket",
    price: 12000,
    category: "Sweet Shirts",
    image: [
      "/product8.png",
      "/Sproduct8A.png",
      "/Sproduct8B.png",
      "/Sproduct8C.png",
    ],
  },
];

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
