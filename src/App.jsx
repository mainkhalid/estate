import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Projects"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>

    
    </div>
  )
}

export default App