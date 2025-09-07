import React from "react"
import Nav from "./Nav"
import { Button } from "@/components/ui/button"
import banner from "@/assets/Header_background22.png"
import logo from "@/assets/logo.png"
import { Link } from "react-router-dom"

export default function Header_Full({ title, subtitle, showHeroButton= true }) {
  return (
    <header
      className="relative w-full  bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top Nav */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-2 px-1 py-2 flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center text-white gap-4 lg:gap-10">
            <Link to="/">
            <img src={logo} alt="MSN ACADEMY" className="hover:cursor-pointer h-8 lg:h-10"/>
            </Link>
            <Nav />
          </div>

          {/* Right: Buttons */}
          <div className="flex gap-2 lg:gap-3">
            <Button
              variant="outline"
              className="border-white text-Black hover:bg-white/10 px-3 lg:px-5 text-sm lg:text-base"
            >
              <span className="hidden sm:inline">Learn More</span>
              <span className="sm:hidden">Learn</span>
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-3 lg:px-5 text-sm lg:text-base"
              onClick={() => window.open('https://forms.gle/c82S9HnVPQCKf1vE8', '_blank')}
            >
              <span className="hidden sm:inline">Join Now</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-grow items-center px-4 sm:px-6">
        <div className="max-w-2xl text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200">
            {subtitle}
          </p>
          {showHeroButton && (
            <div className="mt-4 mb-6">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg"
                onClick={() => window.open('https://forms.gle/c82S9HnVPQCKf1vE8', '_blank')}
              >
                Join now
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
