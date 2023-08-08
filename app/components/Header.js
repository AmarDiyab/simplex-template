import Image from "next/image";
import React from "react";
import logo from '../assets/simplex-logo.svg';

const Header = () => {
  return (
    <div className="header ml-5 mt-[34px] mb-[16px]">
      <Image src={logo} alt="simplex-logo" className="max-w-full" width={200} />
    </div>
  );
};

export default Header;