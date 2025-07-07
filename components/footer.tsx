'use client'
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        {/* Top wave divider */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-green-500 to-blue-500 transform -skew-y-1"></div>
        
        <div className="container mx-auto px-6 pt-20 pb-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Thika Sports Club
                  </h3>
                  <p className="text-gray-400 text-sm">Excellence in Sports</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Experience world-class sports facilities where champions are made. Join our community of athletes and sports enthusiasts.
              </p>
              <div className="flex space-x-4">
                <SocialIcon Icon={Facebook} href="#" />
                <SocialIcon Icon={Twitter} href="#" />
                <SocialIcon Icon={Instagram} href="#" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-green-400 mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <ContactItem 
                  Icon={Phone} 
                  label="Call Us" 
                  value="0722 697751"
                  href="tel:0722697751"
                />
                <ContactItem 
                  Icon={Mail} 
                  label="Email" 
                  value="info@thikasportsclub.co.ke"
                  href="mailto:info@thikasportsclub.co.ke"
                />
                <ContactItem 
                  Icon={MapPin} 
                  label="Location" 
                  value="Thika, Kenya"
                  href="#"
                />
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-blue-400 mb-6">Stay Updated</h4>
              <p className="text-gray-300">
                Subscribe to our newsletter for latest updates and exclusive offers.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center mb-8">
            <button 
              onClick={scrollToTop}
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3 font-semibold"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
              <span>BACK TO HOME</span>
            </button>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                Copyright © 2025 - Web by <span className="text-green-400 font-semibold">GallexiaKenya LTD</span>
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Terms & Conditions
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }:{
    Icon:any, href:string
}) => (
  <a 
    href={href}
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm group"
  >
    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
  </a>
);

const ContactItem = ({ Icon, label, value, href }:{
    Icon:any, label:string, value:any, href:string
}) => (
  <a 
    href={href}
    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
  >
    <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
      <Icon className="w-5 h-5 text-green-400 group-hover:text-green-300" />
    </div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-white font-medium group-hover:text-green-400 transition-colors duration-300">
        {value}
      </p>
    </div>
  </a>
);
