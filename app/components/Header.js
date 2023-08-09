import Image from "next/image";
import React from "react";
import logo from '../assets/simplex-logo.svg';

const Header = () => {
  return (
    <div className="header ml-5 mt-[24px] mb-[46px] flex justify-between ">
      <Image src={logo} alt="simplex-logo" className="max-w-full" width={200} />
      <div className="w-[60px] h-[60px] bg-[#fff] rounded-[100px] relative flex flex-col items-start justify-center shadow-[0_0_20px_rgba(0,0,0,0.1)] mr-5  ">
        <div className="first-line w-[60%] h-[1px] bg-black mx-3 mb-[5px]" />
        <div className="second-line w-[40%] h-[1px] bg-black ml-3 mb-[5px] " />
        <div className="third-line w-[60%] h-[1px] bg-black ml-3 " />
      </div>
    </div>
  );
};

export default Header;