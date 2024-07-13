"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useCart } from "../../context/cart-context";
import { formatPrice } from "@/lib/utils";
import { Price } from "@/data";
import { IoCartOutline } from "react-icons/io5";

const getPrice = (price: Price[] | number): number => {
  if (Array.isArray(price)) {
    return price[0].amount;
  }
  return price;
};

const IMAGE_BASE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL || "https://api.timbu.cloud/images/";

const getFullImageUrl = (relativeUrl: string) => {
  if (relativeUrl.startsWith("http://") || relativeUrl.startsWith("https://")) {
    return relativeUrl;
  }
  return `${IMAGE_BASE_URL}${relativeUrl.startsWith("/") ? "" : "/"}${relativeUrl}`;
};
export default function Component() {
  const pathName = usePathname();
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();

  const subtotal = cart.reduce(
    (total, item) => total + getPrice(item.current_price) * item.quantity,
    0,
  );

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="mx-auto flex max-w-screen-sm flex-col px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <IoCartOutline className="h-8 w-8" />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <p className="text-center">Your cart is empty</p>
            <p className="text-center">
              Browse our collections and discover our best deals!
            </p>
          </CardContent>
          <CardFooter className="flex">
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Start Shopping</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold text-gray-600 sm:mb-6">
          Your Cart
        </h1>
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="w-full md:w-2/3">
            <Card className="mb-8 md:mb-0">
              <CardContent className="flex flex-col gap-5 p-4 sm:gap-4">
                {cart.map((item, index) => {
                  const defaultPhoto =
                    item.photos.find((photo) => photo.is_default) ||
                    item.photos[0];
                  return (
                    <div
                      key={item.id}
                      className={`flex gap-2 pb-5 md:gap-x-5 ${
                        index !== cart.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      {defaultPhoto && (
                        <Image
                          alt={item.name}
                          width={100}
                          height={100}
                          className="aspect-square rounded-md object-cover sm:w-[150px]"
                          src={getFullImageUrl(defaultPhoto.url)}
                        />
                      )}
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-center justify-between text-sm sm:text-lg">
                          <div className="max-w-56">
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <button
                            className="text-[#FF3333]"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <TrashIcon className="h-6 w-6" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between text-sm sm:text-base">
                          <span className="text-gray-500">
                            {formatPrice(getPrice(item.current_price))}
                          </span>
                          <div className="flex items-center space-x-2 rounded-full bg-[#F0F0F0] px-2 py-[.125rem] sm:space-x-4 sm:px-4">
                            <button onClick={() => decreaseQuantity(item.id)}>
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item.id)}>
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:w-1/3">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tax (8%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 lg:gap-3">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
                <Button className="w-full">
                  <Link href="/payment">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
