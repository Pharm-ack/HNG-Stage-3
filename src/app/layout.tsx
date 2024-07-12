import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Announcement from "@/components/announcement";
import Footer from "@/components/footer";
import { CartProvider } from "../context/cart-context";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={`${inter.className}flex flex-col min-h-[100vh]`}>
        <Announcement />
        <CartProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
