import { cn } from "@/lib/utils";
import CollectionList from "./collection-list";
import { products } from "@/data";

export default function Collections() {
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
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-8 flex flex-col items-center">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
            Discover Our Exclusive Collection
          </h2>
          <p className="max-w-md text-center text-gray-400">
            Shop the latest trends and find your perfect match.
          </p>
        </div>

        <div className="mb-2 flex items-center justify-center">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="flex items-center justify-center"
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-600 transition hover:text-gray-800 focus:outline-none">
                {collection.name}
              </button>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
          )}
        >
          {products.map((product) => (
            <CollectionList key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
