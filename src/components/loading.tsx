import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-2">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-20" />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>

      {/* Pagination skeleton
      <div className="flex justify-center space-x-2">
        <Skeleton className="h-10 w-10" /> 
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-10" /> 
        ))}
        <Skeleton className="h-10 w-10" /> 
      </div>
    </div> */}
    </div>
  );
}
