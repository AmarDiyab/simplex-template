import React from "react";
import project from "../assets/project3.webp";
import Image from "next/image";
import Header from "../components/Header";
import styles from '../page.module.css';

const Project3 = () => {
  return (
    <div>
      <Header />
      <div className='pt-[7em] px-[2em]'>
      <h1 className={styles.projectHeading}>Brand Unveil</h1>
      <div className={styles.projectWidth}>
      <h5 className={styles.projectSubheading}>In today's digital landscape, it's crucial for agencies to maximize their online visibility and attract potential clients.</h5>
      </div>
      <Image src={project} alt="Project3" className="mt-[50px] rounded-[10px]" />
      </div>
    </div>
  );
};

export default Project3;
