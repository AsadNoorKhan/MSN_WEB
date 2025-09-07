import React from 'react'
import { Link } from 'react-router-dom'

export default function HeadHero({ h, p, img, b1, b2 ,b1Link="",b2Link=""}) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-black/70 h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={img}
          alt="Team"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 flex flex-col justify-center h-full py-12 sm:py-16 lg:py-24 px-4 sm:px-5 text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{h}</h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base">
            {p}
          </p>
          
          {/* Buttons - only show if text is provided */}
          {(b1 || b2) && (
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {b1 && (
                <button 
                onClick={() => window.open(b1Link, '_blank')}
                className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 rounded text-white font-medium transition-colors text-sm sm:text-base">
                  {b1}
                </button>
              )}
              {b2 && (
                <Link to={b2Link}>
                <button 
                className="bg-transparent border border-white hover:bg-white hover:text-black px-4 sm:px-6 py-2 rounded text-white font-medium transition-colors text-sm sm:text-base">
                  {b2}
                </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}