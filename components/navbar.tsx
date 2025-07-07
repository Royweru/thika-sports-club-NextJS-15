'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SignInButton, SignUpButton,SignedOut,SignedIn } from '@clerk/nextjs'
import { UserControl } from './user-control'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Thika Sports Club
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Est. 1922
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`font-semibold hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Home
            </Link>
            <Link href="#about" className={`font-semibold hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              About
            </Link>
            <Link href="#facilities" className={`font-semibold hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Facilities
            </Link>
      
            <Link href="#events" className={`font-semibold hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Events
            </Link>
         
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block space-x-2">
          <SignedOut>
             <Link href="/membership" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
              Membership
            </Link>
            <SignInButton>
                <button className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-teal-500 transition-all shadow-lg relative overflow-hidden">
                <span className="absolute inset-0 bg-white opacity-20 blur-lg animate-pulse pointer-events-none"></span>
                <span className="relative z-10">Login</span>
                </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700 hover:from-indigo-600 hover:to-blue-700 transition-all shadow-lg">
              Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
              <Link href="/membership" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
              Membership
            </Link>
            <UserControl showName />
          </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <nav className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <Link href="#facilities" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Facilities
              </Link>
              <Link href="#golf" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Golf
              </Link>
              <Link href="#events" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Events
              </Link>
            
              <div className="pt-4 border-t">
                  <Link href="/resource-center" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Resource Center
              </Link>
                <Link href="/membership" className="block w-full text-center bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                  Membership
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar