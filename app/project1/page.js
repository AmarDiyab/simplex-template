import React from 'react'
import project from '../assets/project1.webp';
import Image from 'next/image';
import Header from '../components/Header';

const Project1 = () => {
  return (
    <div>
      <Header />
      <Image src={project} alt='Project1' className='mt-[50px]' />
    </div>
  )
}

export default Project1