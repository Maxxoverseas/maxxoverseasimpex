import React from "react";
import { Link } from "react-router-dom";
import { FiPackage, FiCheckCircle, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, viewMode = "grid" }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-48 h-48 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.title}
              </h3>
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-blue-600 font-medium">
                  {product.company}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                  {product.mg}mg
                </span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <FiCheckCircle className="mr-1" /> WHO-GMP
                </span>
                <span className="text-gray-500">
                  Packing: {product.packing}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-900 mb-2">
                ${product.price.toFixed(2)}
              </div>
              <div className="text-sm text-gray-500">
                Composition: {product.composition}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-3">
              <Link
                to={`/product/${product.id}`}
                className="px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                View Details
              </Link>
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center"
              >
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
            <span className="text-green-600 font-medium">In Stock</span>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
            {product.company}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
            {product.title}
          </h3>
          <div className="text-blue-900 font-bold">
            ${product.price.toFixed(2)}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-700">
              {product.mg}mg
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500">{product.composition}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <FiPackage className="mr-1" />
            {product.packing}
          </div>
          <span className="text-sm font-medium px-2 py-1 rounded bg-blue-100 text-blue-800">
            {product.category}
          </span>
        </div>

        <div className="flex space-x-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 text-center transition duration-300"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
