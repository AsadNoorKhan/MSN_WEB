import React from "react";
import heroImage from "@/assets/Lead.png"; 

const HeroT = ({ 
  name = "Muhammad Suleman",
  title = "Visionary Leader of MSN Academy", 
  description = "Muhammad Suleman, Founder & CEO of MSN Academy, leverages his expertise in data analysis and digital technologies to empower freelancers and developers in Pakistan. He has enhanced his skills through a data analytics internship at Systems Limited.",
  visionText = "Empowering youth through practical, job-ready skills.",
  experienceText = "Mentoring in Python, data analysis, and freelancing."
}) => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Main Content Row */}
        <div className="flex gap-8">
          
          {/* Left Content */}
          <div className="flex-1">
            
            {/* Title */}
            <h1 className="text-2xl font-bold text-black mb-6 leading-tight">
              Meet {name}: {title}
            </h1>
            
            {/* Description */}
            <p className="text-sm text-justify text-gray-700 mb-8 leading-relaxed">
              {description}
            </p>
            
            {/* Vision and Experience Grid */}
            <div className="grid grid-cols-2 gap-8">
              
              {/* Vision */}
              <div>
                <h2 className="text-xl font-bold text-black mb-3">
                  Vision
                </h2>
                <p className="text-sm text-justify text-gray-700 leading-relaxed">
                  {visionText}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xl font-bold text-black mb-3 text-justify">
                  Experience
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {experienceText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
              <img
                src={heroImage}
                alt={`${name} profile`}
                className="rounded-lg shadow-lg w-96 object-cover h-80"
              />

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroT;