import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Announcement from "@/components/announcement";
import Footer from "@/components/footer";
import { CartProvider } from "../context/cart-context";
import { Toaster } from "@/components/ui/sonner";
import { TanstackProvider } from "@/context/tanstack-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andora E-commerce Site",
  description:
    "Andora is a place where you can find all your favorite products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Announcement />
        <TanstackProvider>
          <CartProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
          </CartProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
