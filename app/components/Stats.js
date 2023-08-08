import Image from "next/image";
import React from "react";
import gifImage from "../assets/gif-poster.jpeg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Stats = () => {
  return (
    <>
    <Parallax pages={4}>
      <ParallaxLayer offset={0} sticky={{start: 0, end: 3 }}>
        <Image
          src={gifImage}
          alt="gif-image"
          className="rounded-[20px] mt-10 m-10"
        />

          <ParallaxLayer offset={0} speed={1.25}>
            <span className="text-[30px] font-extralight inset-0">
              {" "}
              Completed Projects
            </span>
            <br />
            <span className="text-[100px] font-light">5K</span>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={5} >
            <span className="text-[30px] font-extralight float">
              {" "}
              Clients Overall
            </span>
            <br />
            <span className="text-[100px] font-light flex-end">65+</span>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1.75}>
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
      </ParallaxLayer>
        </Parallax>
    </>
  );
};

export default Stats;
