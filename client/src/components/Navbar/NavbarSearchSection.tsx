// NavbarSearchSection.tsx
import { ChevronUp, ChevronDown, type LucideIcon } from "lucide-react";

interface NavbarSearchSectionProps {
  searchEffect: boolean;
  handleSearchFocus: (focused: boolean) => void;
  categories: string[];
  categoryIcons: Record<string, string>;
  selectedCategory: string;
  showCategories: boolean;
  handleSelectCategory: (category: string) => void;
  toggleShowCategories: () => void;
  SearchIcon: LucideIcon;
  className?: string; // ✅ allow parent to control visibility
}

export default function NavbarSearchSection({
  searchEffect,
  handleSearchFocus,
  categories,
  categoryIcons,
  selectedCategory,
  showCategories,
  handleSelectCategory,
  toggleShowCategories,
  SearchIcon,
  className = "",
}: NavbarSearchSectionProps) {
  return (
    <div
      className={`flex flex-1 max-w-2xl mx-8 items-center bg-gray-100 
                  text-gray-500 rounded-full my-1 h-11 transition-all duration-200 
                  ${searchEffect ? "ring-2 ring-blue-600" : ""} ${className}`}
    >
      {/* Search Icon */}
      <div className="px-3 flex items-center">
        <SearchIcon className="w-5 h-5 stroke-current stroke-2" />
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Search for anything..."
        className="flex-3 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-500"
        onFocus={() => handleSearchFocus(true)}
        onBlur={() => handleSearchFocus(false)}
      />

      {/* Category Selector */}
      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-2 text-gray-600 h-fit rounded-l-lg"
          onClick={toggleShowCategories}
        >
          {selectedCategory}
          {showCategories ? <ChevronUp /> : <ChevronDown />}
        </button>

        {showCategories && (
          <div className="absolute top-full -right-10 mt-2 bg-white p-3 rounded-2xl shadow-lg z-50 min-w-[150px] max-h-[200px] overflow-y-auto">
            <div className="space-y-1">
              <table className="w-full table-fixed">
                <tbody>
                  {categories.map((category, index) => (
                    <tr
                      key={index}
                      onClick={() => handleSelectCategory(category)}
                      className="cursor-pointer hover:bg-blue-50 rounded-md"
                      title={category}
                    >
                      <td className="w-8 px-2 py-1">
                        <img
                          className="h-5 w-5 me-1"
                          src={categoryIcons[category]}
                          alt={category}
                        />
                      </td>
                      <td className="px-2 py-1 text-gray-700 truncate">
                        {category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
