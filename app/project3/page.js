import React from "react";
import project from "../assets/project3.webp";
import Image from "next/image";
import Header from "../components/Header";

const Project3 = () => {
  return (
    <div>
      <Header />
      <Image src={project} alt="Project3" className="mt-[50px]" />
    </div>
  );
};

export default Project3;
