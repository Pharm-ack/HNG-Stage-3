import { StarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { IoReloadCircleOutline } from "react-icons/io5";
import { reviews } from "@/data";

export default function Reviews({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 pt-8", className)}>
      <div className="flex items-center gap-x-6 lg:gap-x-10">
        <h3 className="text-sm text-[#71717a] sm:text-lg">Description</h3>
        <h3 className="flex items-center text-sm font-semibold sm:text-lg">
          Reviews{" "}
          <span className="ml-1 rounded-full bg-[#a1a1aa] px-1 py-1 text-xs text-white lg:text-sm">
            64
          </span>
        </h3>
        <h3 className="text-sm text-[#71717a] sm:text-lg">Support</h3>
      </div>
      <div className="mt-1 border-2 border-b border-[#e4e4e7] sm:mt-3 lg:w-[450px]" />

      <div className="w-full max-w-md rounded-lg">
        {reviews.map((review) => (
          <div key={review.id} className="flex items-start gap-4">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={review.image} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 gap-2">
              <div className="flex items-center gap-2">⭐⭐⭐⭐⭐</div>

              <div className="text-muted-foreground text-sm leading-relaxed">
                The product is amazing! It has exceeded my expectations in every
                way. The quality is top-notch, and the features are incredibly
                useful.
              </div>

              <div className="flex items-center">
                <div className="font-medium">{review.name}</div>
              </div>
              <div>March 14, 2021</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
