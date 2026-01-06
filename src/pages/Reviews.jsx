import React, { useState, useEffect } from "react";
import {
  FiStar,
  FiUser,
  FiCheckCircle,
  FiCalendar,
  FiThumbsUp,
  FiEdit3,
  FiSend,
  FiX,
} from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    rating: 5,
    comment: "",
    product: "",
  });
  const [helpfulVotes, setHelpfulVotes] = useState({});
  const [notHelpfulVotes, setNotHelpfulVotes] = useState({});
  const [localReviews, setLocalReviews] = useState([]);

  // Initialize from localStorage on component mount
  useEffect(() => {
    const savedReviews = localStorage.getItem("userReviews");
    const savedHelpful = localStorage.getItem("helpfulVotes");
    const savedNotHelpful = localStorage.getItem("notHelpfulVotes");

    if (savedReviews) {
      try {
        setLocalReviews(JSON.parse(savedReviews));
      } catch (error) {
        console.error("Error parsing saved reviews:", error);
      }
    }

    if (savedHelpful) {
      try {
        setHelpfulVotes(JSON.parse(savedHelpful));
      } catch (error) {
        console.error("Error parsing helpful votes:", error);
      }
    }

    if (savedNotHelpful) {
      try {
        setNotHelpfulVotes(JSON.parse(savedNotHelpful));
      } catch (error) {
        console.error("Error parsing not helpful votes:", error);
      }
    }
  }, []);

  // Save to localStorage whenever reviews or votes change
  useEffect(() => {
    localStorage.setItem("userReviews", JSON.stringify(localReviews));
  }, [localReviews]);

  useEffect(() => {
    localStorage.setItem("helpfulVotes", JSON.stringify(helpfulVotes));
  }, [helpfulVotes]);

  useEffect(() => {
    localStorage.setItem("notHelpfulVotes", JSON.stringify(notHelpfulVotes));
  }, [notHelpfulVotes]);

  // Mock initial reviews data (20 additional reviews added)
  const initialReviews = [
    {
      id: 1,
      name: "Dr. James Wilson",
      role: "Cardiologist",
      rating: 5,
      date: "2024-03-15",
      verified: true,
      comment:
        "Excellent quality pharmaceuticals. Our hospital has been using their products for 2 years with zero issues. Highly reliable supplier.",
      product: "Cenforce 100 Mg",
      helpful: 42,
      notHelpful: 2,
      avatarColor: "bg-blue-100 text-blue-600",
      isUserReview: false,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Pharmacy Owner",
      rating: 4.5,
      date: "2024-03-10",
      verified: true,
      comment:
        "Great service and fast delivery. The products are genuine and well-packaged. Customer support is very responsive.",
      product: "Vidalista 20 Mg",
      helpful: 28,
      notHelpful: 1,
      avatarColor: "bg-green-100 text-green-600",
      isUserReview: false,
    },
    {
      id: 3,
      name: "Dr. Sarah Chen",
      role: "Neurologist",
      rating: 5,
      date: "2024-03-05",
      verified: true,
      comment:
        "As a neurologist, I appreciate the quality and consistency of their medications. Patients report positive outcomes with minimal side effects.",
      product: "Modafinil 200 Mg",
      helpful: 35,
      notHelpful: 0,
      avatarColor: "bg-purple-100 text-purple-600",
      isUserReview: false,
    },
    {
      id: 4,
      name: "Robert Johnson",
      role: "Clinic Administrator",
      rating: 4,
      date: "2024-03-01",
      verified: true,
      comment:
        "Good wholesale prices. The bulk ordering system is efficient. Some delays during peak seasons but overall satisfactory.",
      product: "Kamagra Oral Jelly",
      helpful: 19,
      notHelpful: 3,
      avatarColor: "bg-orange-100 text-orange-600",
      isUserReview: false,
    },
    {
      id: 5,
      name: "Dr. Emily Watson",
      role: "General Physician",
      rating: 5,
      date: "2024-02-28",
      verified: true,
      comment:
        "Top-notch quality! I've prescribed their products to hundreds of patients. The efficacy is consistent and reliable.",
      product: "Sildenafil Citrate",
      helpful: 47,
      notHelpful: 1,
      avatarColor: "bg-pink-100 text-pink-600",
      isUserReview: false,
    },
    {
      id: 6,
      name: "David Miller",
      role: "Hospital Procurement",
      rating: 4.5,
      date: "2024-02-25",
      verified: true,
      comment:
        "Regular supplier for our hospital chain. Quality control is excellent. Documentation and certifications are always provided.",
      product: "Tadalafil 20 Mg",
      helpful: 31,
      notHelpful: 2,
      avatarColor: "bg-teal-100 text-teal-600",
      isUserReview: false,
    },
    {
      id: 7,
      name: "Dr. Lisa Thompson",
      role: "Endocrinologist",
      rating: 5,
      date: "2024-02-20",
      verified: true,
      comment:
        "Exceptional pharmaceutical grade. I trust their products for my diabetic patients. Never had any quality complaints.",
      product: "Metformin 500 Mg",
      helpful: 38,
      notHelpful: 0,
      avatarColor: "bg-indigo-100 text-indigo-600",
      isUserReview: false,
    },
    {
      id: 8,
      name: "Andrew Wilson",
      role: "Medical Store Chain Owner",
      rating: 4,
      date: "2024-02-18",
      verified: true,
      comment:
        "Supplies to 15+ stores across the state. Consistent quality and good margins. Customer service could be faster.",
      product: "Vilitra 20 Mg",
      helpful: 22,
      notHelpful: 4,
      avatarColor: "bg-red-100 text-red-600",
      isUserReview: false,
    },
    {
      id: 9,
      name: "Dr. Rajesh Kumar",
      role: "Cardiologist",
      rating: 5,
      date: "2024-02-15",
      verified: true,
      comment:
        "International standards quality. Packaging is professional and tamper-proof. My go-to supplier for cardiac medications.",
      product: "Amlodipine 5 Mg",
      helpful: 40,
      notHelpful: 1,
      avatarColor: "bg-yellow-100 text-yellow-600",
      isUserReview: false,
    },
    {
      id: 10,
      name: "Jennifer Lee",
      role: "Pharmacy Manager",
      rating: 4.5,
      date: "2024-02-12",
      verified: true,
      comment:
        "Excellent return policy for damaged goods. Products always arrive with proper cold chain maintenance when required.",
      product: "Insulin Pens",
      helpful: 29,
      notHelpful: 2,
      avatarColor: "bg-blue-100 text-blue-600",
      isUserReview: false,
    },
    {
      id: 11,
      name: "Dr. Carlos Mendez",
      role: "Urologist",
      rating: 5,
      date: "2024-02-10",
      verified: true,
      comment:
        "Specialized medications are of premium quality. My patients using their ED medications report high satisfaction.",
      product: "Fildena 100 Mg",
      helpful: 36,
      notHelpful: 0,
      avatarColor: "bg-green-100 text-green-600",
      isUserReview: false,
    },
    {
      id: 12,
      name: "Thomas Anderson",
      role: "Medical Distributor",
      rating: 4,
      date: "2024-02-08",
      verified: true,
      comment:
        "Good for bulk orders. Minimum order quantity is reasonable. Payment terms are flexible for established clients.",
      product: "Zhewitra 20 Mg",
      helpful: 24,
      notHelpful: 3,
      avatarColor: "bg-purple-100 text-purple-600",
      isUserReview: false,
    },
    {
      id: 13,
      name: "Dr. Maria Garcia",
      role: "Psychiatrist",
      rating: 5,
      date: "2024-02-05",
      verified: true,
      comment:
        "Their psychiatric medications are highly effective. Quality is consistent across batches. Very reliable supplier.",
      product: "Escitalopram 10 Mg",
      helpful: 33,
      notHelpful: 1,
      avatarColor: "bg-orange-100 text-orange-600",
      isUserReview: false,
    },
    {
      id: 14,
      name: "Samuel Johnson",
      role: "Healthcare Consultant",
      rating: 4.5,
      date: "2024-02-03",
      verified: true,
      comment:
        "I recommend them to my hospital clients. Good balance of quality and pricing. Compliance with regulations is excellent.",
      product: "Supertadarise 80 Mg",
      helpful: 27,
      notHelpful: 2,
      avatarColor: "bg-pink-100 text-pink-600",
      isUserReview: false,
    },
    {
      id: 15,
      name: "Dr. Kenji Tanaka",
      role: "Oncologist",
      rating: 5,
      date: "2024-02-01",
      verified: true,
      comment:
        "Special medications for cancer patients are of highest quality. Temperature-sensitive products handled professionally.",
      product: "Chemotherapy Adjuvants",
      helpful: 41,
      notHelpful: 0,
      avatarColor: "bg-teal-100 text-teal-600",
      isUserReview: false,
    },
    {
      id: 16,
      name: "Alexandra Petrova",
      role: "Pharmacy Chain Director",
      rating: 4,
      date: "2024-01-28",
      verified: true,
      comment:
        "Supplying to 50+ pharmacies. Occasionally late deliveries but quality is never compromised. Good long-term partner.",
      product: "Tadacip 20 Mg",
      helpful: 30,
      notHelpful: 4,
      avatarColor: "bg-indigo-100 text-indigo-600",
      isUserReview: false,
    },
    {
      id: 17,
      name: "Dr. Ahmed Hassan",
      role: "Pediatrician",
      rating: 5,
      date: "2024-01-25",
      verified: true,
      comment:
        "Pediatric formulations are excellent. Proper dosing and child-friendly packaging. Parents appreciate the quality.",
      product: "Pediatric Antibiotics",
      helpful: 35,
      notHelpful: 1,
      avatarColor: "bg-red-100 text-red-600",
      isUserReview: false,
    },
    {
      id: 18,
      name: "Brian O'Connor",
      role: "Medical Wholesaler",
      rating: 4.5,
      date: "2024-01-22",
      verified: true,
      comment:
        "One of our primary suppliers. The range of products is extensive. Technical support for new products is helpful.",
      product: "Malegra 100 Mg",
      helpful: 26,
      notHelpful: 2,
      avatarColor: "bg-yellow-100 text-yellow-600",
      isUserReview: false,
    },
    {
      id: 19,
      name: "Dr. Sophia Williams",
      role: "Gynecologist",
      rating: 5,
      date: "2024-01-20",
      verified: true,
      comment:
        "Women's health products are of superior quality. Packaging is discreet and professional. Highly recommended.",
      product: "Contraceptives",
      helpful: 39,
      notHelpful: 0,
      avatarColor: "bg-blue-100 text-blue-600",
      isUserReview: false,
    },
    {
      id: 20,
      name: "Kevin Richardson",
      role: "Hospital Group Director",
      rating: 4,
      date: "2024-01-18",
      verified: true,
      comment:
        "Supplying to our 7 hospitals. Volume discounts are competitive. Quality audits consistently pass with high scores.",
      product: "ICU Medications",
      helpful: 32,
      notHelpful: 3,
      avatarColor: "bg-green-100 text-green-600",
      isUserReview: false,
    },
    {
      id: 21,
      name: "Dr. Olivia Martinez",
      role: "Dermatologist",
      rating: 5,
      date: "2024-01-15",
      verified: true,
      comment:
        "Dermatological products show excellent results. Patients report faster recovery and minimal irritation.",
      product: "Topical Creams",
      helpful: 37,
      notHelpful: 1,
      avatarColor: "bg-purple-100 text-purple-600",
      isUserReview: false,
    },
    {
      id: 22,
      name: "Daniel Brown",
      role: "Medical Equipment & Pharma",
      rating: 4.5,
      date: "2024-01-12",
      verified: true,
      comment:
        "Combined orders of equipment and medications are handled well. Integrated logistics is a big advantage.",
      product: "Various Pharmaceuticals",
      helpful: 28,
      notHelpful: 2,
      avatarColor: "bg-orange-100 text-orange-600",
      isUserReview: false,
    },
  ];

  // Combine initial reviews with user-submitted reviews
  const allReviews = [...initialReviews, ...localReviews];

  // Rating statistics based on all reviews
  const calculateRatingStats = () => {
    const total = allReviews.length;
    const sum = allReviews.reduce((acc, review) => acc + review.rating, 0);
    const average = total > 0 ? (sum / total).toFixed(1) : 0;

    // Calculate distribution
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    allReviews.forEach((review) => {
      const star = Math.round(review.rating);
      if (star >= 1 && star <= 5) {
        distribution[star] = (distribution[star] || 0) + 1;
      }
    });

    // Convert to percentages
    Object.keys(distribution).forEach((star) => {
      distribution[star] =
        total > 0 ? Math.round((distribution[star] / total) * 100) : 0;
    });

    return {
      total,
      average: parseFloat(average),
      distribution,
    };
  };

  const ratingStats = calculateRatingStats();

  // Filter reviews
  const filteredReviews = allReviews.filter((review) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "5-star") return review.rating === 5;
    if (activeFilter === "4-star")
      return review.rating >= 4 && review.rating < 5;
    if (activeFilter === "verified") return review.verified;
    if (activeFilter === "user") return review.isUserReview;
    return true;
  });

  // Render stars based on rating
  const renderStars = (rating, interactive = false, onStarClick = null) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={interactive ? () => onStarClick(i) : undefined}
          className={interactive ? "hover:scale-110 transition-transform" : ""}
          disabled={!interactive}
        >
          {i <= rating ? (
            <FaStar className="text-yellow-400" />
          ) : i - 0.5 === rating ? (
            <FaStarHalfAlt className="text-yellow-400" />
          ) : (
            <FaStar className="text-gray-300" />
          )}
        </button>
      );
    }
    return stars;
  };

  // Handle review submission
  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (
      !newReview.name.trim() ||
      !newReview.comment.trim() ||
      !newReview.product.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const newReviewObj = {
      id: Date.now(), // Simple unique ID
      name: newReview.name,
      role: newReview.role || "Customer",
      rating: newReview.rating,
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD format
      verified: false,
      comment: newReview.comment,
      product: newReview.product,
      helpful: 0,
      notHelpful: 0,
      avatarColor: `bg-${
        [
          "blue",
          "green",
          "purple",
          "orange",
          "pink",
          "teal",
          "indigo",
          "red",
          "yellow",
        ][Math.floor(Math.random() * 9)]
      }-100 text-${
        [
          "blue",
          "green",
          "purple",
          "orange",
          "pink",
          "teal",
          "indigo",
          "red",
          "yellow",
        ][Math.floor(Math.random() * 9)]
      }-600`,
      isUserReview: true,
    };

    // Add to local reviews
    setLocalReviews((prev) => [...prev, newReviewObj]);

    // Reset form
    setNewReview({
      name: "",
      role: "",
      rating: 5,
      comment: "",
      product: "",
    });

    setShowReviewForm(false);
    alert("Thank you for your review! It has been submitted successfully.");
  };

  // Handle helpful/unhelpful votes
  const handleVote = (reviewId, type) => {
    const storageKey = type === "helpful" ? "helpfulVotes" : "notHelpfulVotes";
    const voteSetter =
      type === "helpful" ? setHelpfulVotes : setNotHelpfulVotes;
    const currentVotes = type === "helpful" ? helpfulVotes : notHelpfulVotes;

    if (currentVotes[reviewId]) {
      alert(`You have already voted this review as ${type}`);
      return;
    }

    // Update votes
    voteSetter((prev) => ({
      ...prev,
      [reviewId]: true,
    }));

    // Update review count in local storage if it's a user review
    if (allReviews.find((r) => r.id === reviewId && r.isUserReview)) {
      setLocalReviews((prev) =>
        prev.map((review) =>
          review.id === reviewId
            ? { ...review, [type]: review[type] + 1 }
            : review
        )
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Submit Review Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Customer Reviews
            </h1>
            <p className="text-gray-600">
              Read what healthcare professionals and customers say about our
              products and services
            </p>
          </div>
          <button
            onClick={() => setShowReviewForm(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
          >
            <FiEdit3 /> Write a Review
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Rating Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {ratingStats.average}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(ratingStats.average)}
                </div>
                <div className="text-gray-600">
                  Based on {ratingStats.total} reviews
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3 mb-6">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center">
                    <div className="w-12 text-sm font-medium text-gray-700">
                      {star} star
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                          style={{
                            width: `${ratingStats.distribution[star]}%`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-10 text-sm text-gray-600">
                      {ratingStats.distribution[star]}%
                    </div>
                  </div>
                ))}
              </div>

              {/* Review Filters */}
              <div className="space-y-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeFilter === "all"
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span>All Reviews</span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {ratingStats.total}
                  </span>
                </button>
                <button
                  onClick={() => setActiveFilter("5-star")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeFilter === "5-star"
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    ⭐⭐⭐⭐⭐ 5 Star
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {Math.round(
                      (ratingStats.distribution[5] / 100) * ratingStats.total
                    )}
                  </span>
                </button>
                <button
                  onClick={() => setActiveFilter("4-star")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeFilter === "4-star"
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    ⭐⭐⭐⭐ 4 Star
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {Math.round(
                      (ratingStats.distribution[4] / 100) * ratingStats.total
                    )}
                  </span>
                </button>
                <button
                  onClick={() => setActiveFilter("verified")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeFilter === "verified"
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FiCheckCircle /> Verified
                  </span>
                </button>
                <button
                  onClick={() => setActiveFilter("user")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeFilter === "user"
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    👤 User Reviews
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {localReviews.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-4">Why Trust Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span className="text-sm">All Reviews Saved Permanently</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span className="text-sm">User Reviews Never Deleted</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span className="text-sm">Your Feedback Matters</span>
                </div>
                <div className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span className="text-sm">Real Customer Experiences</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Reviews List */}
          <div className="lg:col-span-3">
            {/* Review Count and Sorting */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold">
                  {filteredReviews.length} Review
                  {filteredReviews.length !== 1 ? "s" : ""}
                  {activeFilter !== "all" && ` (Filtered)`}
                </h2>
                {localReviews.length > 0 && (
                  <p className="text-sm text-green-600 mt-1">
                    {localReviews.length} user review(s) saved permanently
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <select className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-auto">
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                  <option>Most Helpful</option>
                  <option>User Reviews First</option>
                </select>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-full md:w-auto"
                >
                  <FiEdit3 /> Add Review
                </button>
              </div>
            </div>

            {/* Review Form Modal */}
            {showReviewForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Write a Review
                      </h3>
                      <button
                        onClick={() => setShowReviewForm(false)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <FiX className="text-xl" />
                      </button>
                    </div>

                    <form onSubmit={handleSubmitReview} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={newReview.name}
                            onChange={(e) =>
                              setNewReview({
                                ...newReview,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Role/Profession
                          </label>
                          <input
                            type="text"
                            value={newReview.role}
                            onChange={(e) =>
                              setNewReview({
                                ...newReview,
                                role: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., Customer, Doctor, etc."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={newReview.product}
                          onChange={(e) =>
                            setNewReview({
                              ...newReview,
                              product: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Which product are you reviewing?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Rating *
                        </label>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl font-bold">
                            {newReview.rating}
                          </span>
                          <div className="flex text-2xl">
                            {renderStars(newReview.rating, true, (rating) =>
                              setNewReview({ ...newReview, rating })
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Review *
                        </label>
                        <textarea
                          required
                          value={newReview.comment}
                          onChange={(e) =>
                            setNewReview({
                              ...newReview,
                              comment: e.target.value,
                            })
                          }
                          rows="5"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Share your experience with this product..."
                        />
                      </div>

                      <div className="flex justify-end gap-4 pt-4">
                        <button
                          type="button"
                          onClick={() => setShowReviewForm(false)}
                          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                          <FiSend /> Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews List */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                    review.isUserReview
                      ? "border-green-500 border-opacity-50 bg-green-50 bg-opacity-30"
                      : "border-blue-500 border-opacity-50"
                  }`}
                >
                  {/* Review Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${review.avatarColor}`}
                      >
                        <FiUser className="text-xl" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">
                            {review.name}
                          </h3>
                          {review.isUserReview && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <FiUser className="mr-1" /> Your Review
                            </span>
                          )}
                          {review.verified && !review.isUserReview && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <FiCheckCircle className="mr-1" /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {review.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex items-center">
                            {renderStars(review.rating)}
                            <span className="ml-2 text-sm font-medium text-gray-700">
                              {review.rating}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500 flex items-center">
                            <FiCalendar className="inline mr-1" />
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <span className="text-sm font-medium text-gray-700">
                        Product:
                      </span>
                      <div className="text-blue-600 font-medium">
                        {review.product}
                      </div>
                      {review.isUserReview && (
                        <div className="text-xs text-green-600 mt-1">
                          ✓ Saved permanently
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="mb-4">
                    <p className="text-gray-700">{review.comment}</p>
                  </div>

                  {/* Review Footer */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 border-t border-gray-100 gap-4">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleVote(review.id, "helpful")}
                        disabled={helpfulVotes[review.id]}
                        className={`flex items-center text-sm ${
                          helpfulVotes[review.id]
                            ? "text-blue-600 cursor-default"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                      >
                        <FiThumbsUp className="mr-2" />
                        Helpful (
                        {review.helpful + (helpfulVotes[review.id] ? 1 : 0)})
                      </button>
                      <button
                        onClick={() => handleVote(review.id, "notHelpful")}
                        disabled={notHelpfulVotes[review.id]}
                        className={`flex items-center text-sm ${
                          notHelpfulVotes[review.id]
                            ? "text-red-600 cursor-default"
                            : "text-gray-600 hover:text-red-600"
                        }`}
                      >
                        <FiThumbsUp className="mr-2 transform rotate-180" />
                        Not Helpful (
                        {review.notHelpful +
                          (notHelpfulVotes[review.id] ? 1 : 0)}
                        )
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">
                      {review.isUserReview
                        ? "Submitted by you"
                        : "Purchased: Bulk Order"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Reviews Message */}
            {filteredReviews.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <FiStar className="text-4xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No reviews found</h3>
                <p className="text-gray-600 mb-6">
                  Try changing your filter criteria or be the first to write a
                  review!
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-3"
                >
                  Show All Reviews
                </button>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Write First Review
                </button>
              </div>
            )}

            {/* Pagination (if needed) */}
            {filteredReviews.length > 10 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2 text-blue-900">
                Real Reviews from Real Customers
              </h3>
              <p className="text-blue-800">
                All reviews are from verified healthcare professionals and
                customers. User-submitted reviews are saved permanently and
                never deleted. Your feedback helps us improve our products and
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
