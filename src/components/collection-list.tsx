import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { cn, TformatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data";
import { getProduct } from "@/lib/api"; // Make sure this import is correct

interface CollectionListProps {
  product: Product;
}

const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "https://api.timbu.cloud/images/";

const CollectionList: React.FC<CollectionListProps> = ({ product }) => {
  const queryClient = useQueryClient();

  const defaultPhoto =
    product.photos.find((photo) => photo.is_default) || product.photos[0];

  const getFullImageUrl = (relativeUrl: string) => {
    if (
      relativeUrl.startsWith("http://") ||
      relativeUrl.startsWith("https://")
    ) {
      return relativeUrl;
    }
    return `${IMAGE_BASE_URL}${relativeUrl.startsWith("/") ? "" : "/"}${relativeUrl}`;
  };

  const prefetchProduct = () => {
    queryClient.prefetchQuery({
      queryKey: ["product", product.url_slug],
      queryFn: () => getProduct(product.url_slug),
      staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
      gcTime: 1000 * 60 * 30, // Cache data for 30 minutes
    });
  };

  return (
    <div className={cn("group relative flex w-full flex-none flex-col gap-3")}>
      <div className="group relative">
        {defaultPhoto && (
          <Image
            alt={product.name}
            className="aspect-square w-full rounded-md transition-transform duration-300 ease-in-out"
            width={298}
            height={318}
            src={getFullImageUrl(defaultPhoto.url)}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
          <Link
            href={`/product/${product.url_slug}`}
            className="rounded-full bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            onMouseEnter={prefetchProduct}
          >
            View Product
          </Link>
        </div>
      </div>

      <div className="mt-1 flex flex-col items-center justify-center gap-y-1 px-1">
        <h3 className="text-default-700 text-center text-sm font-medium">
          {product.name}
        </h3>
        <p className="text-default-500 text-center text-sm font-medium">
          {TformatPrice(product.current_price)}
        </p>
        <div className="flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <Image key={i} src="/star.png" width={20} height={20} alt="star" />
          ))}
          <Image src="/blackstart.png" width={19} height={19} alt="star" />
          <span className="text-sm">(4.7)</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
