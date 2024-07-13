import { Product, ProductsResponse } from "@/data";

//
export const getProducts = async (
  page: number = 1,
  size: number = 10,
  category: string = "All",
): Promise<ProductsResponse> => {
  // Get the base URL from environment variables
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const url = new URL(`${baseUrl}/api/products`);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("size", size.toString());
  url.searchParams.append("category", category);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const getProduct = async (url_slug: string): Promise<Product> => {
  const response = await fetch(`/api/products/${url_slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  const product = await response.json();
  if (!product) {
    throw new Error("Product not found");
  }
  console.log(product);
  return product;
};
