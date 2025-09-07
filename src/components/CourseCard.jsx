import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Award } from "lucide-react"
import {Link} from "react-router-dom"
import Banner from "@/assets/Course_banner.png"

export default function CourseCard({
  image,
  title,
  certificate,
  rating,
  reviews,
  price,
  demo=""
}) {
  return (
    <Card className="w-[300px] rounded-2xl overflow-hidden shadow-md">
      {/* Top image with price */}
      <div className="relative">
        <img
          src={Banner}
          alt={title}
          className="w-full h-[180px] object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-green-100 text-green-600 font-bold text-sm px-2 py-1 rounded-md shadow">
          {price}$
        </Badge>
      </div>

      {/* Content */}
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        
        {/* Certificate */}
        <div className="flex items-center text-sm text-gray-600">
          <Award className="mr-1 text-blue-500 w-4 h-4" />
          <span>{certificate}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center text-sm text-gray-700">
          <Star className="text-blue-600 mr-1 w-4 h-4" />
          <span className="font-medium">{rating}</span>
          <span className="ml-1 text-gray-500">({reviews})</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-3">
          <Link to="/CourseDetails">
          <Button className="flex-1 bg-[#0a1128] text-white hover:bg-[#0d1636] rounded-lg">
            Enroll now
          </Button>
          </Link>
          <Button
            variant="destructive"
            className="flex-1 rounded-lg"
            onClick={() => window.open(demo, '_blank')}
          >
            Watch demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
