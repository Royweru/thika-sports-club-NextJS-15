'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, Star } from 'lucide-react'

const Facilities = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const categories = [
    {
      name: "Golf Course",
      description: "Championship 18-hole course with stunning landscapes",
      images: [
        "/hero.jpeg",
        "/hero2.jpg",
        "/hero3.jpg"
      ],
      features: [
        "18-hole championship course",
        "Professional golf shop",
        "Golf cart rentals",
        "Lessons with PGA professionals"
      ],
      highlights: {
        area: "120 acres",
        established: "1922",
        par: "72",
        difficulty: "Championship"
      }
    },
    {
      name: "Clubhouse",
      description: "Elegant dining and social spaces for memorable experiences",
      images: [
        "/clubhouse.jpg",
        "/clubhouse2.jpg",
        "/clubhouse3.jpg",
      ],
      features: [
        "Fine dining restaurant",
        "Casual bar & lounge",
        "Private event spaces",
        "Outdoor terraces"
      ],
      highlights: {
        capacity: "200 guests",
        cuisine: "International",
        service: "Full service",
        atmosphere: "Elegant"
      }
    },
    {
      name: "Fitness Center",
      description: "State-of-the-art equipment and wellness facilities",
      images: [
        "/fitness.jpg",
        "/fitness2.jpg",
        "/fitness3.jpg"
      ],
      features: [
        "Modern gym equipment",
        "Personal training",
        "Group fitness classes",
        "Steam room & sauna"
      ],
      highlights: {
        equipment: "Latest tech",
        hours: "24/7 access",
        trainers: "Certified pros",
        classes: "Daily sessions"
      }
    },
    {
      name: "Swimming Pool",
      description: "Olympic-standard pool with family-friendly amenities",
      images: [
        "swimming.jpg",
        "swimming2.jpg",
        "swimming3.jpg"
      ],
      features: [
        "Olympic-size pool",
        "Children's pool",
        "Poolside bar",
        "Swimming lessons"
      ],
      highlights: {
        length: "50 meters",
        depth: "2-4 meters",
        temperature: "Heated",
        safety: "Lifeguard on duty"
      }
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === categories[activeCategory].images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? categories[activeCategory].images.length - 1 : prev - 1
    )
  }

  const handleCategoryChange = (index:number) => {
    setActiveCategory(index)
    setCurrentImageIndex(0)
  }

  const currentCategory = categories[activeCategory]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Club Facilities
          </h1>
          <p className="text-gray-600 text-center mt-2 text-lg">
            Discover our world-class amenities and facilities
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-emerald-50 hover:border-emerald-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image Gallery */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-96 lg:h-[500px]">
              <img
                src={currentCategory.images[currentImageIndex]}
                alt={`${currentCategory.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {currentCategory.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Title and Description */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentCategory.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Star className="mr-3" size={24} />
                Key Highlights
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentCategory.highlights).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold mb-1">{value}</div>
                    <div className="text-sm opacity-90 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="mr-3 text-emerald-600" size={24} />
                Features & Amenities
              </h3>
              <div className="grid gap-4">
                {currentCategory.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact/Booking */}
            <div className="bg-gray-50 rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience {currentCategory.name}?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to learn more or book your visit today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                  <Clock className="mr-2" size={20} />
                  Book Now
                </button>
                <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                  <MapPin className="mr-2" size={20} />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facilities