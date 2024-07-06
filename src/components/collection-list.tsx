import { cn } from "@/lib/utils";
import Image from "next/image";

type productProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};
export default function CollectionList({
  id,
  name,
  price,
  image,
}: productProps) {
  return (
    <div className={cn("relative flex w-full flex-none flex-col gap-3", {})}>
      <Image
        alt={name}
        className="aspect-square w-full transition-transform duration-300 ease-in-out hover:scale-105"
        width={298}
        height={318}
        src={image}
      />

      <div className="mt-1 flex flex-col items-center justify-center gap-y-1 px-1">
        <h3 className="text-default-700 text-center text-sm font-medium">
          {name}
        </h3>

        <p className="text-default-500 text-cneter text-sm font-medium">
          ${price}
        </p>
      </div>
    </div>
  );
}
