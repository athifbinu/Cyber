import React from "react";
import aboutimg1 from "../assets/image/about-image-1-1.jpg";
import aboutimg2 from "../assets/image/about-image-2-1.jpg";
import aboutimg3 from "../assets/image/about-image-3-1.jpg";

import rightimg from "../assets/image/right-circle.png";
import ball from "../assets/image/3d-circle-design-1.png";
import ball2 from "../assets/image/3d-cross-design-1.png";

const About = () => {
  return (
    <div className="bg-about-background bg-no-repeat bg-cover p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="">
              <img
                src={aboutimg1}
                alt="About Us Image 1"
                className=" shadow-lg rounded-lg"
              />
            </div>
            <div>
              <img className="animate-bounce" src={ball} alt="" />

              <img
                src={aboutimg2}
                alt="About Us Image 2"
                className="rounded-lg shadow-lg mt-20 "
              />
            </div>

            <div>
              <img
                src={aboutimg3}
                alt="About Us Image 3"
                className="rounded-lg shadow-lg "
              />
            </div>

            <img className=" animate-spin" src={ball2} alt="" />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
            <p className="text-white mb-6">
              Duis aute irure dolor in reprehenderit in voluptate esse cillu
              dolore eu fugiat nulla pariatur excepteur sint occaecat cupia at
              non proident, sunt in culpa rui officia deserunt mollit ani mid
              est laborum incididunt aut labore magnam.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <ul className="space-y-2 text-white">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2 ">✓</span> Malware
                    Detection Removal
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span> Content
                    Delivery Network
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span> Security
                    Management
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span> SIEM Threat
                    Detection
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-white">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span> Malware
                    Detection Removal
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span> Content
                    Delivery Network
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span> Security
                    Management
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span> SIEM Threat
                    Detection
                  </li>
                </ul>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
