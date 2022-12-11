import React from 'react';
import about from "../assist/about.json"
import Lottie from "lottie-react"

const About = () => {
    return (
        
             <div  id='about' className='overflow-y-hidden'>
    <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
      <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
        <div >
          <div>
          <p className="lg:text-4xl  md:text-left text-3xl font-extrabold leading-9 text-gray-800">Know Who I'M</p>
          <div className='flex gap-3 mt-4 justify-center md:justify-start'>
            <a href="https://www.facebook.com/masud90895" target="_blank" rel="noopener noreferrer"><img className='w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="" /></a>
            <a href="https://www.instagram.com/md._mahafujur_rahaman_masud/" target="_blank" rel="noopener noreferrer"><img className='w-10'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" /></a>
            <a href="https://github.com/masud90895" target="_blank" rel="noopener noreferrer"><img  className='w-10' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/masud90895/" target="_blank" rel="noopener noreferrer"><img className='w-10'  src="https://cdn-icons-png.flaticon.com/512/372/372399.png" alt="" /></a>
          </div>
          </div>
          <div className='md:flex flex-row-reverse items-center'>
          <div className=" lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
          <Lottie className="w-full obejct-fit object-center object-fill h-full"  animationData={about} loop={true} />
          </div>
          <div className="lg:w-3/5 xl:w-3/5 text-left w-full lg:mt-0 mt-6"> 
          <p className='lg:mt-32'>Myself Md. Mahafujur Rahaman Masud. At present, I am an undergraduate at Thakurgoan Govt College in Mathematics. Besides my study, I am a positive, enthusiastic, and competent Full Stack Web Developer. It's been 1 year; I’m working as a web developer.I've worked on a number of websites and contributed to several excellent web design projects.I have extensive experience working both alone and as part of a team on often time-sensitive,challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms. As a Web Developer, I take my job seriously, which means I always make sure my abilities are up to date in this rapidly changing field.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
       
    );
};

export default About;