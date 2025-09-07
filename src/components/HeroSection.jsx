import React from "react"; 
import { Button } from "./ui/button";
import { PlaneIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = ({t1,t2,p1,p2,b2=false,b1="Learn More",img=PlaneIcon,b1Link=""}) => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6">
           {t1} <br /> {t2}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            {p1}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            {p2}
          </p>
          <div className="flex gap-1">
          <button 
          onClick={() => window.open(b1Link, '_blank')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            {b1}
          </button>
          {b2 && (
                      <div>
                        <Link to="/contact">
                        <Button
                          size="lg"
                          className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg"
                        >
                          Contact 
                        </Button>
                        </Link>
                      </div>
                    )}
                    </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={img}
            alt="Students learning at MSN Academy"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
