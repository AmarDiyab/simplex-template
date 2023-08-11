import Image from "next/image";
import React from "react";
import gifImage from "../../assets/gif-poster.jpeg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Stats = () => {
  return (
    <>
    <Parallax pages={2}>
      <ParallaxLayer sticky={{ start: 0, end: 2 }}>
        <Image
          src={gifImage}
          alt="gif-image"
          className="rounded-[20px] mt-10 m-10"
          />
        </ParallaxLayer>

          <ParallaxLayer offset={0} speed={2.5}>
            <span className="text-[30px] font-extralight inset-0">
              {" "}
              Completed Projects
            </span>
            <br />
            <span className="text-[100px] font-light">5K</span>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2.5} >
            <span className="text-[30px] font-extralight float-right">
              {" "}
              Clients Overall
            </span>
            <br />
            <span className="text-[100px] font-light flex-end">65+</span>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={2.5}>
            <span className="text-[30px] font-extralight">
              {" "}
              Completed Projects
            </span>
            <br />
            <span className="text-[100px] font-light">235+</span>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={2.5}>
            <span className="text-[30px] font-extralight"> Happy Customer</span>
            <br />
            <span className="text-[100px] font-light">90%</span>
          </ParallaxLayer>
        </Parallax>
    </>
  );
};

export default Stats;