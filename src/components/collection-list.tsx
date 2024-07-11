import { cn, formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type productProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string[];
  };
};
export default function CollectionList({ product }: productProps) {
  return (
    <div
      className={cn("group relative flex w-full flex-none flex-col gap-3", {})}
    >
      <div className="group relative">
        <Image
          alt={product.name}
          className="aspect-square w-full transition-transform duration-300 ease-in-out"
          width={298}
          height={318}
          src={product.image[0]}
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
          <Link
            href={`/product/${product.id}`}
            className="rounded-full bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
          >
            View Product
          </Link>
        </div>
      </div>

      <div className="mt-1 flex flex-col items-center justify-center gap-y-1 px-1">
        <h3 className="text-default-700 text-center text-sm font-medium">
          {product.name}
        </h3>

        <p className="text-default-500 text-cneter text-sm font-medium">
          {formatPrice(product.price)}
        </p>
        <div className="flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <Image key={i} src="/star.png" width={20} height={20} alt="star" />
          ))}
          <Image src="/blackstart.png" width={19} height={19} alt="star" />{" "}
          <span className="text-sm">(4.7)</span>
        </div>
      </div>

      {/* <button className="absolute right-[5%] top-[30%] -translate-x-1/2 translate-y-1/2 rounded-full bg-yellow-500 p-2 px-3 text-white opacity-0 hover:bg-yellow-600">
        View Product
      </button> */}
    </div>
  );
}
