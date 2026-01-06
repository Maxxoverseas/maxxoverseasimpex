import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiPackage,
  FiCheckCircle,
  FiShoppingCart,
  FiArrowLeft,
  FiTruck,
  FiShield,
} from "react-icons/fi";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="btn-primary inline-flex items-center">
          <FiArrowLeft className="mr-2" /> Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity };
    addToCart(productToAdd);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 1000) {
      setQuantity(newQuantity);
    }
  };

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/products"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <FiArrowLeft className="mr-2" /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-2xl shadow-xl"
          />
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="border rounded-lg p-2">
                <div className="h-16 bg-gray-100 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-2xl font-bold text-blue-900">
                ${product.price.toFixed(2)}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <FiCheckCircle className="mr-1" /> WHO-GMP Certified
              </span>
            </div>
            <p className="text-gray-600 text-lg">{product.description}</p>
          </div>

          {/* Key Features */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <FiShield className="text-blue-500 mr-2" />
                <div>
                  <div className="font-medium">Manufacturer</div>
                  <div className="text-sm text-gray-600">{product.company}</div>
                </div>
              </div>
              <div className="flex items-center">
                <FiPackage className="text-blue-500 mr-2" />
                <div>
                  <div className="font-medium">Strength</div>
                  <div className="text-sm text-gray-600">{product.mg}mg</div>
                </div>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-2" />
                <div>
                  <div className="font-medium">Composition</div>
                  <div className="text-sm text-gray-600">
                    {product.composition}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <FiTruck className="text-blue-500 mr-2" />
                <div>
                  <div className="font-medium">Packing</div>
                  <div className="text-sm text-gray-600">{product.packing}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Specifications</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Name</span>
                  <span className="font-medium">{product.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Manufacturer</span>
                  <span className="font-medium">{product.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Strength</span>
                  <span className="font-medium">{product.mg}mg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Composition</span>
                  <span className="font-medium">{product.composition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Packing</span>
                  <span className="font-medium">{product.packing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Packaging Type</span>
                  <span className="font-medium">{product.packagingType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{product.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Total Price</div>
                <div className="text-2xl font-bold text-blue-900">
                  ${(product.price * quantity).toFixed(2)}
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center flex-1 transition duration-300"
              >
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>
              <Link
                to="/cart"
                className="bg-white border border-blue-600 text-blue-600 font-medium py-3 px-8 rounded-lg flex items-center justify-center flex-1 transition duration-300 hover:bg-blue-50"
              >
                View Cart
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Minimum Order Quantity: 100 units | Bulk discounts available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((similarProduct) => (
              <div
                key={similarProduct.id}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <img
                  src={similarProduct.image}
                  alt={similarProduct.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="font-bold mb-2">{similarProduct.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">
                    ${similarProduct.price.toFixed(2)}
                  </span>
                  <Link
                    to={`/product/${similarProduct.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
