import React from "react";
import project from "../assets/project2.webp";
import Image from "next/image";
import Header from "../components/Header";

const Project2 = () => {
  return (
    <div>
      <Header />
      <div className='pt-[7em] pl-[2.5em]'>
      <h1 className='text-[100px] font-light block relative leading-[1.3m] tracking-[-6px] '>Brand Connect</h1>
      <div className='w-[800px]'>
      <h5 className='text-[30px] font-extralight leading-[1.4] mb-[12px] '>In today's digital landscape, it's crucial for agencies to maximize their online visibility and attract potential clients.</h5>
      </div>
      <Image src={project} alt="Project2" className="mt-[50px] rounded-[10px]" />
      </div>
    </div>
  );
};

export default Project2;
