import Footer from "../components/Footer"
import Navbar from "../components/Navbar/Navbar"
import ProjectSection from "../components/ProjectSection"
import ProjectSlider from "../components/ProjectSlider"

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="px-10 mt-12">
      <ProjectSection />
      <ProjectSlider />
      </div>
      <Footer/>
    </div>
  )
}

export default Projects