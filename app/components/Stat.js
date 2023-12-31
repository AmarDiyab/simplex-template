import Image from "next/image";
import React from "react";
import gifPoster from "../assets/gif-image.png";
import styles from "../page.module.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Stat = () => {
  return (
    <div className="h-[400vh] min-h-[auto] flex flex-col relative justify-start top-[5%]  ">
      <Parallax pages={2}>

        <div className="top-[5%] sticky">
          <div className="flex flex-wrap w-full justify-center px-[2.5em] overflow-visible">
            <div className="flex items-start justify-end mt-[40px] relative overflow-hidden ">
        <ParallaxLayer sticky={{ start: 0, end: 2 }}>
              <div className={styles.gif}>
                <Image
                  src={gifPoster}
                  alt="gif-poster"
                  className="relative h-[800px] overflow-hidden  "
                  />
              </div>
          
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2.5} >
        <div className="flex flex-col absolute top-[0%] left-[6%] ">
          <h1 className={styles.giftext}>
            5K
          </h1>
          <div className="block">
            <h5 className={styles.giftextSub}>Completed Projects</h5>
          </div>
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={3} >
        <div className="absolute flex flex-col top-[15%] right-[96px] ">
          <h1 className={styles.giftext}>65+</h1>
          <div className="block">
            <h5 className={styles.giftextSub}>Clients Overall</h5>
          </div>
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={3} >
        <div className="absolute flex flex-col bottom-[55%] left-[6%]">
          <h1 className={styles.giftext}>235+</h1>
          <div className="block">
            <h5 className={styles.giftextSub}>Completed Projects</h5>
          </div>
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={3} >
        <div className="absolute flex flex-col bottom-[35%] right-[4%] ">
          <h1 className={styles.giftext}>90%</h1>
          <div className="block">
            <h5 className={styles.giftextSub}>Happy Customers</h5>
          </div>
        </div>
        </ParallaxLayer>

        </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Stat;
