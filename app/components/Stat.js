import Image from "next/image";
import React from "react";
import gifPoster from "../assets/gif-image.png";
import styles from "../page.module.css";
import overlay from '../assets/bg-overlay.svg';

const Stat = () => {
  return (
    <div className="h-[400vh] min-h-[auto] flex flex-col relative justify-start top-[5%]  ">
      <div className="sticky top-[5%]">
        <div className="flex flex-wrap w-full justify-center px-[2.5em] overflow-visible">
          <div className="flex items-start justify-end mt-[40px] relative overflow-hidden  ">
            <div className={styles.gif}>
              <Image src={gifPoster} alt="gif-poster" className="relative h-[800px] overflow-hidden " />
            <Image src={overlay} alt="overlay-image" className="inline-block align-middle overflow-clip" />
            </div>

          </div>
        </div>
      </div>

      <div className="flex flex-col absolute top-[0%] left-[6%] ">
        <h1 className={styles.giftext}>5K</h1>
        <div className="block">
          <h5 className={styles.giftextSub}>Completed Projects</h5>
        </div>
      </div>

      <div className="absolute flex flex-col top-[15%] right-[96px] ">
        <h1 className={styles.giftext}>65+</h1>
        <div className="block">
          <h5 className={styles.giftextSub}>Clients Overall</h5>
        </div>
      </div>

      <div className="absolute flex flex-col bottom-[55%] left-[6%]">
        <h1 className={styles.giftext}>235+</h1>
        <div className="block">
          <h5 className={styles.giftextSub}>Completed Projects</h5>
        </div>
      </div>

      <div className="absolute flex flex-col bottom-[35%] right-[4%] ">
        <h1 className={styles.giftext}>90%</h1>
        <div className="block">
          <h5 className={styles.giftextSub}>Happy Customers</h5>
        </div>
      </div>
    </div>
  );
};

export default Stat;
