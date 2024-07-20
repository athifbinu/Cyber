import React, { useState, useEffect, useCallback } from "react";
import imgone from "../assets/image/img1.jpg";
import imgtwo from "../assets/image/img2.jpg";
import imgthree from "../assets/image/img3.jpg";
import imgfour from "../assets/image/img3.jpg";
import "../styles/Home.css";
import About from "./About";
import { motion } from "framer-motion";
import Service from "./Service";
import bg1 from "../assets/image/bagr1.png";
import bg2 from "../assets/image/bagr2.png";
import Count from "./Count";
import Journey from "./Journey";
import TestimonialCard from "../container/ui/TestimonialCard";

const images = [imgone, imgtwo, imgthree, imgfour];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState("");

  const nextSlide = useCallback(() => {
    setTransition("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setTransition("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  useEffect(() => {
    const autoNext = setTimeout(nextSlide, 6000);
    return () => clearTimeout(autoNext);
  }, [nextSlide, currentIndex]);

  useEffect(() => {
    if (transition) {
      const timer = setTimeout(() => setTransition(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [transition]);

  return (
    <div>
      <div className={`carousel  mb-16 ${transition}`}>
        <div className="list">
          {images.map((img, index) => (
            <div
              className="item"
              key={index}
              style={{ zIndex: index === currentIndex ? 1 : 0 }}
            >
              <img src={img} alt="" />
              <div className="content">
                <div className="title">CYBER SECURITY</div>
                <div className="topic">CYBER</div>
                <div className="des mb-24">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                  sequi, rem magnam nesciunt minima placeat, itaque eum neque
                  officiis unde, eaque optio ratione aliquid assumenda facere ab
                  et quasi ducimus aut doloribus non numquam. Explicabo,
                  laboriosam nisi reprehenderit tempora at laborum natus unde.
                  Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {images.map((img, index) => (
            <div className="item " key={index}>
              <img className="shadow-2xl" src={img} alt="" />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            -
          </button>
          <button id="next" onClick={nextSlide}>
            +
          </button>
        </div>

        <div className="time"></div>
      </div>

      <div className="container">
        <section>
          <About />
        </section>
      </div>

      <div className="mb-10">
        <div className="absolute ">
          <img className="animate-pulse" src={bg1} alt="" />
        </div>
        <div className="container mx-auto h-full relative">
          <section className="h-full flex items-center">
            <Service />
          </section>
        </div>
      </div>

      {/* <div className="container ">
        <section>
          <Journey />
        </section>
      </div> */}
    </div>
  );
};

export default Home;
