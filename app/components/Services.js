import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import adobe from "../assets/adobe.png";
import webflow from "../assets/webflow.svg";
import figma from "../assets/figma.svg";
import Image from "next/image";
import photoshop from "../assets/photoshop.png";
import illustrator from "../assets/illustrator.png";
import diamond from "../assets/diamond.png";

const Services = () => {
  const { scrollYProgress } = useScroll();
  const scrollXLeft = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const scrollXRight = useTransform(scrollYProgress, [0,1], [-600, 0]);

  return (
    <div className="services flex flex-col overflow:hidden ">
      <motion.div className="first-line flex inline-flex whitespace-nowrap max-w-[10000px] algin-middle" style={{ x: scrollXLeft }} >
        <Image src={adobe} alt="adobe"  className="h-[70px] mt-5" /> 
        <span className="text-[70px] font-extralight ml-[10px] mr-[10px]">
         Branding and Identity 
        </span>

        <Image src={webflow} alt="webflow" className="h-[70px] mt-5" />
        <span className="text-[70px] font-extralight ml-[10px] mr-[10px]">
         Responsive Web Design
        </span>

        <Image src={figma} alt="figma" className="h-[70px] mt-5" />
        <span className="text-[70px] font-extralight ml-[10px] mr-[10px]">Graphic Design</span>
      </motion.div>

      <motion.div className="second-line mt-[10px] inline-flex whitespace-nowrap" style={{ x: scrollXRight }} >
        <Image src={photoshop} alt="photoshop" className="h-[70px] mt-5" />
        <span className="text-[70px] font-extralight ml-[10px] mr-[10px]">Image Manipulation</span>

        <Image src={illustrator} alt="illustrator" className="h-[70px] mt-5"  />
        <span className="text-[70px] font-extralight ml-[10px] mr-[10px]">Responsive Web Design</span>

        <Image src={diamond} alt="diamond" className="h-[70px] mt-5" />
        <span className="text-[70px] font-extralight ml-[10px] mr-[10px]">Sketch to Webflow</span>
      </motion.div>
    </div>
  );
};

export default Services;
