"use client";

import { use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductsResponse, Product } from "@/data";
import CollectionList from "./collection-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Paginations from "./paginations";

const collections = [
  { name: "All", apiName: "All" },
  { name: "T-shirts", apiName: "T-shirts" },
  { name: "Hoodies", apiName: "Hoodies" },
  { name: "Sweatshirts", apiName: "sweet-shirts" },
];

const PAGE_SIZE = 10;

interface CollectionsProps {
  productsPromise: Promise<ProductsResponse>;
  activeTab: string;
}

export default function Collections({
  productsPromise,
  activeTab,
}: CollectionsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const products = use(productsPromise);

  const filteredProducts = products.items.filter((product) => {
    if (activeTab === "All") return true;
    const activeCategory = collections.find((c) => c.name === activeTab);
    return product.categories.some(
      (category) =>
        category.name.toLowerCase() ===
        (activeCategory?.apiName.toLowerCase() || activeTab.toLowerCase()),
    );
  });

  const totalPages = Math.ceil(products.total / PAGE_SIZE);

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("category", tab);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <Tabs defaultValue={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-2 flex items-center justify-center bg-transparent">
          {collections.map((collection) => (
            <TabsTrigger
              key={collection.name}
              value={collection.name}
              className="px-4 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-800 focus:outline-none"
            >
              {collection.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product: Product) => (
              <CollectionList key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      <Paginations totalPages={totalPages} />
    </>
  );
}
