"use client";
import Search from "./search";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Logo from "./logo";
import { useCart } from "@/context/cart-context";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const { cartItemCount } = useCart();
  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-1">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="md:flex md:items-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-[#191919] transition hover:text-[#8d5807]"
                    href="#"
                  >
                    Help
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#191919] transition hover:text-[#8d5807]"
                    href="#"
                  >
                    Join
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#191919] transition hover:text-[#8d5807]"
                    href="#"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <div className="flex gap-3 md:hidden">
                <button>
                  <CiHeart className="h-5 w-5 font-bold" />
                </button>

                <Link href="/cart" className="relative">
                  <IoCartOutline className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button className="md:hidden" size="icon" variant="ghost">
                    <MdMenu className="h-7 w-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="h-[320px] w-full px-6">
                  <nav className="flex flex-col text-sm sm:text-lg">
                    <Logo />
                    <ul className="flex flex-col items-center justify-center gap-y-5">
                      <li>
                        <a
                          className="text-[#191919] transition hover:text-[#8d5807]"
                          href="#"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-[#191919] transition hover:text-[#8d5807]"
                          href="#"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-[#191919] transition hover:text-[#8d5807]"
                          href="#"
                        >
                          Shipping & Returns
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-[#191919] transition hover:text-[#8d5807]"
                          href="#"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-[#191919] transition hover:text-[#8d5807]"
                          href="#"
                        >
                          Help
                        </a>
                      </li>
                    </ul>
                    <div className="mt-5 flex items-center justify-between gap-x-3">
                      <Button className="w-[150px] rounded-md bg-[#E0DDDD] text-center text-[#191919]">
                        Join Us
                      </Button>
                      <Button className="w-[150px] rounded-md bg-[#fa9c11] text-center">
                        {" "}
                        Sign In
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="my-2 hidden border-t border-gray-200 md:flex" />

        <div className="pb-3 md:flex md:items-center md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-[#191919] transition hover:text-[#8d5807]"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-[#191919] transition hover:text-[#8d5807]"
                  href="#"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  className="text-[#191919] transition hover:text-[#8d5807]"
                  href="#"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  className="text-[#191919] transition hover:text-[#8d5807]"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="items-center justify-center gap-3 md:flex">
            <div className="w-full">
              <Search />
            </div>
            <div className="hidden gap-3 min-[770px]:flex">
              <button>
                <CiHeart className="h-5 w-5" />
              </button>

              <Link href="/cart" className="relative">
                <IoCartOutline className="h-5 w-5" />

                {cartItemCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
