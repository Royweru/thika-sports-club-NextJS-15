import { useState } from 'react'
import { Check, Star, Users, Crown, Heart, Phone, Mail, MapPin, ChevronRight, Calendar, Gift } from 'lucide-react'

const Membership = () => {
  const [activeTab, setActiveTab] = useState('plans')

  const membershipPlans = [
    {
      id: 1,
      name: "Family",
      description: "Perfect for families who want to enjoy club activities together",
      price: "KSh 150,000",
      period: "Annual",
      image: "/memberpackage2.jpg",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      features: [
        "Access for 2 adults + 2 children under 18",
        "Full golf course access",
        "Clubhouse dining privileges",
        "Swimming pool access",
        "Fitness center access",
        "Tennis court booking",
        "Priority event booking",
        "Family-friendly events",
        "Children's golf lessons",
        "Parking privileges"
      ],
      highlights: [
        "Great Value for Families",
        "Children's Activities",
        "Family Events"
      ]
    },
    {
      id: 2,
      name: "Single Parent",
      description: "Designed for single parents who want quality time with their children",
      price: "KSh 100,000",
      period: "Annual",
      image: "/memberpackage.jpg",
      icon: Heart,
      color: "from-emerald-500 to-emerald-600",
      features: [
        "Access for 1 adult + 2 children under 18",
        "Full golf course access",
        "Clubhouse dining privileges",
        "Swimming pool access",
        "Fitness center access",
        "Tennis court booking",
        "Priority event booking",
        "Single parent support events",
        "Children's activities",
        "Parking privileges"
      ],
      highlights: [
        "Supportive Community",
        "Affordable Option",
        "Family-Focused"
      ]
    },
    {
      id: 3,
      name: "Single",
      description: "Individual membership for personal enjoyment and networking",
      price: "KSh 75,000",
      period: "Annual",
      image: "/memberpackage3.jpg",
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      features: [
        "Individual access only",
        "Full golf course access",
        "Clubhouse dining privileges",
        "Swimming pool access",
        "Fitness center access",
        "Tennis court booking",
        "Priority event booking",
        "Networking events",
        "Personal training sessions",
        "Parking privileges"
      ],
      highlights: [
        "Personal Excellence",
        "Networking Focus",
        "Individual Attention"
      ]
    }
  ]

  const memberBenefits = [
    {
      icon: Star,
      title: "Exclusive Access",
      description: "Enjoy privileged access to all club facilities and premium services"
    },
    {
      icon: Calendar,
      title: "Priority Booking",
      description: "Get first preference for tee times, events, and facility reservations"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with like-minded individuals and build lasting relationships"
    },
    {
      icon: Gift,
      title: "Special Events",
      description: "Attend exclusive member-only events and tournaments"
    }
  ]

  const testimonials = [
    {
      name: "John Kimani",
      membership: "Family",
      text: "The family membership has been incredible. My kids learned golf here, and we've made lifelong friends. The facilities are world-class.",
      rating: 5
    },
    {
      name: "Sarah Wanjiku",
      membership: "Single Parent",
      text: "As a single parent, I appreciate the supportive community here. The staff are amazing with children, and I can relax knowing my kids are safe and happy.",
      rating: 5
    },
    {
      name: "Michael Ochieng",
      membership: "Single",
      text: "The networking opportunities here are unmatched. I've built valuable business relationships while enjoying my passion for golf.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50" id='membership'>
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/membership.jpg')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Join As a Member</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Experience the finest in golf, dining, and recreation with our exclusive membership options
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'plans'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Membership Plans
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'benefits'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Member Benefits
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Testimonials
            </button>
          </div>
        </div>

        {/* Membership Plans */}
        {activeTab === 'plans' && (
          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div key={plan.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${plan.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <plan.icon size={48} className="mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-sm text-gray-600">{plan.period}</div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {plan.highlights.map((highlight, index) => (
                        <span key={index} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="text-emerald-600 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5`}>
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Member Benefits */}
        {activeTab === 'benefits' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Member Benefits</h2>
              <p className="text-xl text-gray-600">
                Discover the exclusive advantages of being a Thika Sports Club member
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-emerald-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
              <p className="text-xl text-gray-600">
                Hear from our satisfied members about their club experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.membership} Member</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl opacity-90">
              Contact us today to learn more about membership options and begin your journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="mb-2" size={24} />
              <h3 className="font-bold mb-1">Call Us</h3>
              <p className="opacity-90">0722 697 751</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="mb-2" size={24} />
              <h3 className="font-bold mb-1">Email Us</h3>
              <p className="opacity-90">info@thikasportsclub.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="mb-2" size={24} />
              <h3 className="font-bold mb-1">Visit Us</h3>
              <p className="opacity-90">Thika Sports Club, Thika</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center mx-auto">
              Apply for Membership
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership