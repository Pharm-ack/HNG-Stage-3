import { Button } from "@/components/ui/button";
import { CheckIcon, HeartIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Component() {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
      <div className="grid items-start gap-4 md:gap-10">
        <div className="grid gap-4">
          <Image
            src="/placeholder.svg"
            alt="Product Image"
            width={600}
            height={900}
            className="aspect-[2/3] w-full overflow-hidden rounded-lg border object-cover"
          />
          <div className="hidden items-start gap-4 md:flex">
            <button className="hover:border-primary overflow-hidden rounded-lg border transition-colors">
              <Image
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="hover:border-primary overflow-hidden rounded-lg border transition-colors">
              <Image
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="hover:border-primary overflow-hidden rounded-lg border transition-colors">
              <Image
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="hover:border-primary overflow-hidden rounded-lg border transition-colors">
              <Image
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={120}
                className="aspect-[5/6] object-cover"
              />
              <span className="sr-only">View Image 4</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid items-start gap-4 md:gap-10">
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold lg:text-4xl">
            Acme Circles T-Shirt
          </h1>
          <div>
            <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="fill-primary h-5 w-5" />
              <StarIcon className="fill-primary h-5 w-5" />
              <StarIcon className="fill-primary h-5 w-5" />
              <StarIcon className="fill-muted stroke-muted-foreground h-5 w-5" />
              <StarIcon className="fill-muted stroke-muted-foreground h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <h2 className="text-xl font-bold">Features</h2>
          <ul className="text-muted-foreground grid gap-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="fill-primary h-5 w-5" />
              Soft and comfortable cotton blend
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="fill-primary h-5 w-5" />
              Durable and long-lasting
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="fill-primary h-5 w-5" />
              Machine washable
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="fill-primary h-5 w-5" />
              Available in a variety of colors
            </li>
          </ul>
        </div>
        <div className="grid gap-4">
          <h2 className="text-xl font-bold">Specifications</h2>
          <div className="text-muted-foreground grid gap-2">
            <div className="flex justify-between">
              <span>Material</span>
              <span>60% combed ringspun cotton, 40% polyester</span>
            </div>
            <div className="flex justify-between">
              <span>Fit</span>
              <span>Regular</span>
            </div>
            <div className="flex justify-between">
              <span>Sleeve Length</span>
              <span>Short</span>
            </div>
            <div className="flex justify-between">
              <span>Neck Style</span>
              <span>Crew</span>
            </div>
            <div className="flex justify-between">
              <span>Care Instructions</span>
              <span>Machine wash cold, tumble dry low</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg">Add to cart</Button>
          <Button size="lg" variant="outline">
            <HeartIcon className="mr-2 h-4 w-4" />
            Add to wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}
