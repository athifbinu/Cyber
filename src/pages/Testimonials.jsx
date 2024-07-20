import React from "react";
import img1 from "../assets/image/testimoni.png";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center  ">
          <div className="">
            <div className="flex gap-6 mb-6">
              <h3 className="text-white">What Customer says</h3>

              <div class="relative inline-flex">
                <div class="w-5 h-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full"></div>
                <div class="w-5 h-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div class="w-5 h-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
              </div>
            </div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-white">
                What They Say About Us.
              </h1>
            </div>

            <div>
              <div className="mb-10">
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid perspiciatis impedit tenetur aperiam, natus iusto
                  accusantium perf
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-5xl text-white">
                  <FaQuoteLeft />
                </div>
                <div>
                  <h2 className="text-white">Athif binu</h2>
                  <p className="text-gray-400">Web developer</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
