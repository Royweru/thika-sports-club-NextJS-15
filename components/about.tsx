'use client'
import { Award, Users, Calendar, Trophy } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "1922",
      label: "Established",
      description: "Over a century of excellence"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "2,500+",
      label: "Members",
      description: "Diverse community of enthusiasts"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "18",
      label: "Hole Course",
      description: "Championship standard"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100+",
      label: "Awards",
      description: "Recognition for excellence"
    }
  ]

  return (
    <section className="py-24 bg-gray-50" id='about'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-600 rounded-full text-sm font-medium">
                Our Legacy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Century of 
              <span className="text-emerald-600"> Excellence</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Established in 1922, Thika Sports Club has stood as a beacon of elegance and 
              camaraderie for nearly a century. What began as a social haven for colonial 
              European farm owners has evolved into a distinguished institution beloved by 
              a diverse community of sports enthusiasts.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Heritage & Tradition</h3>
                  <p className="text-gray-600">Rich history spanning over 100 years of sporting excellence and community building.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusive Community</h3>
                  <p className="text-gray-600">A welcoming environment that brings together sports enthusiasts from all walks of life.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">World-Class Standards</h3>
                  <p className="text-gray-600">Maintaining the highest standards in facilities, service, and sporting excellence.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
                Explore Our Story
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-emerald-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm font-semibold text-gray-600 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-gray-600 italic">
                    "Where sporting excellence meets timeless elegance, creating memories that last a lifetime."
                  </p>
                  <div className="mt-4">
                    <div className="text-sm font-semibold text-gray-900">Club Motto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About