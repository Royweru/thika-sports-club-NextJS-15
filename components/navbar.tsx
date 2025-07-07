'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

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
            <Link href="/" className={`font-medium hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Home
            </Link>
            <Link href="/facilities" className={`font-medium hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Facilities
            </Link>
            <Link href="/golf" className={`font-medium hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Golf
            </Link>
            <Link href="/events" className={`font-medium hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Events
            </Link>
            <Link href="/resource-center" className={`font-medium hover:text-emerald-600 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Resource Center
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/membership" className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl">
              Membership
            </Link>
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
              <Link href="/facilities" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Facilities
              </Link>
              <Link href="/golf" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Golf
              </Link>
              <Link href="/events" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Events
              </Link>
              <Link href="/resource-center" className="block text-gray-900 font-semibold hover:text-emerald-600 transition-colors">
                Resource Center
              </Link>
              <div className="pt-4 border-t">
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