import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/courses" className="text-white hover:text-gray-300 transition-colors">Courses</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/certificates" className="text-white hover:text-gray-300 transition-colors">Certificates</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-gray-300 transition-colors p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50" onClick={closeMobileMenu}>
            <div className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={closeMobileMenu}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Close mobile menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="space-y-4">
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                  >
                    Home
                  </Link>
                  <Link
                    to="/courses"
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                  >
                    Courses
                  </Link>
                  <Link
                    to="/certificates"
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                  >
                    Certificates
                  </Link>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2"
                  >
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
