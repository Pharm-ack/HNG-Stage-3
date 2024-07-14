import { getProductBySlug } from "@/actions/actions";
import { Product, ProductsResponse } from "@/data";

export const getProduct = async (url_slug: string): Promise<Product> => {
  return getProductBySlug(url_slug);
};
