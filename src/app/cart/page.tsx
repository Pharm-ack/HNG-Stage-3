"use client";

import { useState } from "react";
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

export default function Component() {
  const pathName = usePathname();

  // i want to read the url path name if is /cart then i want to show the cart page
  const [cart, setCart] = useState([
    {
      id: 1,
      image: "/product1.png",
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      image: "/product2.png",
      name: "Autumn Mug",
      price: 12.99,
      quantity: 2,
    },
  ]);
  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };
  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <span className="text-grey-600 mb-4 text-sm">
        <Link href="/">Home</Link> &gt; {pathName === "/cart" ? "Cart" : ""}{" "}
      </span>
      <h1 className="mb-8 text-2xl font-bold text-gray-600 sm:mb-6">
        Your Cart
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-[1fr_400px]">
        <div className="grid gap-5 sm:gap-4">
          {cart.map((item) => (
            <Card key={item.id} className="p-2 sm:p-4">
              <div className="flex gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-[127px] rounded-md object-cover"
                />
                <div className="grid flex-1 gap-4">
                  <div className="sm:text-medium flex items-center justify-between text-sm">
                    <span className="font-medium">{item.name}</span>
                    <button
                      className="text-[#FF3333]"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="sm:text-medium mt-auto flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center space-x-2 rounded-full bg-[#F0F0F0] px-1 sm:space-x-4 sm:px-4">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 lg:flex-col lg:gap-3">
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
            <Button className="w-full">Proceed to Checkout</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
