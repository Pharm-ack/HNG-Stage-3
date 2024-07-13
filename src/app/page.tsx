import { Suspense } from "react";
import Collections from "@/components/collections";
import Companies from "@/components/companies";
import Hero from "@/components/hero";
import ProductCollection from "@/components/product-collection";

interface HomeProps {
  searchParams: { page?: string; category?: string };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main>
      <Hero />
      <Companies />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductCollection searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
