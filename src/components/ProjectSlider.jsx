
import React, { useState } from 'react'
import { projectsData, assets } from '../assets/assets';

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  
  React.useEffect(() => {
    const updateCardsToShow = () => {
      
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // For large screens, show 3 cards
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2); // For medium screens, show 2 cards
      } else {
        setCardsToShow(1); // For small screens, show 1 card
      }
    };
    window.addEventListener('resize', updateCardsToShow);
    updateCardsToShow(); // Call initially
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
  };

  return (
    <div className="overflow-hidden py-6 px-4 bg-gray-50">
      {/* slider-buttons */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='previous'>
          <img src={assets.left_arrow} alt="previous" />
        </button>
        <button onClick={nextProject} className="p-3 bg-gray-200 rounded ml-2" aria-label="next">
          <img src={assets.right_arrow} alt="next" />
        </button>
      </div>

      {/* slider Content */}
      <div className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
        }}
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 sm:w-1/4 w-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto mb-8 rounded-lg shadow-lg object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-5 flex justify-center items-end">
              <div className="inline-block bg-white w-5/6 px-6 py-4 rounded-lg shadow-xl transform -translate-y-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm">
                  {project.price && <span className="font-medium mr-1 text-teal-500">${project.price}</span>}
                  <span>{project.location}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
