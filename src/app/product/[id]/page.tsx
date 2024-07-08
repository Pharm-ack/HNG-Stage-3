"use client";

import { useCart } from "@/context/cart-context";
import Reviews from "@/components/reviews";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { products } from "@/data";
import { cn, formatPrice } from "@/lib/utils";
import { CheckIcon, HeartIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";

export default function ProductDetail() {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }
  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }
  return (
    <div className="">
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 pb-14 pt-10 sm:px-6 md:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="grid items-start gap-4 md:gap-10">
          <div className="grid gap-4">
            <Image
              width={450}
              height={300}
              src={product.image[mainImageIndex]}
              alt={product.name}
              className="w-[450px] overflow-hidden rounded-lg border object-cover"
            />
            <div className="hidden items-start gap-4 md:flex">
              {product.image.map((image, index) => (
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
                    src={image}
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
            <h1 className="text-3xl font-bold lg:text-4xl">
              Acme Circles T-Shirt
            </h1>
            <div className="flex items-center gap-1">
              ⭐⭐⭐⭐⭐ <span className="text-sm">157 reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-primary text-lg font-bold">
                {formatPrice(product.price)}
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
    </div>
  );
}
