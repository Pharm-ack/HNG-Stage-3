"use client";

import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Price } from "@/data";

const getPrice = (price: Price[] | number): number => {
  if (Array.isArray(price)) {
    return price[0].amount;
  }
  return price;
};

export default function Component() {
  const { cart } = useCart();
  const pathName = usePathname();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const subtotal = cart.reduce(
    (total, item) => total + getPrice(item.current_price) * item.quantity,
    0,
  );

  const shipping = 2000;
  const tax = subtotal * 0.08;
  const total = subtotal + tax + shipping;

  const onSubmit = (data: any) => {
    router.push("/payment/success");
  };

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="text-grey-600 mb-5 flex items-center justify-start gap-x-2 text-sm">
          <Link href="/">Home</Link> &gt; <Link href="/cart">Cart</Link> &gt;
          {pathName === "/payment" ? "Payment" : ""}
        </div>
        <h1 className="mb-8 text-2xl font-bold text-gray-600 sm:mb-6">
          Payment
        </h1>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="w-full md:order-2 md:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle className="uppercase">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Shipping</span>
                      <span>{formatPrice(shipping)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Tax</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full md:order-1 md:w-1/2">
            <div className="flex flex-col gap-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Card>
                  <CardHeader>
                    <CardTitle className="uppercase">Contact Info</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {String(errors.email.message)}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">
                          {String(errors.phone.message)}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="uppercase">
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">
                          {String(errors.name.message)}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your address"
                        {...register("address", {
                          required: "Address is required",
                        })}
                      />
                      {errors.address && (
                        <p className="text-sm text-red-500">
                          {String(errors.address.message)}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex flex-col gap-2 sm:w-1/2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Enter your city"
                          {...register("city", {
                            required: "City is required",
                          })}
                        />
                        {errors.city && (
                          <p className="text-sm text-red-500">
                            {String(errors.city.message)}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 sm:w-1/2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          placeholder="Enter your state"
                          {...register("state", {
                            required: "State is required",
                          })}
                        />
                        {errors.state && (
                          <p className="text-sm text-red-500">
                            {String(errors.state.message)}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex flex-col gap-2 sm:w-1/2">
                        <Label htmlFor="zip">Zip Code</Label>
                        <Input
                          id="zip"
                          type="number"
                          placeholder="Enter your zip code"
                          {...register("zip", {
                            required: "Zip code is required",
                          })}
                        />
                        {errors.zip && (
                          <p className="text-sm text-red-500">
                            {String(errors.zip.message)}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 sm:w-1/2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                          onValueChange={(value) => setValue("country", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ng">Nigeria</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="mx">Mexico</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.country && (
                          <p className="text-sm text-red-500">
                            {String(errors.country.message)}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="uppercase">
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        type="number"
                        placeholder="Enter your card number"
                        {...register("cardNumber", {
                          required: "Card number is required",
                        })}
                      />
                      {errors.cardNumber && (
                        <p className="text-sm text-red-500">
                          {String(errors.cardNumber.message)}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex flex-col gap-2 sm:w-1/2">
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <div className="flex gap-2">
                          <Select
                            onValueChange={(value) =>
                              setValue("expirationMonth", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="01">January</SelectItem>
                              <SelectItem value="02">February</SelectItem>
                              <SelectItem value="03">March</SelectItem>
                              <SelectItem value="04">April</SelectItem>
                              <SelectItem value="05">May</SelectItem>
                              <SelectItem value="06">June</SelectItem>
                              <SelectItem value="07">July</SelectItem>
                              <SelectItem value="08">August</SelectItem>
                              <SelectItem value="09">September</SelectItem>
                              <SelectItem value="10">October</SelectItem>
                              <SelectItem value="11">November</SelectItem>
                              <SelectItem value="12">December</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select
                            onValueChange={(value) =>
                              setValue("expirationYear", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2025">2025</SelectItem>
                              <SelectItem value="2026">2026</SelectItem>
                              <SelectItem value="2027">2027</SelectItem>
                              <SelectItem value="2028">2028</SelectItem>
                              <SelectItem value="2029">2029</SelectItem>
                              <SelectItem value="2030">2030</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {(errors.expirationMonth || errors.expirationYear) && (
                          <p className="text-sm text-red-500">
                            Expiration date is required
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 sm:w-1/2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          type="number"
                          placeholder="Enter your CVC"
                          {...register("cvc", { required: "CVC is required" })}
                        />
                        {errors.cvc && (
                          <p className="text-sm text-red-500">
                            {String(errors.cvc.message)}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Button type="submit" size="lg" className="w-full">
                  Place Order
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
