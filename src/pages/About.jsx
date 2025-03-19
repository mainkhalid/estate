import Navbar from "../components/Navbar/Navbar"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"



const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-10">
      <AboutSection />
      </div>
      <Footer/>
    </div>
  )
}

export default About