import React from "react";
import project from "../assets/project2.webp";
import Image from "next/image";
import Header from "../components/Header";
import styles from '../page.module.css';

const Project2 = () => {
  return (
    <div>
      <Header />
      <div className='pt-[7em] px-[2em]'>
      <h1 className={styles.projectHeading}>Brand Connect</h1>
      <div className={styles.projectWidth}>
      <h5 className={styles.projectSubheading}>In today's digital landscape, it's crucial for agencies to maximize their online visibility and attract potential clients.</h5>
      </div>
      <Image src={project} alt="Project2" className="mt-[50px] rounded-[10px]" />
      </div>
    </div>
  );
};

export default Project2;
