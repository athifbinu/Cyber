import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import service1 from "../assets/image/service-1.png";
import service2 from "../assets/image/service-2.png";
import service3 from "../assets/image/service-3.png";

const Service = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const cardRefs = useRef([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      title: "Website security ",
      description:
        "Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service1,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Penetration testing",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security  ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security ",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
    {
      title: "Website security",
      description:
        "Ruis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.",
      img: service2,
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRefs.current.every((ref) => ref && !ref.contains(event.target))) {
        setSelectedIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-10 container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-16 text-white text-center ">
        Our Services
      </h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-4">
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white/20 backdrop-blur-md rounded-lg shadow-lg text-white p-6 border-2 transition-colors duration-300  ${
                selectedIndex === index
                  ? "  border-indigo-500"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-auto animate-bounce"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Read more
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Service;
