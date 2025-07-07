'use client'
import { useState } from 'react'
import { Calendar, Clock, Users, MapPin, Phone, Globe, ChevronRight, Star } from 'lucide-react'

export const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  type EventType = "Social Event" | "Tournament" | "Competition" | "Open Play" | "Social";

  interface UpcomingEvent {
    id: number;
    title: string;
    date: string;
    time: string;
    type: EventType;
    description: string;
    capacity: string;
    image: string;
    status: string;
    highlights: string[];
  }

  interface WeeklyScheduleItem {
    day: string;
    event: string;
    time: string;
    type: EventType;
  }

  const upcomingEvents: UpcomingEvent[] = [
    {
      id: 1,
      title: "Captain's Club Nite",
      date: "July 2, 2025",
      time: "6:00 PM",
      type: "Social Event",
      description: "Join us for an evening of networking, entertainment, and fine dining with fellow members.",
      capacity: "150 members",
      image: "/api/placeholder/400/300",
      status: "Open for Booking",
      highlights: ["Live Entertainment", "Gourmet Dinner", "Networking"]
    },
    {
      id: 2,
      title: "Weekly Schedule - Monday Blues",
      date: "July 7, 2025",
      time: "2:00 PM",
      type: "Tournament",
      description: "Weekly golf tournament for all skill levels. Beat those Monday blues with a great game!",
      capacity: "32 players",
      image: "/api/placeholder/400/300",
      status: "Open for Booking",
      highlights: ["All Skill Levels", "Prizes", "Refreshments"]
    },
    {
      id: 3,
      title: "4 Clubs Challenge Match",
      date: "July 5, 2025",
      time: "7:00 AM",
      type: "Competition",
      description: "Test your skills with only 4 clubs! A unique challenge for experienced golfers.",
      capacity: "20 players",
      image: "/api/placeholder/400/300",
      status: "Limited Spots",
      highlights: ["Skill Challenge", "Trophy Awards", "Breakfast Included"]
    },
    {
      id: 4,
      title: "Friday Mini Masters",
      date: "July 4, 2025",
      time: "3:00 PM",
      type: "Tournament",
      description: "Weekly Friday tournament with a competitive format and great prizes.",
      capacity: "40 players",
      image: "/api/placeholder/400/300",
      status: "Open for Booking",
      highlights: ["Competitive Format", "Great Prizes", "Post-Game Social"]
    }
  ]

  const weeklySchedule: WeeklyScheduleItem[] = [
    { day: "Monday", event: "Monday Blues", time: "2:00 PM", type: "Tournament" },
    { day: "Tuesday", event: "Course Open", time: "All Day", type: "Open Play" },
    { day: "Wednesday", event: "Club Nite", time: "6:00 PM", type: "Social" },
    { day: "Thursday", event: "Course Open", time: "All Day", type: "Open Play" },
    { day: "Friday", event: "Friday Mini Masters", time: "3:00 PM", type: "Tournament" },
    { day: "Saturday", event: "Ladies Medal", time: "9:00 AM", type: "Tournament" },
    { day: "Sunday", event: "Sunday Minimaster", time: "8:00 AM", type: "Tournament" }
  ]

  const eventTypes: Record<EventType, string> = {
    "Social Event": "bg-purple-100 text-purple-800",
    "Tournament": "bg-green-100 text-green-800",
    "Competition": "bg-blue-100 text-blue-800",
    "Open Play": "bg-gray-100 text-gray-800",
    "Social": "bg-pink-100 text-pink-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting tournaments, social events, and weekly activities. 
            Experience the best of golf and community at Thika Sports Club.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'weekly'
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              Weekly Schedule
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${eventTypes[event.type]}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center text-sm text-gray-800">
                      <Calendar className="mr-1" size={16} />
                      {event.date}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-2" size={16} />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="mr-2" size={16} />
                      <span className="text-sm">{event.capacity}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, index) => (
                        <span key={index} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${
                      event.status === 'Open for Booking' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {event.status}
                    </span>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center">
                      Book Now
                      <ChevronRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Weekly Schedule */}
        {activeTab === 'weekly' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Weekly Schedule
              </h2>
              <div className="space-y-4">
                {weeklySchedule.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 font-bold text-gray-900">{item.day}</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.event}</div>
                        <div className="text-sm text-gray-600">{item.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${eventTypes[item.type]}`}>
                        {item.type}
                      </span>
                      <button className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Events?</h2>
          <p className="text-xl mb-6 opacity-90">
            Book your spot today or contact us for more information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
              <Phone className="mr-2" size={20} />
              0722 697 751
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
              <Globe className="mr-2" size={20} />
              Visit HowDidIDo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

