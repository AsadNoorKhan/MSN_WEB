import { Card, CardContent } from "@/components/ui/card"
import DM3 from "@/assets/DM3.png"
import DM2 from "@/assets/DM2.png"
import DM1 from "@/assets/DM1.png"


const features = [
  {
    title: "Interactive Learning Modules for Real-World Skills",
    description:
      "Each course includes hands-on projects to reinforce learning.",
    image: DM3, // replace with your image path
  },
  {
    title: "Personal Mentorship to Guide Your Journey",
    description:
      "Our experienced mentors provide personalized guidance throughout your learning experience.",
    image: DM2,
  },
  {
    title: "Join a Community of Aspiring Professionals",
    description:
      "Collaborate with peers and industry experts as you learn and grow.",
    image: DM1,
  },
]

export default function DigitalMasterySection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Discover Your Path to Digital Mastery
        </h2>
        <p className="text-gray-600">
          At MSN Academy, we offer a structured approach to learning that combines
          theoretical knowledge with practical application. Our courses are
          designed to equip you with the skills needed to thrive in the digital
          landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-52 object-cover"
            />
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
