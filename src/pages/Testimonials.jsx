import Feedbacks from "../components/Feedbacks"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"

const Testimonials = () => {
  return (
    <div>
        <Navbar />
        <div className="mt-10">
        <Feedbacks />
        </div>
        <Footer />
    </div>
  )
}

export default Testimonials