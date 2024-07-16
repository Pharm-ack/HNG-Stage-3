"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "@/context/cart-context";
import Reviews from "@/components/reviews";
import { cn, formatPrice, TformatPrice } from "@/lib/utils";
import { CheckIcon, HeartIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Product } from "@/data";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { useParams } from "next/navigation";
import { getProduct } from "@/lib/api";
const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "https://api.timbu.cloud/images/";

const ProductDetail = () => {
  const params = useParams();
  const url_slug = params.url_slug as string;
  console.log(url_slug);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const { addToCart } = useCart();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<Product, Error>({
    queryKey: ["product", url_slug],
    queryFn: () => getProduct(url_slug),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  console.log(product);
  const handleImageClick = (index: number) => {
    setMainImageIndex(index);
  };

  const getFullImageUrl = (relativeUrl: string) => {
    if (
      relativeUrl.startsWith("http://") ||
      relativeUrl.startsWith("https://")
    ) {
      return relativeUrl;
    }
    return `${IMAGE_BASE_URL}${relativeUrl.startsWith("/") ? "" : "/"}${relativeUrl}`;
  };

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const priceDisplay = product?.current_price
    ? formatPrice(product.current_price)
    : "Price not available";

  const defaultPhoto =
    product.photos && product.photos.length > 0
      ? product.photos.find((photo) => photo.is_default) || product.photos[0]
      : null;

  return (
    <>
      <div className="mx-auto grid max-w-screen-xl items-start gap-5 px-4 pb-14 pt-14 sm:px-6 md:grid-cols-2 lg:gap-6 lg:px-8">
        <div className="grid items-start gap-4 md:gap-10">
          <div className="grid gap-4">
            {defaultPhoto && (
              <Image
                width={450}
                height={300}
                src={getFullImageUrl(
                  product.photos[mainImageIndex]?.url || defaultPhoto.url,
                )}
                alt={product.name}
                className="aspect-[4/4] w-[450px] overflow-hidden rounded-lg border object-cover"
              />
            )}
            <div className="hidden items-start gap-4 md:flex">
              {product.photos &&
                product.photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={cn(
                      index === mainImageIndex
                        ? "border-2 border-[#9747FF]"
                        : "border border-transparent",
                      "relative cursor-pointer overflow-hidden rounded-lg",
                    )}
                  >
                    <Image
                      src={getFullImageUrl(photo.url)}
                      alt={`Preview thumbnail ${index + 1}`}
                      width={100}
                      height={120}
                      className="aspect-[5/6] object-cover"
                    />
                    <span className="sr-only">View Image {index + 1}</span>
                  </button>
                ))}
            </div>
          </div>

          <Reviews className="hidden md:grid" />
        </div>

        <div className="grid items-start gap-4 md:gap-10">
          <div className="grid gap-4">
            <h1 className="text-3xl font-bold lg:text-4xl">{product.name}</h1>
            <div className="flex items-center gap-1">
              ⭐⭐⭐⭐⭐ <span className="text-sm">157 reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-primary text-lg font-bold">
                {priceDisplay}
              </span>
            </div>
            <div className="grid gap-4">
              <h2 className="text-xl font-bold">Features</h2>
              <ul className="text-muted-foreground grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="fill-primary h-5 w-5" />
                  Made with full cotton
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="fill-primary h-5 w-5" />
                  Slim fit for any body
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="fill-primary h-5 w-5" />
                  Quality control by JC
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="flex items-center justify-center rounded-md bg-[#191919] px-5 py-2 text-white sm:w-[309px]"
              onClick={() => addToCart(product)}
            >
              Add to Cart <IoCartOutline className="ml-3 h-5 w-5" />
            </button>
            <button className="flex w-[50px] items-center justify-center rounded-md bg-[#BABABA] py-1 pl-2">
              <HeartIcon className="mr-2 h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <span className="flex items-center justify-start gap-2">
              <MdOutlineLocalShipping />
              Free shipping nationwide
            </span>
            <span className="flex items-center justify-start gap-2">
              <AiOutlineSafetyCertificate />
              100% Secured Payment
            </span>
            <span className="flex items-center justify-start gap-2">
              <IoPersonOutline />
              Made by Professionals
            </span>
          </div>
        </div>
        <Reviews className="md:hidden" />
      </div>
      <div className="mx-auto grid max-w-screen-xl items-start px-4 pb-14 pt-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="grid items-start gap-4 md:gap-8">
          <div className="grid gap-4">
            {defaultPhoto && (
              <Image
                width={450}
                height={300}
                src={getFullImageUrl(
                  product.photos[mainImageIndex]?.url || defaultPhoto.url,
                )}
                alt={product.name}
                className="aspect-[4/4] w-full max-w-[450px] overflow-hidden rounded-lg border object-cover"
              />
            )}
            <div className="hidden items-start gap-4 md:flex">
              {product.photos &&
                product.photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageClick(index)}
                    className={cn(
                      index === mainImageIndex
                        ? "border-2 border-[#9747FF]"
                        : "border border-transparent",
                      "relative cursor-pointer overflow-hidden rounded-lg",
                    )}
                  >
                    <Image
                      src={getFullImageUrl(photo.url)}
                      alt={`Preview thumbnail ${index + 1}`}
                      width={100}
                      height={120}
                      className="aspect-[5/6] object-cover"
                    />
                    <span className="sr-only">View Image {index + 1}</span>
                  </button>
                ))}
            </div>
          </div>
          <Reviews className="hidden md:grid" />
        </div>
        <div className="grid items-start gap-4 md:gap-8">
          <div className="grid gap-4">
            <h1 className="text-3xl font-bold lg:text-4xl">{product.name}</h1>
            <div className="flex items-center gap-1">
              ⭐⭐⭐⭐⭐ <span className="text-sm">157 reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-primary text-lg font-bold">
                {priceDisplay}
              </span>
            </div>
            <div className="grid gap-4">
              <h2 className="text-xl font-bold">Features</h2>
              <ul className="text-muted-foreground grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckIcon className="fill-primary h-5 w-5" />
                  Made with full cotton
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="fill-primary h-5 w-5" />
                  Slim fit for any body
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="fill-primary h-5 w-5" />
                  Quality control by JC
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center rounded-md bg-[#191919] px-5 py-2 text-white sm:w-[309px]"
              onClick={() => addToCart(product)}
            >
              Add to Cart <IoCartOutline className="ml-3 h-5 w-5" />
            </button>
            <button className="flex w-[50px] items-center justify-center rounded-md bg-[#BABABA] py-1 pl-2">
              <HeartIcon className="mr-2 h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <span className="flex items-center justify-start gap-2">
              <MdOutlineLocalShipping />
              Free shipping nationwide
            </span>
            <span className="flex items-center justify-start gap-2">
              <AiOutlineSafetyCertificate />
              100% Secured Payment
            </span>
            <span className="flex items-center justify-start gap-2">
              <IoPersonOutline />
              Made by Professionals
            </span>
          </div>
        </div>
        <Reviews className="md:hidden" />
      </div>
    </>
  );
};

export default ProductDetail;

const ProductDetailSkeleton = () => (
  <div className="pt-16">
    <div className="mx-auto grid max-w-screen-xl items-start gap-5 px-4 pb-14 pt-10 sm:px-6 md:grid-cols-2 lg:gap-6 lg:px-8">
      <div className="h-[450px] w-full animate-pulse rounded-lg bg-gray-200"></div>
      <div className="grid gap-4">
        <div className="h-8 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        <div className="h-4 w-1/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
);
