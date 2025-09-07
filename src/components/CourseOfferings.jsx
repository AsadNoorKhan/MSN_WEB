// src/components/CourseOfferings.jsx
import { Button } from "@/components/ui/button"
import { FiArrowRight } from "react-icons/fi"
import CourseCard from "./CourseCard"
import { useNavigate } from 'react-router-dom';

export default function  CourseOfferings({FI=false, limit}) {
  const navigate =useNavigate();
  const courses = [
    {
      image: "/course-banner.png",
      title: "FrontEnd Web dev",
      certificate: "Professional Certificate",
      rating: 4.5,
      reviews: "17.2k",
      price: 40.2,
      demo: "https://youtu.be/JnWlsM5L9u4?si=3rqXeApHffcrtIEk",
    },
    {
      image: "/course-banner.png",
      title: "MERN Stack Development",
      certificate: "Professional Certificate",
      rating: 4.5,
      reviews: "7.2k",
      price: 40.2,
      demo: "https://youtu.be/nnKKjEyjTUk?si=oLwXn6orm8FYTjBh",
    },
    {
      image: "/course-banner.png",
      title: "GEN AI and ChatBot",
      certificate: "Professional Certificate",
      rating: 4.5,
      reviews: "17.2k",
      price: 40.2,
      demo: "https://youtu.be/KLGIcMBn45A?si=-NfU81tiXfKnffXP",
    },
    {
      image: "/course-banner.png",
      title: "Digital Marketing with AI tools",
      certificate: "Professional Certificate",
      rating: 4.5,
      reviews: "17.2k",
      price: 40.2,
      demo: "https://youtu.be/sCBMvTJDEJo?si=NuAJxzQthQJnz1E9",
    },
    {
      image: "/course-banner.png",
      title: "Data Analytics",
      certificate: "Professional Certificate",
      rating: 4.5,
      reviews: "17.2k",
      price: 40.2,
      demo: "https://youtu.be/zK_ZyOw0prs?si=0ktuPJGu02xSK6nA",
    },
  ];
   const handleNavigate = () => {
    navigate('/Courses');
    window.scrollTo(0, 0); // Scroll to top
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Heading */}
        <div className="flex flex-col items-center space-y-4 text-center ">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Explore Our Comprehensive Course Offerings
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At MSN Academy, we provide a diverse range of courses designed to
              equip you with the skills needed for success in the digital world.
              Whether you're a beginner or looking to enhance your expertise, we
              have something for everyone.
            </p>
          </div>
        </div>

        {/* Course cards */}
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12 ">
          {(limit ? courses.slice(0, limit) : courses).map((c, idx) => (
            <CourseCard
              key={idx}
              image={c.image}
              title={c.title}
              certificate={c.certificate}
              rating={c.rating}
              reviews={c.reviews}
              price={c.price}
              demo={c.demo}
            />
          ))}
        </div>

        {/* CTA button */}
        {FI&&(<div className="flex justify-center">
          <Button variant="link" className="text-blue-600 hover:text-blue-800" onClick={handleNavigate}>
            View More <FiArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        )}
      </div>
    </section>
  )
}
