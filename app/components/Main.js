import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Main = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000)
  //   return () => clearTimeout(timer)
  // })

  const item = {
    initial: { opacity: 0, y: 200 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      // initial={{ opacity: 0, y: 200 }}
      // animate={{ opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.8} }}
      // exit={{opacity: 0, y: -200, transition: { ease: 'easeInOut', duration: 0.8 }}}
      className="main flex relative items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center text-center w-full max-w-[1200px] ml-auto mr-auto pt-[85px] pb-[10em] px-[2.5em] -translate-y-6">
        <div className="heading block relative text-[100px] text-center font-[300] tracking-[-6px] leading-[1.3em] z-1 mb-[16px] ">
          <h1   className="">
            Simplex® empowers global
          </h1>
          <h1 variants={item}>brands with a distinct</h1>
          <h1 variants={item}>competitive advantage.</h1>
        </div>
        <div className="block subheading text-[24px] font-[200] leading-[1.43em] mr-[10px] mb-[19px] ">
          Elevating brands through visionary design and captivating
        </div>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="bg-black text-white rounded-[100px] py-[17px] px-[40px] text-[16px] font-normal mt-[60px] hover:bg-[#eee] hover:text-black  "
        >
          Our Projects
        </Link>
      </div>
    </motion.div>
  );
};

export default Main;
