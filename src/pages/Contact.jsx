import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header_Full from "@/components/Header_Full";
import HeadHero from "@/components/HeadHero";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header (You already have Header_Full) */}
      <Header_Full showHeroButton={false} />

      {/* Hero Section */}
      <HeadHero h="Connect With Us" p="Explore how to connect with us for support, collaborations, or any inquiries. 
            We’re here to help you grow!" img={"src/assets/Contactbg.png"}/>

      {/* Contact Section */}
      <div className="container mx-auto grid gap-8 sm:gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2">
        {/* Contact Form */}
        <Card className="shadow-xl">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Us</h2>
            <p className="mb-6 text-gray-600 text-sm sm:text-base">We'd love to hear from you!</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-black focus:outline-none text-sm sm:text-base"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-black focus:outline-none text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-black focus:outline-none text-sm sm:text-base"
                  placeholder="Type your message..."
                />
              </div>
              <Button type="submit" className="w-full text-sm sm:text-base">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info + Image */}
        <div className="flex flex-col justify-between space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0" />
              <p className="text-sm sm:text-lg break-all">+92 324 8290873</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0" />
              <p className="text-sm sm:text-lg break-all">msn.academy29@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-black flex-shrink-0" />
              <p className="text-sm sm:text-lg">Karachi, Sindh</p>
            </div>
          </div>

          <img
            src="src/assets/Contact2.png"
            alt="Contact Illustration"
            className="w-full max-w-sm sm:max-w-md self-center"
          />
        </div>
      </div>
    </div>
  );
}
