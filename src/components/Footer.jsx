import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiShield,
  FiCheckCircle,
  FiTruck,
  FiPackage,
} from "react-icons/fi";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
    { name: " Reviews", path: "/reviews" },
    { name: "Privacy Policy", path: "/" },
    { name: "Terms & Conditions", path: "/" },
  ];

  const productCategories = [
    { name: "Cardiovascular Drugs", count: 45 },
    { name: "Antibiotics", count: 32 },
    { name: "Analgesics", count: 28 },
    { name: "Dermatology Products", count: 25 },
    { name: "Endocrine Drugs", count: 18 },
    { name: "Medical Equipment", count: 56 },
  ];

  const services = [
    "Pharmaceutical Export",
    "Third-Party Manufacturing",
    "Contract Manufacturing",
    "Bulk Medicine Supply",
    "Custom Formulations",
    "Medical Equipment Export",
    "Regulatory Support",
    "Logistics & Shipping",
  ];

  const certifications = [
    "WHO-GMP Certified",
    "ISO 9001:2015",
    "Government Licensed",
    "Drug License Holder",
    "GST Registered",
    "Export License",
  ];

  const exportDestinations = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",

    "South Africa",
    "Germany",

    "Japan",
    "Singapore",
    "Malaysia",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section - Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 hover:bg-white">
              <img src={logo} alt="Logo" className="h-28 w-36 object-contain" />
            </Link>

            <p className="text-gray-300 mb-6">
              Government-approved pharmaceutical exporter with 10+ years of
              global experience. Your trusted partner for quality healthcare
              products worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <FiCheckCircle className="text-green-400 mr-2" />
                <span className="text-sm">WHO-GMP Certified</span>
              </div>
              <div className="flex items-center">
                <FiShield className="text-blue-400 mr-2" />
                <span className="text-sm">Government Licensed</span>
              </div>
              <div className="flex items-center">
                <FiTruck className="text-yellow-400 mr-2" />
                <span className="text-sm">Worldwide Shipping</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold mb-4 text-blue-300">Navigation</h5>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-white text-sm transition duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-4 text-blue-300">Categories</h5>
                <ul className="space-y-2">
                  {productCategories.map((category, index) => (
                    <li key={index} className="text-sm">
                      <Link
                        to={`/products?category=${category.name}`}
                        className="text-gray-300 hover:text-white transition duration-300"
                      >
                        {category.name} ({category.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services & Certifications */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <FiPackage className="text-blue-400 mr-2 text-sm" />
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2">
              Contact Us
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <FiMapPin className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Registered Office</p>
                  <p className="text-sm text-gray-300">
                    Ground Floor, Shop No-32, Aakash Ganga Co Op Hsg Society,
                    <br />
                    Shri Prastha Complex, Nallasopara West,
                    <br />
                    Vasai Virar, Palghar, Maharashtra - 401203, India
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <FiPhone className="text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone Number</p>
                  <a
                    href="tel:+917397971039"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    +91 7397 971 039
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FiMail className="text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email Address</p>
                  <a
                    href="mailto:maxxoverseasimpex@gmail.com"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    maxxoverseasimpex@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <FiGlobe className="text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">GST Number</p>
                  <p className="text-sm text-gray-300">27BXYPB0526L1Z4</p>
                </div>
              </div>
            </div>

            {/* Export Destinations */}
            <div className="mt-6">
              <h5 className="font-bold mb-3 text-blue-300">
                Export Destinations
              </h5>
              <div className="flex flex-wrap gap-2">
                {exportDestinations.map((country, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-xs px-2 py-1 rounded border border-gray-700"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Newsletter & Social */}

      {/* Bottom Section - Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Maxx Overseas Impex SS Entertainment. All
                Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Government-approved Pharmaceutical Exporter | GSTIN:
                27BXYPB0526L1Z4
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to=""
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to=""
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to=""
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Sitemap
              </Link>
              <span className="text-gray-600">•</span>
              <a
                href=""
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
