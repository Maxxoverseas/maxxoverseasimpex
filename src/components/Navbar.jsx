import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiPackage,
  FiMail,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", path: "/", icon: <FiHome className="mr-2" /> },
    { name: "About Us", path: "/about", icon: <FiInfo className="mr-2" /> },
    {
      name: "Products",
      path: "/products",
      icon: <FiPackage className="mr-2" />,
    },
    { name: "Contact", path: "/contact", icon: <FiMail className="mr-2" /> },
    { name: "Reviews", path: "/reviews", icon: <FiMail className="mr-2" /> },
  ];

  return (
    <>
      {/* Marquee Section */}

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-28 w-36 object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-gray-700 hover:text-pharma-blue font-medium transition duration-300 group"
                >
                  {item.name}
                  {/* Bottom pointer/underline on hover */}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pharma-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Search and Cart */}
            <div className="hidden md:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </form>

              <Link to="/cart" className="relative">
                <FiShoppingCart className="text-2xl text-gray-700 hover:text-pharma-blue transition duration-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center text-gray-700 hover:text-pharma-blue font-medium py-2 relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                    {/* Bottom pointer/underline on hover for mobile */}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pharma-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
                <form onSubmit={handleSearch} className="pt-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                </form>
                <Link
                  to="/cart"
                  className="flex items-center text-gray-700 hover:text-pharma-blue font-medium py-2 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiShoppingCart className="mr-2" />
                  Cart ({cartCount})
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pharma-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4">
          <marquee className="text-sm font-medium text-gray-700 tracking-wide">
            <span className="mx-4 text-blue-600 font-semibold">
              United States of America
            </span>
            <span className="mx-4 text-red-600 font-semibold">
              United Kingdom
            </span>
            <span className="mx-4 text-green-600 font-semibold">Australia</span>
            <span className="mx-4 text-red-500 font-semibold">Japan</span>
            <span className="mx-4 text-purple-600 font-semibold">
              Singapore
            </span>
            <span className="mx-4 text-red-700 font-semibold">Canada</span>
            <span className="mx-4 text-yellow-600 font-semibold">Germany</span>
            <span className="mx-4 text-blue-700 font-semibold">France</span>
            <span className="mx-4 text-teal-600 font-semibold">Malaysia</span>
            <span className="mx-4 text-pink-600 font-semibold">India</span>
            <span className="mx-4 text-orange-600 font-semibold">China</span>
            <span className="mx-4 text-indigo-600 font-semibold">
              South Korea
            </span>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Navbar;
