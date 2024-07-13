import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Price } from "@/data/index";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const TformatPrice = (priceData: any) => {
  if (!priceData || !Array.isArray(priceData) || priceData.length === 0) {
    return "Price not available";
  }

  const currency = Object.keys(priceData[0])[0];
  const amount = priceData[0][currency][0];

  if (typeof amount !== "number" || isNaN(amount)) {
    return "Price not available";
  }

  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
};

export const formatPrice = (price: number | Price[]): string => {
  if (Array.isArray(price)) {
    // If it's an array, use the first price object
    if (price.length > 0) {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: price[0].currency,
      }).format(price[0].amount);
    }
    return "Price not available";
  } else if (typeof price === "number") {
    // If it's a number, format it as before
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  }
  return "Price not available";
};
