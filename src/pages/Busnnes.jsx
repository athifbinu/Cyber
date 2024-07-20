import React from "react";
import img1 from "../assets/image/dataimg1.png";
import img2 from "../assets/image/dataimg2.png";
import test from "../assets/image/profile.png";
const Busnnes = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items-center justify-items-center lg:gap-36">
        <div className="text-white">
          <div className="mb-7">
            <div className="flex items-center gap-5 mb-4">
              <h3 className="text-xl font-bold">Experience</h3>
              <img className="w-7" src={test} alt="" />
            </div>
            <div className="w-56">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto, ipsam dolores officia facilis corporis autem
                inci
              </p>
            </div>
          </div>

          <div className="mb-7">
            <div className="flex items-center gap-5 mb-4">
              <h3 className="text-xl font-bold">Experience</h3>
              <img className="w-7" src={test} alt="" />
            </div>
            <div className="w-56">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto, ipsam dolores officia facilis corporis autem
                inci
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-5 mb-4">
              <h3 className="text-xl font-bold">Experience</h3>
              <img className="w-7" src={test} alt="" />
            </div>
            <div className="w-56">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto, ipsam dolores officia facilis corporis autem
                inci
              </p>
            </div>
          </div>
        </div>

        <div>
          <img className="" src={img2} alt="" />

          <img className="hidden   lg:flex " src={img1} alt="" />
        </div>

        <div className="grid md:justify-end text-white">
          <div className="mb-7">
            <div className="flex items-center gap-5 mb-4">
              <h3 className="text-xl font-bold">Experience</h3>
              <img className="w-7" src={test} alt="" />
            </div>
            <div className="w-56">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto, ipsam dolores officia facilis corporis autem
                inci
              </p>
            </div>
          </div>

          <div className="mb-7">
            <div className="flex items-center gap-5 mb-4">
              <h3 className="text-xl font-bold">Experience</h3>
              <img className="w-7" src={test} alt="" />
            </div>
            <div className="w-56">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto, ipsam dolores officia facilis corporis autem
                inci
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-5 mb-4">
              <h3 className="text-xl font-bold">Experience</h3>
              <img className="w-7" src={test} alt="" />
            </div>
            <div className="w-56">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium iusto, ipsam dolores officia facilis corporis autem
                inci
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Busnnes;
