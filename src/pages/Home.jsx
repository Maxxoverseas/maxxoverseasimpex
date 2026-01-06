import React from "react";
import { Link } from "react-router-dom";
import { FiPackage, FiGlobe, FiCheckCircle, FiTruck } from "react-icons/fi";

const Home = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: <FiGlobe /> },
    { number: "50+", label: "Countries Served", icon: <FiGlobe /> },
    { number: "8k+", label: "Products", icon: <FiPackage /> },
    { number: "WHO-GMP", label: "Certified", icon: <FiCheckCircle /> },
  ];

  return (
    <div>
      {/* Hero Section - Redesigned */}
      <section className="relative bg-white text-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content Section */}
            <div className="lg:w-1/2 max-w-2xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  Government Approved & Licensed Exporter
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Global Pharmaceutical
                  <span className="text-blue-600 block">Export Solutions</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Trusted exporter delivering WHO-GMP certified pharmaceuticals
                  worldwide. Over 10+ years of experience in global healthcare
                  supply with reliable quality assurance and regulatory
                  compliance.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    100+
                  </div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    10+
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Browse Products
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Learn More
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">
                  Trusted & Certified By:
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-gray-700">WHO-GMP</span>
                  </div>
                  <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-gray-700">ISO 9001</span>
                  </div>
                  <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-gray-700">Govt.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-2 shadow-2xl">
                  <img
                    src="https://cdn-ilebjlc.nitrocdn.com/ncNVohTnyZHFwVZRyrDJJWBfVJpoFXJK/assets/images/optimized/rev-1194442/ideausher.com/wp-content/uploads/2023/11/Pharmacy-Hero-Section-Img.webp"
                    alt="Pharmaceutical Products Export"
                    className="w-full h-auto rounded-2xl object-cover"
                  />

                  {/* Floating Badge 1 */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Quality</div>
                        <div className="text-sm text-gray-600">Assured</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Fast</div>
                        <div className="text-sm text-gray-600">Delivery</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Image Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 rounded-2xl p-4 flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Secure</div>
                      <div className="text-sm text-gray-600">Packaging</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Global</div>
                      <div className="text-sm text-gray-600">Network</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent opacity-50"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable pharmaceutical
            exports.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:maxxoverseasimpex@gmail.com"
              className="btn-primary bg-white text-blue-900"
            >
              Email Us
            </a>
            <a href="tel:+917397971039" className="btn-secondary border-white">
              Call Now
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
