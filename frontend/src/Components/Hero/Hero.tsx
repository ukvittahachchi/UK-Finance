import React from "react";
import { Link } from "react-router-dom";
import hero from "./hero.png";
import "./Hero.css";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero" className="flex justify-center">  
    <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row lg:items-center lg:gap- max-w-screen-xl">  
        <div className="flex flex-col space-y-10 lg:m-10 lg:w-65% lg:ml-auto lg:mr-20">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:text-right lg:max-w-md lg:ml-auto">
                    Financial data with no news.
            </h1>
                <p className="text-2xl text-center text-gray-400 lg:text-right lg:max-w-md lg:ml-auto">
                    Search relevant financial documents without fear mongering and fake news.
                </p>
        <div className="mx-auto lg:ml-auto lg:mr-0">
        <Link
          to="/search"
          className="py-5 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70"
        >
          Get Started
        </Link>
      </div>
    </div>

    {/* Right image (unchanged) */}
    <div className="mb-8 mx-auto md:w-120 md:px-4 lg:mb-0 lg:w-1/5">
      <img src={hero} alt="" />
    </div>
  </div>
</section>
  );
};

export default Hero;