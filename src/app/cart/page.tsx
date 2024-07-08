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
import { IoCartOutline } from "react-icons/io5";
import { formatPrice } from "@/lib/utils";

export default function Component() {
  const pathName = usePathname();
  const {
    cart,
    removeFromCart,
    cartItemCount,
    decreaseQuantity,
    increaseQuantity,
  } = useCart();
  const subtotal = cart.reduce(
    (total, item) => total + item.price * cartItemCount,
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
    <div className="mx-auto flex max-w-screen-xl flex-col px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <span className="text-grey-600 mb-4 text-sm">
        <Link href="/">Home</Link> &gt; {pathName === "/cart" ? "Cart" : ""}
      </span>
      <h1 className="mb-8 text-2xl font-bold text-gray-600 sm:mb-6">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-[1fr_400px]">
        <Card className="grid gap-5 sm:gap-4">
          {cart.map((item) => (
            <div key={item.id} className="p-2 sm:p-4">
              <div className="flex gap-2 md:gap-x-6">
                <Image
                  src={item.image[0]}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-[200px] rounded-md object-cover"
                />
                <div className="grid flex-1 gap-4">
                  <div className="sm:text-medium flex items-center justify-between text-sm">
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
                  <div className="sm:text-medium mt-auto flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {formatPrice(item.price)}
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
            </div>
          ))}
        </Card>
        <Card className="">
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
          <CardFooter className="flex flex-col gap-2 lg:flex-col lg:gap-3">
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
            <Button className="w-full">
              <Link href="/payment">Proceed to Checkout</Link>{" "}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
