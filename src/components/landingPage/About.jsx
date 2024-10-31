import React from 'react'
import img1 from '../../../public/images/img1.png'

function About() {
  return (
    <div className='lg:px-48 px-2 pt-16 flex items-start lg:flex-row flex-col-reverse w-full'>
        <div className="text lg:w-1/2 space-y-10">
            <h1 className='lg:text-5xl text-4xl text-gray-900 dark:text-white font-medium'>Hey, I'm Tania</h1>
            <h3 className='lg:text-xl text-lg text-gray-800 dark:text-gray-100'>I'm a software developer who makes open-source projects and writes about code and life.</h3>
            <h3 className='lg:text-xl text-lg text-gray-800 dark:text-gray-100'>On this site, you can check out all the <span className='text-[#3792a5] font-semibold'>projects</span> I've worked on, check some of my <span className='text-[#3792a5] font-semibold'>skills</span>, or learn more <span className='text-[#3792a5] font-semibold'>about me</span>.</h3>
        </div>
        <div className="logo lg:w-1/2">
            <img src={img1} alt="Alrak Logo" className='object-cover w-60 lg:w-full'/>
        </div>
    </div>
  )
}

export default About