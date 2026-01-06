import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiFilter,
  FiGrid,
  FiList,
  FiSearch,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import { products, categories, companies } from "../data/products";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("name");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 20 products per page
  const productsPerPage = 20;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      setSearchTerm(searchParam);
    }
    applyAllFilters();
  }, [location.search]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get current page products
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const applyAllFilters = () => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.composition
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Company filter
    if (selectedCompany !== "All") {
      filtered = filtered.filter(
        (product) => product.company === selectedCompany
      );
    }

    // Price range filter
    filtered = filtered.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.title.localeCompare(b.title);
        case "company":
          return a.company.localeCompare(b.company);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    applyAllFilters();
  }, [
    selectedCategory,
    selectedCompany,
    sortBy,
    minPrice,
    maxPrice,
    searchTerm,
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleCompanyFilter = (company) => {
    setSelectedCompany(company);
  };

  const handlePriceFilter = () => {
    applyAllFilters();
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedCompany("All");
    setSearchTerm("");
    setMinPrice(0);
    setMaxPrice(1000);
    setSortBy("name");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = end - maxVisiblePages + 1;
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Pharmaceutical Products
        </h1>
        <p className="text-gray-600">
          Browse {products.length}+ quality pharmaceutical products
        </p>
      </div>

      {/* Top Filters Bar */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
              value={selectedCategory}
              onChange={(e) => handleCategoryFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories
                .filter((cat) => cat !== "All")
                .map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>

            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
              value={selectedCompany}
              onChange={(e) => handleCompanyFilter(e.target.value)}
            >
              <option value="All">All Manufacturers</option>
              {companies
                .filter((comp) => comp !== "All")
                .map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
            </select>

            <select
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="company">Sort by Manufacturer</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* View Mode and Clear Filters */}
          <div className="flex items-center gap-3">
            <div className="flex border rounded-lg overflow-hidden">
              <button
                className={`px-4 py-2 ${
                  viewMode === "grid" ? "bg-blue-100 text-blue-700" : "bg-white"
                }`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
              >
                <FiGrid />
              </button>
              <button
                className={`px-4 py-2 ${
                  viewMode === "list" ? "bg-blue-100 text-blue-700" : "bg-white"
                }`}
                onClick={() => setViewMode("list")}
                title="List View"
              >
                <FiList />
              </button>
            </div>

            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <FiFilter className="mr-2" />
            Advanced Filters
            {showFilters ? (
              <FiChevronUp className="ml-1" />
            ) : (
              <FiChevronDown className="ml-1" />
            )}
          </button>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                    <button
                      onClick={handlePriceFilter}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Strength (mg)
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded">
                    <option>All Strengths</option>
                    <option>25mg</option>
                    <option>50mg</option>
                    <option>100mg</option>
                    <option>150mg</option>
                    <option>200mg</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Packing Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded">
                    <option>All Packing Types</option>
                    <option>Box</option>
                    <option>Strip</option>
                    <option>Sachet</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Info */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">
          Showing{" "}
          <span className="font-bold">
            {(currentPage - 1) * productsPerPage + 1}
          </span>{" "}
          -
          <span className="font-bold">
            {" "}
            {Math.min(currentPage * productsPerPage, filteredProducts.length)}
          </span>{" "}
          of
          <span className="font-bold"> {filteredProducts.length}</span> products
        </div>
        <div className="text-gray-600">
          Page <span className="font-bold">{currentPage}</span> of{" "}
          <span className="font-bold">{totalPages}</span>
        </div>
      </div>

      {/* Products Grid - 4 products per row (20 products per page = 5 rows of 4 products) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">No products found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <>
          {/* Grid View - 4 columns per row */}
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                : "space-y-6"
            }
          >
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                Showing {Math.min(productsPerPage, currentProducts.length)}{" "}
                products per page
              </div>

              <nav className="flex items-center space-x-2">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 border rounded-lg ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-50"
                  }`}
                >
                  Previous
                </button>

                {getPageNumbers().map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 border rounded-lg ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 border rounded-lg ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "hover:bg-gray-50"
                  }`}
                >
                  Next
                </button>
              </nav>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Go to page:</span>
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const page = Math.max(
                      1,
                      Math.min(totalPages, Number(e.target.value))
                    );
                    handlePageChange(page);
                  }}
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                />
                <span className="text-sm text-gray-600">of {totalPages}</span>
              </div>
            </div>
          )}
        </>
      )}

      {/* Mobile Filter Button */}
      <div className="md:hidden fixed bottom-6 right-6">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <FiFilter className="text-xl" />
        </button>
      </div>

      {/* Mobile Filters Panel */}
      {showMobileFilters && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryFilter(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Manufacturer
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={selectedCompany}
                    onChange={(e) => handleCompanyFilter(e.target.value)}
                  >
                    {companies.map((company) => (
                      <option key={company} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-1/2 px-3 py-2 border rounded"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-1/2 px-3 py-2 border rounded"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                      />
                    </div>
                    <button
                      onClick={() => {
                        handlePriceFilter();
                        setShowMobileFilters(false);
                      }}
                      className="w-full py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <button
                  onClick={clearFilters}
                  className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
