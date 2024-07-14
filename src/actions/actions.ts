"use server";

import { cookies } from "next/headers";

export async function getProducts(
  page: string = "1",
  size: string = "10",
  category: string = "All",
) {
  const { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_ORG_ID } =
    process.env;

  if (!NEXT_PUBLIC_APP_ID || !NEXT_PUBLIC_API_KEY || !NEXT_PUBLIC_ORG_ID) {
    throw new Error("Missing environment variables");
  }

  try {
    let url = `https://api.timbu.cloud/products?organization_id=${NEXT_PUBLIC_ORG_ID}&reverse_sort=false&page=${page}&size=${size}&Appid=${NEXT_PUBLIC_APP_ID}&Apikey=${NEXT_PUBLIC_API_KEY}`;

    if (category !== "All") {
      url += `&category=${category}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Cookie: cookies().toString(),
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

export async function getProductBySlug(url_slug: string) {
  const { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_ORG_ID } =
    process.env;

  if (!NEXT_PUBLIC_APP_ID || !NEXT_PUBLIC_API_KEY || !NEXT_PUBLIC_ORG_ID) {
    throw new Error("Missing environment variables");
  }

  try {
    const response = await fetch(
      `https://api.timbu.cloud/products/${url_slug}?organization_id=${NEXT_PUBLIC_ORG_ID}&Appid=${NEXT_PUBLIC_APP_ID}&Apikey=${NEXT_PUBLIC_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Cookie: cookies().toString(),
        },
      },
    );

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw new Error("Failed to fetch product details");
  }
}
