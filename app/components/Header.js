import Image from "next/image";
import React from "react";
import logo from '../assets/simplex-logo.svg';
import styles from '../page.module.css';

const Header = () => {
  return (
    <div className="header ml-5 mt-[24px] mb-[46px] flex justify-between ">
      <Image src={logo} alt="simplex-logo" className="max-w-full" width={200} />
      <div className={styles.navdrawer}>
        <div className={styles.firstline} />
        <div className={styles.secondline} />
        <div className={styles.thirdline} />
      </div>
    </div>
  );
};

export default Header;