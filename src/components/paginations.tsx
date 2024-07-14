"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

export default function Paginations({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const category = searchParams.get("category") || "All";

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("category", category);
    return `${pathName}?${params.toString()}`;
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      router.push(createPageURL(pageNumber), { scroll: false });
    }
  };

  return (
    <div className="flex pt-7">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              className={`cursor-pointer ${
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }`}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  onClick={() => handlePageChange(pageNumber)}
                  isActive={pageNumber === currentPage}
                  className="cursor-pointer"
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              className={`cursor-pointer ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
