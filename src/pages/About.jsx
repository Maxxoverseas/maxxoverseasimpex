import React from "react";
import {
  FiCheckCircle,
  FiGlobe,
  FiPackage,
  FiUsers,
  FiTruck,
  FiShield,
  FiAward,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";
import aboutimage from "../assets/aboutimages.jpg";

const About = () => {
  const features = [
    {
      icon: <FiShield className="text-3xl" />,
      title: "Government Approved",
      description:
        "Licensed exporter registered under Indian government authorities",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Global Experience",
      description: "10+ years serving customers across 50+ countries worldwide",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: <FiPackage className="text-3xl" />,
      title: "Quality Assurance",
      description:
        "WHO-GMP certified manufacturing partners with strict quality control",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Expert Team",
      description:
        "30+ experienced professionals ensuring quality and compliance",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: <FiTruck className="text-3xl" />,
      title: "Reliable Logistics",
      description: "Efficient shipping and handling with 99% on-time delivery",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: "Regulatory Compliance",
      description: "Full adherence to international standards and regulations",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Certified Excellence",
      description: "Multiple industry certifications and quality awards",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Growth Partner",
      description:
        "Helping clients expand their pharmaceutical business globally",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ];

  const certifications = [
    { name: "WHO-GMP Certified", color: "bg-green-100 text-green-800" },
    { name: "ISO 9001:2015", color: "bg-blue-100 text-blue-800" },
    { name: "Government Licensed", color: "bg-purple-100 text-purple-800" },
    { name: "Export License", color: "bg-orange-100 text-orange-800" },
    { name: "Drug License", color: "bg-teal-100 text-teal-800" },
    { name: "GST Registered", color: "bg-indigo-100 text-indigo-800" },
  ];

  const stats = [
    { value: "10k+", label: "Products", icon: <FiPackage /> },
    { value: "50+", label: "Countries", icon: <FiGlobe /> },
    { value: "10+", label: "Years Experience", icon: <FiClock /> },
    { value: "50k+", label: "Happy Clients", icon: <FiStar /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Gradient */}
      <section className="relative bg-blue-300 text-black py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?w=1200')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <FiAward className="mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">
                Trusted Pharmaceutical Exporter Since 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About <span className="text-blue-600">Maxx Overseas</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-8 text-black leading-relaxed">
              A premier government-approved pharmaceutical and medical exporter
              based in India, dedicated to revolutionizing global healthcare
              access through quality, compliance, and exceptional service.
            </p>
            <div className="flex flex-wrap gap-3">
              {certifications.slice(0, 3).map((cert, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${cert.color}`}
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements - light and subtle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-100 border border-blue-50"
              >
                <div className="text-blue-600 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview with CEO */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold mb-8">
                Pioneering{" "}
                <span className="text-blue-600">Global Healthcare</span> Access
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Established in 2025,{" "}
                  <strong>Maxx Overseas Impex SS Entertainment</strong> has
                  rapidly emerged as a beacon of trust and excellence in
                  pharmaceutical exports. With a foundation built on over a
                  decade of industry expertise, we specialize in the global
                  supply chain of premium pharmaceutical drugs, life-saving
                  medications, and cutting-edge medical equipment.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Registered under Indian government authorities and operating
                  with comprehensive
                  <strong> Drug License and GST registration</strong>, we are
                  committed to delivering quality-assured products that not only
                  meet but exceed international standards. Our operations are
                  built on pillars of transparency, regulatory compliance, and
                  fostering enduring partnerships across continents.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FiCheckCircle className="mr-2 text-green-500" />
                    Our Commitment
                  </h3>
                  <p className="text-gray-700">
                    Every product we export undergoes rigorous quality checks
                    and is backed by comprehensive documentation including
                    Certificate of Analysis (CoA), ensuring complete
                    traceability and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* CEO Card with Image */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-blue-100">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src={aboutimage}
                        alt="Mr. Ajay Hawasingh Both - CEO & Proprietor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      CEO & Proprietor
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">
                      Mr. Ajay Hawasingh Both
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      Founder & Chief Executive Officer
                    </p>

                    <div className="space-y-3 mb-6">
                      <p className="text-gray-700">
                        With over 15 years of experience in pharmaceutical
                        exports and international trade, Mr. Ajay Hawasingh Both
                        leads Maxx Overseas with a vision to make quality
                        healthcare accessible worldwide.
                      </p>
                      <p className="text-gray-700">
                        His expertise in regulatory compliance, supply chain
                        management, and global market dynamics has positioned
                        Maxx Overseas as a trusted partner for pharmaceutical
                        companies across the globe.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <FiMail className="mr-2" />
                        ajay@maxxoverseas.com
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FiPhone className="mr-2" />
                        +91 7397 971 039
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Details Card */}
              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Company Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm text-gray-400 mb-1">
                      Business Type
                    </dt>
                    <dd className="text-lg font-medium">Exporters, Trader</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400 mb-1">Legal Status</dt>
                    <dd className="text-lg font-medium">Sole proprietorship</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400 mb-1">GST Number</dt>
                    <dd className="text-lg font-medium">27BXYPB0526L1Z4</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-400 mb-1">Employees</dt>
                    <dd className="text-lg font-medium">30+ Professionals</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm text-gray-400 mb-1">
                      Market Coverage
                    </dt>
                    <dd className="text-lg font-medium">
                      Worldwide Export Network
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Our Advantages
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Why <span className="text-blue-600">Choose Maxx Overseas</span>
            </h2>
            <p className="text-xl text-gray-600">
              We combine industry expertise with cutting-edge solutions to
              deliver exceptional value to our global partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white`}
              >
                <div className={`${feature.iconColor} mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Certifications & Licenses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fully compliant with all regulatory requirements for international
              pharmaceutical trade
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full font-medium ${cert.color}`}
              >
                {cert.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
                  <FiStar className="mr-2" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Driving Global Healthcare Access
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  To make safe, effective, and affordable healthcare products
                  accessible worldwide while maintaining the highest standards
                  of professionalism, compliance, and ethical business
                  practices.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6">
                  <FiGlobe className="mr-2" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Leading Pharmaceutical Export Excellence
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  To be the most reliable and preferred pharmaceutical export
                  partner globally, building lasting relationships based on
                  trust, innovation, and exceptional service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <FiMapPin className="mr-3 text-blue-600" />
                      Registered Office
                    </h3>
                    <address className="text-gray-700 not-italic space-y-2">
                      <p className="font-semibold">
                        Maxx Overseas Impex SS Entertainment
                      </p>
                      <p>Ground Floor, Shop No-32</p>
                      <p>Aakash Ganga Co Op Hsg Society</p>
                      <p>Shri Prastha Complex, Nallasopara West</p>
                      <p>Vasai Virar, Palghar, Maharashtra - 401203</p>
                      <p>India</p>
                    </address>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <FiPhone className="mr-3 text-blue-600" />
                      Contact Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium text-gray-500">
                          Primary Contact
                        </div>
                        <div className="text-lg font-semibold">
                          +91 7397 971 039
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-500">
                          Email Address
                        </div>
                        <div className="text-lg font-semibold">
                          maxxoverseasimpex@gmail.com
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-500">
                          Business Hours
                        </div>
                        <div className="text-lg font-semibold">
                          Mon-Sat: 9:00 AM - 7:00 PM IST
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <FiShield className="text-2xl text-green-600 mr-4" />
                    <div>
                      <div className="font-bold">GSTIN Verification</div>
                      <div className="text-gray-600">
                        27BXYPB0526L1Z4 • Valid and Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-blue-600 text-white rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
                <p className="mb-8 text-blue-100">
                  Have questions about our products or services? Our team is
                  ready to assist you.
                </p>
                <button className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition duration-300">
                  Send Message
                </button>
                <div className="mt-8 pt-8 border-t border-blue-500">
                  <div className="text-sm text-blue-200">
                    <div className="font-bold mb-2">Emergency Contact</div>
                    <div className="text-lg font-semibold">
                      Available 24/7 for urgent orders
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
