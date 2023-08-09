import Image from "next/image";
import React from "react";
import gifPoster from "../assets/gif-image.png";

const Stat = () => {
  return (
    <div className="h-full flex flex-col relative justify-start  sticky top-[5%]  ">
      <div className="flex flex-wrap w-full justify-center px-[2.5em] items-start justify-end mt-[40px] relative ">
        <div className="h-[800px] overflow-hidden rounded-[20px]  ">
          <Image src={gifPoster} alt="gif-poster" />
        </div>

        <div className="absolute flex flex-col top-0 left-[6%] ">
          <h1 className="relative block text-[100px] font-light my-0 leading-[1.3em] tracking-[-6px] ">
            5K
          </h1>
          <div className="block">
            <h5 className="text-[30px] font-[200] leading-[1.4] mb-[12px] ">
              Completed Projects
            </h5>
          </div>
        </div>

        <div className="absolute flex flex-col top-[15%] right-[96px] ">
          <h1 className="relative block text-[100px] font-light my-0 leading-[1.3em] tracking-[-6px] ">
            65+
          </h1>
          <div className="block">
            <h5 className="text-[30px] font-[200] leading-[1.4] mb-[12px] ">
              Clients Overall
            </h5>
          </div>
        </div>

        <div className="absolute flex flex-col bottom-[55%] left-[6%]">
          <h1 className="relative block text-[100px] font-light my-0 leading-[1.3em] tracking-[-6px] ">
            235+
          </h1>
          <div className="block">
            <h5 className="text-[30px] font-[200] leading-[1.4] mb-[12px] ">
              Completed Projects
            </h5>
          </div>
        </div>

        <div className="absolute flex flex-col bottom-[35%] right-[4%] ">
          <h1 className="relative block text-[100px] font-light my-0 leading-[1.3em] tracking-[-6px] ">
            90%
          </h1>
          <div className="block">
            <h5 className="text-[30px] font-[200] leading-[1.4] mb-[12px] ">
              Happy Customers
            </h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stat;
