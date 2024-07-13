// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = searchParams.get("page") || "1";
  const size = searchParams.get("size") || "10";
  const category = searchParams.get("category") || "All";

  const { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_ORG_ID } =
    process.env;

  if (!NEXT_PUBLIC_APP_ID || !NEXT_PUBLIC_API_KEY || !NEXT_PUBLIC_ORG_ID) {
    return NextResponse.json(
      { error: "Missing environment variables" },
      { status: 500 },
    );
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
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
