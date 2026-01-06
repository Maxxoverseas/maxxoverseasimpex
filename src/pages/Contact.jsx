import React, { useState, useEffect, useRef } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiGlobe,
  FiExternalLink,
  FiUser,
  FiMessageSquare,
  FiX,
  FiCopy,
} from "react-icons/fi";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaCopy, FaRegCopy } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    subject: "",
    message: "",
    productInterest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCountrySuggestions, setShowCountrySuggestions] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeQuickContact, setActiveQuickContact] = useState(null);
  const [emailPreview, setEmailPreview] = useState({
    show: false,
    subject: "",
    body: "",
  });

  const emailOptionsRef = useRef(null);
  const countryInputRef = useRef(null);

  // Office location coordinates for Google Maps
  const officeLocation = {
    address:
      "Graund Floor, Shop No-32, Aakash Ganga Co Op Hsg Societyy, Shri Prastha Complex, Nallasopara West, Vasai Virar, Palghar, Nalasopara, Maharashtra, India - 401203",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Graund+Floor+Shop+No-32+Aakash+Ganga+Co+Op+Hsg+Societyy+Nallasopara+West+Maharashtra+401203",
    coordinates: {
      lat: 19.4158,
      lng: 72.8403,
    },
  };

  // Email and WhatsApp details
  const companyEmail = "maxxoverseasimpex@gmail.com";
  const companyPhone = "+917397971039";
  const companyName = "Maxx Overseas Impex";

  // Email service options - Only Gmail
  const emailServices = [
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=",
      icon: "G",
      color: "bg-red-100 text-red-600",
    },
  ];

  // Close email options when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emailOptionsRef.current &&
        !emailOptionsRef.current.contains(event.target)
      ) {
        setShowEmailOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          subject: "",
          message: "",
          productInterest: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Function to open Google Maps with office location
  const openGoogleMaps = () => {
    window.open(officeLocation.googleMapsUrl, "_blank");
  };

  // Function to open email client with better formatting
  const openEmailClient = (service = null) => {
    const {
      name,
      email,
      phone,
      company,
      country,
      subject,
      message,
      productInterest,
    } = formData;

    // Construct email subject
    const emailSubject =
      subject ||
      `Inquiry for ${
        productInterest || "Pharmaceutical Products"
      } - ${companyName}`;

    // Construct email body with professional formatting
    let emailBody = `Dear ${companyName} Team,\n\n`;

    if (message) {
      emailBody += `${message}\n\n`;
    } else {
      emailBody += `I am interested in learning more about your pharmaceutical products and services.\n\n`;
    }

    // Add user details section
    emailBody += `--- My Contact Details ---\n`;
    if (name) emailBody += `Name: ${name}\n`;
    if (email) emailBody += `Email: ${email}\n`;
    if (phone) emailBody += `Phone: ${phone}\n`;
    if (company) emailBody += `Company: ${company}\n`;
    if (country) emailBody += `Country: ${country}\n`;
    if (productInterest) emailBody += `Product Interest: ${productInterest}\n`;

    emailBody += `\n--- End of Message ---\n\n`;
    emailBody += `I look forward to your response.\n\n`;
    emailBody += `Best regards,\n`;
    emailBody += `${name || "Prospective Client"}\n`;
    if (company) emailBody += `${company}\n`;

    // Encode for URL
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    // For Gmail
    if (service && service.url) {
      const webmailUrl = `${service.url}${companyEmail}&su=${encodedSubject}&body=${encodedBody}`;
      window.open(webmailUrl, "_blank");
    } else {
      // Fallback to default mailto
      const mailtoLink = `mailto:${companyEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoLink;

      // Open in new tab as fallback for mobile
      setTimeout(() => {
        window.open(mailtoLink, "_blank");
      }, 100);
    }

    setShowEmailOptions(false);
    setActiveQuickContact("email");

    // Reset after 2 seconds
    setTimeout(() => setActiveQuickContact(null), 2000);
  };

  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    const { name, email, phone, company, productInterest } = formData;

    let message = `Hello ${companyName},\n\n`;
    message += `I would like to inquire about your pharmaceutical products and services.\n\n`;

    if (name) message += `Name: ${name}\n`;
    if (email) message += `Email: ${email}\n`;
    if (phone) message += `Phone: ${phone}\n`;
    if (company) message += `Company: ${company}\n`;
    if (productInterest) message += `Interested in: ${productInterest}\n\n`;

    message += `Please provide more information when available.\n\n`;
    message += `Thank you.`;

    const whatsappUrl = `https://wa.me/${companyPhone.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setActiveQuickContact("whatsapp");
    setTimeout(() => setActiveQuickContact(null), 2000);
  };

  // Function for direct phone call
  const makePhoneCall = () => {
    window.location.href = `tel:${companyPhone}`;
    setActiveQuickContact("call");
    setTimeout(() => setActiveQuickContact(null), 2000);
  };

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(companyEmail)
      .then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Function to show email preview
  const showEmailPreview = () => {
    const {
      name,
      email,
      phone,
      company,
      country,
      subject,
      message,
      productInterest,
    } = formData;

    const emailSubject =
      subject || `Inquiry for ${productInterest || "Pharmaceutical Products"}`;

    let emailBody = `Dear ${companyName} Team,\n\n`;
    emailBody +=
      message ||
      `I am interested in learning more about your pharmaceutical products and services.\n\n`;
    emailBody += `--- Contact Details ---\n`;
    if (name) emailBody += `Name: ${name}\n`;
    if (email) emailBody += `Email: ${email}\n`;
    if (phone) emailBody += `Phone: ${phone}\n`;
    if (company) emailBody += `Company: ${company}\n`;
    if (country) emailBody += `Country: ${country}\n`;
    if (productInterest) emailBody += `Product Interest: ${productInterest}\n`;

    setEmailPreview({
      show: true,
      subject: emailSubject,
      body: emailBody,
    });
  };

  // Contact information cards
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Address",
      details: [companyEmail],
      description: "Send us your queries anytime",
      action: () => setShowEmailOptions(!showEmailOptions),
      actionText: "Open in Gmail",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone & WhatsApp",
      details: [companyPhone, "Available on WhatsApp"],
      description: "Monday to Saturday, 9AM to 7PM IST",
      action: openWhatsApp,
      actionText: "Chat on WhatsApp",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Office Address",
      details: [
        "Graund Floor, Shop No-32",
        "Aakash Ganga Co Op Hsg Societyy",
        "Nallasopara West, Maharashtra",
        "India - 401203",
      ],
      description: "Registered Office Location",
      action: openGoogleMaps,
      actionText: "View on Maps",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: Emergency Support Only",
      ],
      description: "Indian Standard Time",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  // Product interests for dropdown
  const productInterests = [
    "Pharmaceutical Drugs",
    "Medical Equipment",
    "Third-Party Manufacturing",
    "Bulk Medicines",
    "Custom Formulations",
    "Healthcare Products",
    "API Products",
    "Other",
  ];

  // Country suggestions
  const countrySuggestions = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "South Africa",
    "UAE",
    "Saudi Arabia",
    "India",
    "China",
    "Brazil",
    "Mexico",
    "Russia",
    "Spain",
    "Italy",
    "Netherlands",
    "Singapore",
    "Malaysia",
  ];

  const filteredCountrySuggestions = formData.country
    ? countrySuggestions.filter((country) =>
        country.toLowerCase().includes(formData.country.toLowerCase())
      )
    : countrySuggestions;

  const handleCountrySelect = (country) => {
    setFormData((prev) => ({ ...prev, country }));
    setShowCountrySuggestions(false);
  };

  // Quick action buttons
  const quickActions = [
    {
      icon: <MdEmail className="text-xl" />,
      label: "Quick Email",
      action: () => openEmailClient(),
      color: "bg-blue-600 hover:bg-blue-700",
      activeColor: "bg-blue-800",
      id: "email",
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      label: "WhatsApp",
      action: openWhatsApp,
      color: "bg-green-600 hover:bg-green-700",
      activeColor: "bg-green-800",
      id: "whatsapp",
    },
    {
      icon: <MdPhone className="text-xl" />,
      label: "Call Now",
      action: makePhoneCall,
      color: "bg-red-600 hover:bg-red-700",
      activeColor: "bg-red-800",
      id: "call",
    },
    {
      icon: <FaCopy className="text-xl" />,
      label: "Copy Email",
      action: copyEmailToClipboard,
      color: "bg-purple-600 hover:bg-purple-700",
      activeColor: "bg-purple-800",
      id: "copy",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
            Connect with Maxx Overseas for premium pharmaceutical exports. Our
            team is ready to assist you 24/7 with quality products and global
            shipping solutions.
          </p>

          {/* Quick Action Buttons in Hero */}
          <div className="flex flex-wrap gap-3 mt-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className={`px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 flex items-center ${
                  activeQuickContact === action.id
                    ? action.activeColor
                    : action.color
                }`}
              >
                {action.icon}
                <span className="ml-2">{action.label}</span>
                {action.id === "copy" && copiedEmail && (
                  <span className="ml-2 text-xs bg-white text-purple-600 px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Email Options Modal */}
      {showEmailOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div
            ref={emailOptionsRef}
            className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Open in Gmail</h3>
              <button
                onClick={() => setShowEmailOptions(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Your email will be opened in Gmail with pre-filled content:
            </p>

            <div className="space-y-3">
              {emailServices.map((service, index) => (
                <button
                  key={index}
                  onClick={() => openEmailClient(service)}
                  className="w-full p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${service.color}`}
                    >
                      <span className="font-bold">{service.icon}</span>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">
                        {service.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Open in {service.name}
                      </p>
                    </div>
                  </div>
                  <FiExternalLink className="text-gray-400 group-hover:text-blue-500" />
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={showEmailPreview}
                className="w-full p-3 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center"
              >
                <FiMessageSquare className="mr-2" />
                Preview Email Content
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Preview Modal */}
      {emailPreview.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">Email Preview</h3>
              <button
                onClick={() =>
                  setEmailPreview({ show: false, subject: "", body: "" })
                }
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To:
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{companyEmail}</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject:
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {emailPreview.subject}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message:
                </label>
                <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-wrap font-mono text-sm">
                  {emailPreview.body}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-between">
              <button
                onClick={() =>
                  setEmailPreview({ show: false, subject: "", body: "" })
                }
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <div className="flex gap-3">
                <button
                  onClick={copyEmailToClipboard}
                  className="px-4 py-2 border border-purple-300 text-purple-600 rounded-lg hover:bg-purple-50 flex items-center"
                >
                  <FaRegCopy className="mr-2" />
                  Copy Content
                </button>
                <button
                  onClick={() => openEmailClient()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <FiMail className="mr-2" />
                  Open in Gmail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Information */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border-l-4 ${info.color} border-l-4`}
              >
                <div className={`${info.color} mb-3 md:mb-4`}>{info.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 md:space-y-2 mb-2 md:mb-3 flex-grow">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-sm md:text-base text-gray-600 leading-relaxed break-words"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-500 mb-3">
                  {info.description}
                </p>
                {info.action && (
                  <button
                    onClick={info.action}
                    className={`mt-auto px-3 py-2 text-sm ${info.bgColor} ${info.color} rounded-lg hover:opacity-90 transition-colors duration-300 font-medium flex items-center justify-center w-full`}
                  >
                    <span>{info.actionText}</span>
                    {info.title === "Email Address" && (
                      <FiExternalLink className="ml-2" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Send Your Inquiry
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 text-center">
                  <FiCheckCircle className="text-green-500 text-4xl md:text-5xl mx-auto mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-1 md:mb-2">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-green-600 mb-4 md:mb-6 text-sm md:text-base">
                    Thank you for contacting Maxx Overseas. Our team will get
                    back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium text-sm md:text-base"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={openEmailClient}
                      className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-sm md:text-base"
                    >
                      Open in Gmail
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1 md:mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full pl-10 pr-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Smith"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 md:mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1 md:mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full pl-10 pr-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 md:mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="relative" ref={countryInputRef}>
                      <label className="block text-sm font-medium mb-1 md:mb-2">
                        Country *
                      </label>
                      <div className="relative">
                        <FiGlobe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="country"
                          required
                          className="w-full pl-10 pr-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base"
                          value={formData.country}
                          onChange={(e) => {
                            handleInputChange(e);
                            setShowCountrySuggestions(true);
                          }}
                          onFocus={() => setShowCountrySuggestions(true)}
                          onBlur={() =>
                            setTimeout(
                              () => setShowCountrySuggestions(false),
                              200
                            )
                          }
                          placeholder="Enter your country"
                        />
                      </div>

                      {showCountrySuggestions &&
                        filteredCountrySuggestions.length > 0 && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {filteredCountrySuggestions.map(
                              (country, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 text-sm md:text-base flex items-center"
                                  onClick={() => handleCountrySelect(country)}
                                  onMouseDown={(e) => e.preventDefault()}
                                >
                                  <FiGlobe className="mr-2 text-gray-400" />
                                  {country}
                                </button>
                              )
                            )}
                          </div>
                        )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 md:mb-2">
                        Product Interest *
                      </label>
                      <select
                        name="productInterest"
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base appearance-none bg-white"
                        value={formData.productInterest}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Interest</option>
                        {productInterests.map((interest, index) => (
                          <option key={index} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g., Bulk Order Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm md:text-base resize-y"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your requirements, quantity needed, delivery location, etc."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center text-sm md:text-base ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      <FiSend className="mr-2" />
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </button>

                    <button
                      type="button"
                      onClick={() => openEmailClient()}
                      className="px-4 py-2 md:px-6 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium flex items-center justify-center text-sm md:text-base"
                    >
                      <FiMail className="mr-2" />
                      Send via Gmail
                    </button>
                  </div>

                  {isSubmitting && (
                    <div className="text-gray-500 text-sm md:text-base">
                      Please wait while we process your inquiry...
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Company Details & Map */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 md:p-8 mb-6 md:mb-8 border border-blue-100">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-900">
                  Company Information
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-gray-800">
                      Business Details
                    </h4>
                    <div className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                      <p>
                        <strong className="text-gray-700">Legal Name:</strong>{" "}
                        {companyName}
                      </p>
                      <p>
                        <strong className="text-gray-700">Legal Status:</strong>{" "}
                        Individual (Sole proprietorship)
                      </p>
                      <p>
                        <strong className="text-gray-700">CEO:</strong> Mr. Ajay
                        Hawasingh Both
                      </p>
                      <p>
                        <strong className="text-gray-700">GSTIN:</strong>{" "}
                        27BXYPB0526L1Z4
                      </p>
                      <p>
                        <strong className="text-gray-700">
                          Year Established:
                        </strong>{" "}
                        2025
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-gray-800">
                      Export Services
                    </h4>
                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                      <li className="flex items-start">
                        <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Pharmaceutical Export Worldwide
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Third-Party / Contract Manufacturing
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Pharmaceutical Manufacturing Support
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Procurement of Medicines (Bulk & Small Quantities)
                      </li>
                      <li className="flex items-start">
                        <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Medical Equipment & Healthcare Product Supply
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-gray-800">
                      Why Contact Us
                    </h4>
                    <div className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                      <p>• Government-approved & licensed exporter</p>
                      <p>• 10+ years of global export experience</p>
                      <p>• WHO-GMP–compliant sourcing network</p>
                      <p>• Flexible order quantities</p>
                      <p>• Competitive pricing & reliable logistics</p>
                      <p>• Dedicated customer support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder with Click Functionality */}
              <div
                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden h-48 md:h-56 lg:h-64 cursor-pointer group relative"
                onClick={openGoogleMaps}
              >
                <div className="w-full h-full flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                  <div className="text-center p-4">
                    <MdLocationOn className="text-4xl md:text-5xl text-blue-600 mx-auto mb-2 md:mb-3 group-hover:text-blue-700 transition-colors duration-300 group-hover:scale-110" />
                    <p className="text-gray-600 text-sm md:text-base font-medium mb-1">
                      {companyName}
                    </p>
                    <p className="text-gray-500 text-xs md:text-sm">
                      Nallasopara West, Maharashtra
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 mb-2">
                      401203, India
                    </p>
                    <div className="mt-3 inline-flex items-center px-3 py-1.5 bg-white text-blue-600 rounded-full text-xs md:text-sm font-medium border border-blue-200 group-hover:bg-blue-50 group-hover:border-blue-300 transition-all duration-300">
                      <span>Click to open in Google Maps</span>
                      <FiExternalLink className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Quick Contact Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
                <button
                  onClick={() => setShowEmailOptions(true)}
                  className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-center text-sm md:text-base flex items-center justify-center group shadow-md hover:shadow-lg"
                >
                  <FiMail className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Open in Gmail
                </button>

                <button
                  onClick={openWhatsApp}
                  className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium text-center text-sm md:text-base flex items-center justify-center group shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  WhatsApp Chat
                </button>

                <button
                  onClick={makePhoneCall}
                  className="px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-medium text-center text-sm md:text-base flex items-center justify-center group shadow-md hover:shadow-lg"
                >
                  <FiPhone className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Call Directly
                </button>

                <button
                  onClick={copyEmailToClipboard}
                  className="px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 font-medium text-center text-sm md:text-base flex items-center justify-center group shadow-md hover:shadow-lg"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheckCircle className="mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>

              {/* Contact Tips */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
                  <FiCheckCircle className="mr-2" />
                  Quick Contact Tips
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• For urgent inquiries, use WhatsApp or direct call</li>
                  <li>
                    • Include your country and product interest for faster
                    response
                  </li>
                  <li>• Business hours: 9AM - 7PM IST (Monday - Saturday)</li>
                  <li>• Emergency support available on Sundays</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Floating Bar */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="flex flex-col items-end space-y-3">
          {showEmailOptions && (
            <div className="bg-white rounded-lg shadow-xl p-4 mb-3 animate-fade-in">
              <p className="text-sm text-gray-600 mb-2">Open email in Gmail</p>
              <div className="flex space-x-2">
                {emailServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => openEmailClient(service)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${service.color} hover:opacity-90`}
                    title={`Open in ${service.name}`}
                  >
                    {service.icon}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex space-x-3">
            <button
              onClick={() => setShowEmailOptions(!showEmailOptions)}
              className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                showEmailOptions
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              title="Open in Gmail"
            >
              <FiMail className="text-xl" />
            </button>

            <button
              onClick={openWhatsApp}
              className="w-14 h-14 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center hover:bg-green-700 transition-all duration-300"
              title="WhatsApp Chat"
            >
              <FaWhatsapp className="text-xl" />
            </button>

            <button
              onClick={makePhoneCall}
              className="w-14 h-14 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center hover:bg-red-700 transition-all duration-300"
              title="Call Now"
            >
              <FiPhone className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                q: "What is your minimum order quantity?",
                a: "We offer flexible MOQs ranging from sample quantities to bulk orders. Contact us for specific product requirements.",
              },
              {
                q: "Do you provide export documentation?",
                a: "Yes, we handle all necessary export documentation including certificates of analysis, certificates of origin, and regulatory compliance documents.",
              },
              {
                q: "What countries do you export to?",
                a: "We export to over 50 countries worldwide including USA, UK, Canada, Australia, Middle East, African and Asian countries.",
              },
              {
                q: "What is your typical delivery time?",
                a: "Delivery time varies by destination country, typically 15-45 days depending on the product and shipping method.",
              },
              {
                q: "How quickly do you respond to inquiries?",
                a: "We respond to all inquiries within 2-4 hours during business hours. Urgent inquiries get immediate attention.",
              },
              {
                q: "Can I get a sample before placing a bulk order?",
                a: "Yes, we provide samples for most products. Contact us to discuss your specific requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="font-bold text-base md:text-lg mb-2 text-blue-700">
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-lg font-bold mb-1">{companyName}</h3>
              <p className="text-blue-200 text-sm">
                Your Trusted Pharmaceutical Export Partner
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowEmailOptions(true)}
                className="px-4 py-2 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium text-sm flex items-center justify-center"
              >
                <FiMail className="mr-2" />
                Open in Gmail
              </button>
              <button
                onClick={openWhatsApp}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 font-medium text-sm flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Chat
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-700 text-center">
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} Maxx Overseas Impex. All rights
              reserved.
            </p>
            <p className="text-blue-300 text-sm mt-1">
              Address: {officeLocation.address.split(",")[0]},{" "}
              {officeLocation.address.split(",")[1]}
            </p>
            <div className="mt-3 flex justify-center space-x-4">
              <span className="text-blue-200 text-sm">
                Email: {companyEmail}
              </span>
              <span className="text-blue-200 text-sm">
                Phone: {companyPhone}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
