"use client";

import { cn } from "@/lib/utils";
import CollectionList from "./collection-list";
import { products } from "@/data";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Collections() {
  const [activeTab, setActiveTab] = useState("All");
  const collections = [
    {
      name: "All",
    },
    {
      name: "T-shirts",
    },
    {
      name: "Hoodies",
    },
    {
      name: "Sweet Shirts",
    },
  ];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);
  return (
    <div id="collection" className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
            Discover Our Exclusive Collection
          </h2>
          <p className="max-w-md text-center text-gray-400">
            Shop the latest trends and find your perfect match.
          </p>
        </div>

        <Tabs defaultValue="All" onValueChange={setActiveTab}>
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
            <div
              className={cn(
                "my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
              )}
            >
              {filteredProducts.map((product) => (
                <CollectionList key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
