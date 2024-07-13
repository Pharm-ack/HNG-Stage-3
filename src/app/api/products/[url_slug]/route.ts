import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { url_slug: string } },
) {
  const url_slug = params.url_slug;

  const { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_ORG_ID } =
    process.env;

  if (!NEXT_PUBLIC_APP_ID || !NEXT_PUBLIC_API_KEY || !NEXT_PUBLIC_ORG_ID) {
    return NextResponse.json(
      { error: "Missing environment variables" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(
      `https://api.timbu.cloud/products/${url_slug}?organization_id=${NEXT_PUBLIC_ORG_ID}&Appid=${NEXT_PUBLIC_APP_ID}&Apikey=${NEXT_PUBLIC_API_KEY}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching product details:", error);
    return NextResponse.json(
      { error: "Failed to fetch product details" },
      { status: 500 },
    );
  }
}
