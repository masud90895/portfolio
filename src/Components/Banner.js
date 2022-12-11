import React, { useState } from 'react';
import image from "../assist/IMG_7233-removebg-preview.png"
import pdf from '../assist/mern-stack-developer.pdf'

const Banner = () => {
    return (
        <>
            <div id='banner' className="lg:px-6 xl:px-0">
                
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 text-left lg:py-32 xl:py-48">
                                <h1 className='text-2xl'>HI THERE !</h1>
                            <h2 className="md:w-10/12 py-2 text-center md:text-left md:py-8 font-bold text-4xl">I'M <span className='text-[#ffb238]'>MD.MAHAFUJUR RAHAMAN MASUD</span></h2>
                            <p className='mb-9 md:w-9/12'>I'm a Bangladeshi based Full Stack Web Developers focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                            <div className="flex md:w-8/12 justify-between ">
                                <a href="#about"><button  className="hover:opacity-75 bg-[#ffb238] py-3 px-10 lg:py-3 lg:px-14 rounded-full text-black text-sm md:text-lg ">About Me</button></a>
                                <a href={pdf} className="hover:opacity-90 border-2 border-[#ffb238] hover:bg-[#ffb238] py-3 px-10 lg:py-3 lg:px-14 rounded-full  text-black text-sm md:text-lg " download>Resume</a>
                            </div>
                        </div>
                        <div className="">
                            <img className="w-2/3 md:w-full mx-auto  mt-36 rounded-full" src={image} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;