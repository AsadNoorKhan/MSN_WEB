import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Certificates from "./pages/Certificates"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CourseDetails" element={<CourseDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
