import Header_Full from "@/components/Header_Full"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Check, Star } from "lucide-react"

export default function CourseDetails() {
  return (
    <div>
      <Header_Full showHeroButton={false} />
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Data Analyst</h2>
            <p className="text-gray-600 mt-2">
              Join our comprehensive Digital Marketing Course to elevate your skills and career.
            </p>
          </div>

          {/* Includes */}
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">Includes:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              {[
                "Hands-on projects",
                "Expert instructors",
                "Flexible schedule",
                "Certification upon completion",
                "Lifetime access",
                "Community support",
                "Weekly live sessions",
                "Resource materials included",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h3 className="font-semibold text-lg">More information</h3>
            <Separator className="my-3" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="overview">
                <AccordionTrigger>Course Overview</AccordionTrigger>
                <AccordionContent>
                  This course covers essential data analysis techniques, including data cleaning, visualization,
                  and statistical analysis. You’ll gain practical skills through real-world datasets and case studies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="outcomes">
                <AccordionTrigger>Learning Outcomes</AccordionTrigger>
                <AccordionContent>
                  By the end, you’ll be able to create effective campaigns, analyze data to optimize performance,
                  and showcase your skills with a certificate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="audience">
                <AccordionTrigger>Target Audience</AccordionTrigger>
                <AccordionContent>
                  Designed for aspiring marketers, business owners, or anyone looking to enhance digital marketing skills.
                  No prior experience required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="duration">
                <AccordionTrigger>Course Duration</AccordionTrigger>
                <AccordionContent>
                  The course is structured over 8 weeks with flexible learning options. Includes lectures, quizzes, and assignments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fee">
                <AccordionTrigger>Enrollment Fee</AccordionTrigger>
                <AccordionContent>
                  Total fee: PKR 55. Includes all course materials, live sessions, and certification.
                  30-day money-back guarantee available.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="instructor">
                <AccordionTrigger>Instructor Profile</AccordionTrigger>
                <AccordionContent>
                  Lead instructor has over 10 years of experience in digital marketing, helping businesses grow their presence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="testimonials">
                <AccordionTrigger>Student Testimonials</AccordionTrigger>
                <AccordionContent>
                  Past students have successfully transitioned into marketing roles, praising the course’s practical skills and support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-lg shadow-md p-4">
            {/* Video Preview */}
            <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zK_ZyOw0prs?si=clmXEPxNVcAcDkU0?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1&start=0&end=10&loop=1`"
                title="Course Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Price */}
            <div className="mt-4">
              <p className="text-lg font-bold">PKR 55</p>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.5 stars</span>
                <span>(35 reviews)</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-3">
              <Button
                onClick={() => window.open('https://forms.gle/c82S9HnVPQCKf1vE8', '_blank')}
                className="w-full">Get started</Button>
              <Button variant="outline"
                onClick={() => window.open('https://youtube.com/playlist?list=PLZbMaGH5VmjXJXvoMK4LHcZGq83pLAM1A&si=4D3rHMrbG0GIlmjc', '_blank')}
                className="w-full">Watch demo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
