'use client'
import { useState, useEffect } from 'react'

import { Play, Phone, Mail, ChevronRightIcon } from 'lucide-react'
import VideoModal from './modals/video-modal'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
 
  const slides = [
    {
      image: "/hero.jpeg",
      title: "Where Excellence Meets Tradition",
      subtitle: "A Century of Sporting Heritage",
      description: "Experience the finest in golf, fitness, and leisure at Kenya's most prestigious sports club since 1922."
    },
    {
      image: "/hero4.jpg",
      title: "Championship Golf Course",
      subtitle: "18 Holes of Pure Excellence",
      description: "Play on our meticulously maintained championship course, designed to challenge and inspire golfers of all levels."
    },
    {
      image: "/hero3.jpg",
      title: "World-Class Facilities",
      subtitle: "Luxury Redefined",
      description: "From our state-of-the-art fitness center to our elegant dining facilities, every detail crafted for your comfort."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }
  return (
    <>
     {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoUrl="/videos/golftour.mp4"
        title="Thika Sports Club Virtual Tour"
        description="Discover the elegance and excellence that defines our century-old legacy"
      />

      <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center" id='hero'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium backdrop-blur-sm">
                {slides[currentSlide].subtitle}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
              className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold
               hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex 
               items-center justify-center space-x-2"
               onClick={()=>window.location.href='/membership'}
               >
                <span>Explore Membership</span>
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              
              <button className="group bg-white/10 text-white px-8 py-4 rounded-full
               font-semibold hover:bg-white/20 transition-all duration-300
                backdrop-blur-sm flex items-center justify-center space-x-2 hover:cursor-pointer"
                onClick={openVideoModal}
                >
                <Play className="w-5 h-5" />
                <span>Watch Tour</span>
              </button>
            </div>

            {/* Quick Contact */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>0722 697751</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@thikasportsclub.co.ke</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-emerald-600 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-px h-12 bg-white/50">
            <div className="w-px h-6 bg-emerald-600 animate-pulse"></div>
          </div>
        </div>
      </div>

      
    </section>
    </>
  
  )
}

export default Hero