import { Suspense } from "react";

import Collections from "./collections";
import { Loading } from "./loading";
import { getProducts } from "@/actions/actions";

interface ProductCollectionProps {
  searchParams: { page?: string; category?: string };
}

export default async function ProductCollection({
  searchParams,
}: ProductCollectionProps) {
  const currentPage = parseInt(searchParams.page || "1");
  const activeTab = searchParams.category || "All";
  const products = await getProducts(currentPage.toString(), "10", activeTab);

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

        <Suspense fallback={<Loading />}>
          <Collections products={products} activeTab={activeTab} />
        </Suspense>
      </div>
    </div>
  );
}
