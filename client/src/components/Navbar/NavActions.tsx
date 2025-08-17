import { Search, User, AlignJustify, X } from "lucide-react";
import NavCartButton from "./NavCartButton";

type Props = {
  mobileSearchBar: boolean;
  setMobileSearchBar: (value: boolean) => void;
};

export default function NavActions({ mobileSearchBar, setMobileSearchBar }: Props) {
  return (
    <div className="flex gap-1">      
      <button className="p-2 hover:bg-blue-50 hover:text-blue-600 text-gray-500 transition-colors duration-200 rounded-full flex md:hidden"
      onClick={()=>setMobileSearchBar(!mobileSearchBar)}>
        <Search className="w-5 h-5 stroke-current stroke-2" />
      </button>
      <NavCartButton qty={2} />

      {/* Profile */}
      <button className="p-2 hover:bg-blue-50 hover:text-blue-600 text-gray-500 transition-colors duration-200 rounded-full">
        <User className="w-5 h-5 stroke-current stroke-2" />
      </button>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 hover:bg-blue-50 hover:text-blue-600 text-gray-500 transition-colors duration-200 rounded-full"
        onClick={() => setMobileSearchBar(!mobileSearchBar)}
      >
        {mobileSearchBar ? (
          <X className="w-5 h-5 stroke-current stroke-2" />
        ) : (
          <AlignJustify className="w-5 h-5 stroke-current stroke-2" />
        )}
      </button>
    </div>
  );
}
