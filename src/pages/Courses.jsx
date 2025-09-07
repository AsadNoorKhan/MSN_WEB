import CourseOfferings from '@/components/CourseOfferings'
import DigitalMasterySection from '@/components/DigitalMasterySection'
import Header_Full from '@/components/Header_Full'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import FirstHero from '@/assets/Placeholder_Coures.png'
import SecondHero from '@/assets/Placeholder_C2.png'

export default function Courses() {
  return (
    <div>
        <Header_Full title="Master the Skills to Shape Your Future" 
        subtitle="Explore our diverse courses designed to elevate your digital skills and career opportunities."/>
        
        <CourseOfferings/>
        <DigitalMasterySection/>
        <HeroSection t1="Unlock Your Potential with Personalized Mentorship" p1=" MSN Academy, we believe in the power of personal mentorship and hands-on projects.
         Our experienced mentors guide you through real-world challenges, ensuring you gain practical skills that employers value" img={FirstHero}/>
         <HeroSection t1="Ready to Start Your" t2="Journey ?" p1="Enroll in our courses today and unlock your potential in digital world!" b2={true} b1="Enroll" img={SecondHero} b1Link="https://forms.gle/c82S9HnVPQCKf1vE8"/>
    </div>
  )
}
