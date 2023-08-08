import React from "react";
import { Link } from "react-scroll";


const Main = () => {
  return (
    <div className="main flex relative items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-[1200px] ml-auto mr-auto pt-[6em] pb-[10em] px-[2.5em]">
        <div className="heading block relative text-[100px] text-center font-[300] tracking-[-6px] leading-[1.3em] z-1 mb-[16px] ">
          <h1 >Simplex® empowers global</h1>
          <h1 >brands with a distinct</h1>
          <h1 >competitive advantage.</h1>
        </div>
        <div className="block subheading text-[24px] font-[200] leading-[1.43em] mr-[10px] ">
          Elevating brands through visionary design and captivating
        </div>
        <Link to="projects" spy={true} smooth={true} offset={50} duration={1000}
         className="bg-black text-white rounded-[100px] py-[18px] px-[40px] text-[16px] font-normal mt-[60px] hover:bg-[#eee] hover:text-black  ">
          Our Projects
        </Link>
      </div>
    </div>
  );
};

export default Main;
