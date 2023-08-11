import Image from "next/image";
import React from "react";
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import Link from "next/link";
import styles from '../page.module.css';

const Projects = () => {
    
  return (
    <div className="projects relative w-full mx-auto py-[10em] px-[2.5em]" id="projects">
      <h3 className="text-[50px] font-light leading-[1.1em] mb-[76px] ">
        Our Projects
      </h3>

        <div className="flex flex-col overflow-hidden rounded-[10px] h-full "> 
        <Link href='/project1'>
            <Image src={project1} alt="project1" className={styles.project1} id="project"  />
        </Link>
        </div>

        <div className={styles.projectWrapper2}>
            <div className="project2 overflow-hidden rounded-[10px] ">
            <Link href='/project2'>
                <Image src={project2} alt="project2" className="h-full inline-block align-middle w-full max-w-full hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-125 " id="project" />
            </Link>
            </div>
            <div className="project3 overflow-hidden rounded-[10px]">
            <Link href='/project3'>
                <Image src={project3} alt="project3" className="h-full inline-block align-middle w-full max-w-full hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-125 " id="project" />
            </Link>
            </div>
        </div>
        
    </div>
  );
};

export default Projects;
