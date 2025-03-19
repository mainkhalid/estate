import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer= () => {
  return (
    <div className='pt-10 px-4 md:px-24 lg:px-32 bg-gray-900 w-full overflow-hidden'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab facere explicabo est, suscipit inventore, natus sunt nulla velit itaque harum labore fuga sint </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg bold'>
                    Company
                </h3>
                <ul className='flex flex-col gap-2 mt-1 text-gray-400 '>
                <li><Link to ='/' className='cursor-pointer hover:text-white'>Home</Link></li>
                <li><Link to ='/about' className='cursor-pointer hover:text-white'>About</Link></li>
                <li><Link to ='/projects' className='cursor-pointer hover:text-white'>Projects</Link></li>
                <li><Link to ='/testimonials' className='cursor-pointer hover:text-white'>Testimonials</Link></li>
            </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold'>
                    Subscribe to our newsletter
                </h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest articles, resources, and industry insights delivered straight to your inbox</p>
                <div className='flex flex-row gap-2'>
                    <input type="email" placeholder="Enter your email" className="w-full md-w-auto p-2 border border-gray-400 rounded focus:outline-none " />
                    <button className='py-2 px-4 rounded bg-blue-500 text-white'>subscribe</button>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer

