import { useState } from 'react';


export default function Footer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const categoriesArr = [ 'Electronics', 'Fashion', 'Home & Garden', 'Books', 'Sports'];
  return (
    <nav className="bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600 tracking-tight">
                Brand
              </div>
            </div>
          </div>

          {/* Center Section - Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className={`relative w-full transition-all duration-200 ${
              searchFocused ? 'transform scale-105' : ''
            }`}>
              <div className={`flex items-center bg-gray-50 rounded-full border-2 transition-colors duration-200 ${
                searchFocused ? 'border-blue-400 bg-white shadow-lg' : 'border-transparent hover:border-blue-200'
              }`}>
                <div className="pl-4">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <div className="relative">
                  <button
                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                    className="flex items-center gap-2 pr-4 py-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 outline-none cursor-pointer"
                  >
                    <span className="text-sm font-medium">{selectedCategory}</span>
                    <svg 
                      className={`h-4 w-4 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {categoryDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {categoriesArr.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setCategoryDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search Button (Mobile) */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-full hover:bg-blue-50 transition-colors duration-200 group">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5-5m0 0v-.5a.5.5 0 01.5-.5h1M9 19.5a1.5 1.5 0 003 0M20 19.5a1.5 1.5 0 003 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* User Menu */}
            <button className="p-2 rounded-full hover:bg-blue-50 transition-colors duration-200 group">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Menu Button (Mobile) */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className={`md:hidden pb-4 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          <div className="relative">
            <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-blue-400 focus-within:bg-white focus-within:shadow-lg transition-all duration-200">
              <div className="pl-4">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for anything..."
                className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
              <div className="relative">
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="flex items-center gap-2 pr-4 py-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 outline-none cursor-pointer"
                >
                  <span className="text-sm font-medium">{selectedCategory}</span>
                  <svg 
                    className={`h-4 w-4 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {categoryDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {categoriesArr.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Secondary Navigation (Optional) */}
      <div className="hidden lg:block bg-blue-50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-12">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Electronics
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Fashion
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Home & Garden
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Sports
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Books
            </a>
            <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-200">
              Sale
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
