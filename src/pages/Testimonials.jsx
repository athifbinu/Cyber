import React from "react";
import img1 from "../assets/image/testimoni.png";
import { FaQuoteLeft } from "react-icons/fa";
import TestimonialsData from "../assets/Data/Testimonils"; // Corrected import

const Testimonials = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center">
        <div className="lg:order-2">
          <img src={img1} alt="Customer Testimonial" />
        </div>
        <div className="lg:order-1">
          <div className="flex gap-6 mb-6">
            <h3 className="text-white">What Customer says</h3>
            <div className="relative inline-flex">
              <div className="w-5 h-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full"></div>
              <div className="w-5 h-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full absolute top-0 left-0 animate-ping"></div>
              <div className="w-5 h-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white">
              What They Say About Us.
            </h1>
          </div>

          {/* Slider */}

          {TestimonialsData.map((item, index) => (
            <div key={index} className="p-4">
              <div className="mb-10">
                <p className="text-gray-400">{item.text}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-5xl text-white">
                  <FaQuoteLeft />
                </div>
                <div>
                  <h2 className="text-white">{item.name}</h2>
                  <p className="text-gray-400">{item.position}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Slider end */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
