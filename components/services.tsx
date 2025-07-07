'use client'

import { GiGolfFlag, GiKnifeFork, GiWeightLiftingUp, GiWaterSplash, GiTennisRacket } from "react-icons/gi";
import { FaArrowRight, FaBed } from "react-icons/fa";

// Icon mapping to replace lucide-react icons
const Golf = (props: any) => <GiGolfFlag {...props} />;
const Utensils = (props: any) => <GiKnifeFork {...props} />;
const Dumbbell = (props: any) => <GiWeightLiftingUp {...props} />;
const Waves = (props: any) => <GiWaterSplash {...props} />;
const Racquet = (props: any) => <GiTennisRacket {...props} />;
const Bed = (props: any) => <FaBed {...props} />;
const ArrowRight = (props: any) => <FaArrowRight {...props} />;

export const Services = () => {
  const services = [
    {
      icon: <Golf className="w-8 h-8" />,
      title: "Championship Golf",
      description: "Experience an 18-hole golf course crafted to immerse you in the sporting culture. Perfect for networking and skill development.",
      features: ["18-hole championship course", "Professional golf lessons", "Tournament hosting", "Equipment rental"],
      color: "emerald"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Fine Dining",
      description: "Savor exceptional cuisine with our specialty pork spare ribs and signature drinks in an elegant atmosphere.",
      features: ["Gourmet cuisine", "Signature cocktails", "Private dining", "Event catering"],
      color: "amber"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness & Wellness",
      description: "State-of-the-art facilities with personal training, steam baths, and sauna for complete wellness transformation.",
      features: ["Modern gym equipment", "Personal training", "Steam & sauna", "Wellness programs"],
      color: "blue"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Swimming Pool",
      description: "Immerse yourself in our refreshing swimming pool perfect for fitness, relaxation, and family fun.",
      features: ["Olympic-size pool", "Swimming lessons", "Aqua fitness", "Pool events"],
      color: "cyan"
    },
    {
      icon: <Racquet className="w-8 h-8" />,
      title: "Sports Facilities",
      description: "Exceptional sports facilities for tennis, squash, and other recreational activities to showcase your athletic skills.",
      features: ["Tennis courts", "Squash courts", "Sports coaching", "Equipment provided"],
      color: "orange"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Accommodation",
      description: "Luxury rooms and spa facilities offering the perfect getaway with modern amenities and ultimate comfort.",
      features: ["Luxury rooms", "Spa services", "Room service", "Event hosting"],
      color: "purple"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Home Away From
            <span className="text-emerald-600"> Home</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embrace your sporty side or connect with fellow enthusiasts. Whether it's playing on an 
            18-hole golf course or boosting your fitness in a well-equipped gym, there's something 
            for every athletic interest.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200">
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-${service.color}-600`}>
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="group/btn w-full bg-gray-50 hover:bg-emerald-50 text-gray-900 hover:text-emerald-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join our exclusive community and discover why Thika Sports Club has been the premier 
              destination for sports and leisure for over a century.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
                Book a Tour
              </button>
              <button className="bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-900 transition-colors">
                View Membership Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

