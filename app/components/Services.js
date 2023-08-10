import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import adobe from "../assets/adobe.png";
import webflow from "../assets/webflow.svg";
import figma from "../assets/figma.svg";
import Image from "next/image";
import photoshop from "../assets/photoshop.png";
import illustrator from "../assets/illustrator.png";
import diamond from "../assets/diamond.png";
import styles from "../page.module.css";

const Services = () => {
  const { scrollYProgress } = useScroll();
  const scrollXLeft = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const scrollXRight = useTransform(scrollYProgress, [0, 1], [-600, 0]);

  return (
    <div className="services flex flex-col overflow:hidden ">
      <motion.div
        className="first-line flex inline-flex whitespace-nowrap max-w-[10000px] algin-middle"
        style={{ x: scrollXLeft }}
      >
        <Image src={adobe} alt="adobe" className={styles.horizontalImage} />
        <span className={styles.horizontalText}>Branding and Identity</span>

        <Image src={webflow} alt="webflow" className={styles.horizontalImage} />
        <span className={styles.horizontalText}>Responsive Web Design</span>

        <Image src={figma} alt="figma" className={styles.horizontalImage} />
        <span className={styles.horizontalText}>Graphic Design</span>
      </motion.div>

      <motion.div
        className="second-line mt-[10px] inline-flex whitespace-nowrap"
        style={{ x: scrollXRight }}
      >
        <Image src={photoshop} alt="photoshop" className={styles.horizontalImage} />
        <span className={styles.horizontalText}>Image Manipulation</span>

        <Image src={illustrator} alt="illustrator" className={styles.horizontalImage} />
        <span className={styles.horizontalText}>Responsive Web Design</span>

        <Image src={diamond} alt="diamond" className={styles.horizontalImage} />
        <span className={styles.horizontalText}>Sketch to Webflow</span>
      </motion.div>
    </div>
  );
};

export default Services;
