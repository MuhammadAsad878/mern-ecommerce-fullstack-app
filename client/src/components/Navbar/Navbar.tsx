import { useState } from "react";
import NavLogo from "./NavLogo";
import NavSearch from "./NavSearch";
import NavActions from "./NavActions";
import ElectronicsIcon from "../../assets/icons/svgs/images/laptop.png";

export default function NavBar() {
  const [searchEffect, setSearchEffect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategories, setShowCategories] = useState(false);
  const [mobileSearchBar, setMobileSearchBar] = useState(false);

  const categories = ["All", "Electronics", "Fashion", "Home", "Books"];
  const categoryIcons: Record<string, string> = {
    Electronics: ElectronicsIcon,
    Fashion: ElectronicsIcon,
    Home: ElectronicsIcon,
    Books: ElectronicsIcon,
    All: ElectronicsIcon,
  };

  return (
    <nav className="bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-19">
          <NavLogo />

          {/* Desktop Search */}
          <NavSearch
            isMobile={false}
            searchEffect={searchEffect}
            setSearchEffect={setSearchEffect}
            categories={categories}
            categoryIcons={categoryIcons}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showCategories={showCategories}
            setShowCategories={setShowCategories}
          />

          <NavActions
            mobileSearchBar={mobileSearchBar}
            setMobileSearchBar={setMobileSearchBar}
          />
        </div>

        {/* Mobile Search */}
        {mobileSearchBar && (
          <div className="flex md:hidden w-full mt-2">
            <NavSearch
              isMobile={true}
              searchEffect={searchEffect}
              setSearchEffect={setSearchEffect}
              categories={categories}
              categoryIcons={categoryIcons}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              showCategories={showCategories}
              setShowCategories={setShowCategories}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
