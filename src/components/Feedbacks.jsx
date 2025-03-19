import { testimonialsData } from "../assets/assets";

const Feedbacks = () => {
  return (
    <div className="container mx-auto py-10 lg:px-16 w-full overflow-hidden">
      {/* Title */}
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-2 text-indigo-600 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mx-auto max-w-lg mb-8">
        Real stories from those who have had the best experience with us.
      </p>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-[280px] md:w-[280px] lg:w-[300px] border shadow-lg rounded-lg p-6 text-center bg-white"
          >
            {/* Image */}
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-indigo-100 shadow-sm"
              src={testimonial.image}
              alt={testimonial.alt}
            />

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {testimonial.name}
            </h2>

            {/* Title */}
            <p className="text-gray-500 mb-2 text-sm italic">{testimonial.title}</p>

            {/* Rating */}
            <div className="flex justify-center mb-4 text-yellow-500">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <span key={index} className="text-lg">&#9733;</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
