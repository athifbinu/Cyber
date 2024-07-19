import React from "react";

import profile from "../../assets/image/profile.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonials from "../../assets/Data/Testimonils";

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <span>
      <FaLongArrowAltRight />
    </span>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <span>
      <FaLongArrowAltLeft />
    </span>
  </div>
);

const TestimonialCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-7  rounded-lg  max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              <img
                className="w-40 h-40 rounded-full object-cover"
                src={testimonial.image}
                alt="Profile"
              />
            </div>
            <div className="text-center mb-4">
              <p className="text-lg italic">"{testimonial.text}"</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">{testimonial.date}</p>
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialCard;
