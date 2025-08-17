import NavbarSearchSection from "./NavbarSearchSection";
import { Search } from "lucide-react";

type Props = {
  isMobile: boolean;
  searchEffect: boolean;
  setSearchEffect: (value: boolean) => void;
  categories: string[];
  categoryIcons: Record<string, string>;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  showCategories: boolean;
  setShowCategories: (value: boolean) => void;
};

export default function NavSearch({
  isMobile,
  searchEffect,
  setSearchEffect,
  categories,
  categoryIcons,
  selectedCategory,
  setSelectedCategory,
  showCategories,
  setShowCategories,
}: Props) {
  return (
    <NavbarSearchSection
      searchEffect={searchEffect}
      handleSearchFocus={setSearchEffect}
      categories={categories}
      categoryIcons={categoryIcons}
      selectedCategory={selectedCategory}
      showCategories={showCategories}
      handleSelectCategory={setSelectedCategory}
      toggleShowCategories={() => setShowCategories(!showCategories)}
      SearchIcon={Search}
      className={`${isMobile ? "flex w-full" : "hidden md:flex"}`}
    />
  );
}
