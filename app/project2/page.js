import React from "react";
import project from "../assets/project2.webp";
import Image from "next/image";
import Header from "../components/Header";

const Project2 = () => {
  return (
    <div>
      <Header />
      <Image src={project} alt="Project2" className="mt-[50px]" />
    </div>
  );
};

export default Project2;
