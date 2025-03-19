import Navbar from '../Navbar/Navbar';
import headerImage from '../../assets/header_img.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div 
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" 
      style={{ backgroundImage: `url(${headerImage})` }} 
      id="header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-4 md:px-12 lg:px-24 text-white">
        <h2 
          className='text-6x1 sm:text-xl md:text-7xl lg:text-6xl inline-block max-w-4xl font-semibold pt-20 opacity-0 translate-y-10 animate-fade-in-down'
        >
            Explore homes that fit your dreams
        </h2>

        <div className="space-x-4 mt-12 flex justify-center">
          <a 
            href="#" 
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-transform duration-200 hover:scale-105"
          >
            Projects
          </a>
          <Link 
            to="/contact" 
            className="bg-blue-800 px-6 py-3 rounded-md hover:bg-blue-700 transition-transform duration-200 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

