import Header_Full from '@/components/Header_Full'
import React from 'react'
import HeroSection from '@/components/HeroSection'
import HeroT from "@/components/HeroT"
import MTeam_Sec from '@/components/MTeam_Sec'
import { FiArrowRight } from "react-icons/fi"
import CourseOfferings from '@/components/CourseOfferings'
import heroImage from "@/assets/Placeholder_Image.png";
import HeadHero from '@/components/HeadHero'
import foot from "@/assets/HomeFoot.png"
import hslImage from "@/assets/HSL.png"

export default function Home() {
  return (
    <div>
      <Header_Full title="Empowering Pakistan's Freelancers & Developers"
        subtitle="Join our academy today and unlock premium learning tools, expert mentorship, and hands-on projects to put your new skills into action" />

      <HeroSection t1="Empower Your Future" t2="with MSN Academy"
        p1="    MSN Academy strives to be a leading nation-building institution,
            equipping individuals with in-demand tech skills, an innovative
            mindset, and the drive to shape Pakistan's future and beyond. We
            deliver high-quality, affordable education that bridges the gap
            between academia and industry, producing job-ready professionals
            through hands-on learning, expert mentorship, and real-world
            projects.
          "
        p2="Guided by our core values of integrity and transparency, innovation
            and excellence, student-centric growth, diversity and inclusion, and
            empowerment through knowledge, we are committed to developing
            skilled, confident, and future-ready leaders." img={heroImage}/>

      {/* Course Offerings Section */}
        <CourseOfferings FI={true} limit={3} />
      {/* End Course Offerings Section */}

      <HeroT />

      {/* ---- Stand Out in Learning Section ---- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Stand Out in Learning</h2>
          <p className="text-gray-600 text-sm sm:text-base">Discover the Future of Digital Skills Training</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* First Box */}
          <div className="bg-gray-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition">
            <p className="text-xs sm:text-sm font-medium mb-2">Unique</p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Why Choose MSN Academy?</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Personal mentorship sets us apart from competitors.</p>
            <button className="flex items-center text-xs sm:text-sm font-medium hover:text-blue-600">
              Learn <FiArrowRight className="ml-1" />
            </button>
          </div>

          {/* Second Box */}
          <div className="bg-gray-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium mb-2">Innovative</p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Competitive Edge</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Hands-on projects enhance real-world skills.</p>
              <button className="flex items-center text-xs sm:text-sm font-medium hover:text-blue-600">
                Enroll <FiArrowRight className="ml-1" />
              </button>
            </div>
            <img
              src={hslImage}
              alt="Students Learning"
              className="rounded-lg mt-4 w-full h-auto"
            />
          </div>

          {/* Third Box */}
          <div className="bg-gray-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition flex items-center justify-between h-16 sm:h-20" >
            <p className="text-xs sm:text-sm font-medium">Start</p>
            <FiArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>
      </section>
      {/* ---- End Section ---- */}
      <MTeam_Sec />

      <HeadHero h="Start Your Learning Journey Today" p="Join our courses to gain practical skills and boost your career in the digital world."
      b1="Enroll" b2="Contact" img={foot} b1Link="https://forms.gle/c82S9HnVPQCKf1vE8" b2Link='/contact'
      />

    </div>
  )
}