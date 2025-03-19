import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import {assets} from "../../assets/assets"


const Navbar = () => {
  const [showMobileMenu,setShowMobielMenu] = useState(false)

  useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow= 'auto'
    }
  },[showMobileMenu])
  return (
    <div className=' top-0 left-0 w-full z-10 bg-black fixed'>
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
            <Link to='/'><img src={assets.logo} alt="" /></Link>
            <ul className='hidden md:flex gap-7 text-white '>
                <li><Link to ='/' className='cursor-pointer hover:text-gray-400'>Home</Link></li>
                <li><Link to ='/about' className='cursor-pointer hover:text-gray-400'>About</Link></li>
                <li><Link to ='/projects' className='cursor-pointer hover:text-gray-400'>Projects</Link></li>
                <li><Link to ='/testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</Link></li>
            </ul>
            <Link to='/login'>
             <button className="hidden md:inline-flex items-center bg-white px-4 py-1 rounded-full text-blue-600 shadow-md hover:bg-blue-50 transition duration-200">
               Sign Up
             </button>
            </Link>

            <img onClick={() => setShowMobielMenu(true)} src={assets.menu_icon}className="md:hidden w-7 cursor-pointer" alt="" />
        </div>
        {/* --------mobile-menu--- */}
        <div className={`md:hidden ${showMobileMenu ?  'fixed w-full' : 'h-0 w-0'}  right-0 top-0bottom-0 overflow-hidden bg-white transition-all`}>
          <div className="flex justify-end p-6 cursor-pointer">
            <img onClick={() => setShowMobielMenu(false)} src={assets.cross_icon} className="w-4" alt="" />
          </div>
         <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium  ">
          <li onClick={() => setShowMobielMenu(false)}><Link to ='/' className='px-4 py-2 rounded-full inline-block'>Home</Link></li>
          <li onClick={() => setShowMobielMenu(false)}><Link to ='/about' className='px-4 py-2 rounded-full inline-block'>About</Link></li>
          <li onClick={() => setShowMobielMenu(false)}><Link to ='/projects' className='px-4 py-2 rounded-full inline-block'>Projects</Link></li>
          <li onClick={() => setShowMobielMenu(false)}><Link to ='/testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</Link></li>
         </ul>
        </div>

    </div>
  )
}

export default Navbar