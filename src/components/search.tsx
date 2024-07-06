import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="relative">
      <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full appearance-none bg-white pl-8 shadow-none focus:border-gray-200 focus:ring-0"
      />
    </div>
  );
}
