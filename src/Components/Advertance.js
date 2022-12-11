import React from 'react';
import html2 from "../assist/html/html5-with-wordmark-color.svg"
import css from "../assist/css/css.png"
import tailwind from "../assist/tailwind.png"
import bootstrao from "../assist/bootstrap.png"
import javascript from "../assist/javascript.png"
import react from "../assist/react.png"
import firebase from "../assist/firebase.png"
import mongodb from "../assist/mongodb.png"
import node from "../assist/node.png"
import Marquee from "react-fast-marquee";

const Advertance = () => {

    const advertage =[
        {
           name : "HTML",
           Image:  html2,
           prc: "95%"
        },
        {
            name : "CSS",
            Image:  css,
            prc: "98%"
         },
         {
            name : "Tailwind",
            Image:  tailwind,
            prc: "90%"
         },
         {
            name : "Bootstrap",
            Image:  bootstrao,
            prc: "85%"
         },
         {
            name : "Javascript",
            Image:  javascript,
            prc: "91%"
         },
         {
            name : "React",
            Image:  react,
            prc: "79%"
         },
         {
            name : "Firebase",
            Image:  firebase,
            prc: "84%"
         },
         {
            name : "MongoDB",
            Image:  mongodb,
            prc: "78%"
         },
         {
            name : "Node jS",
            Image:  node,
            prc: "65%"
         }
    ]
    return (
        <div id='advantage'>
            <div className='md:text-6xl text-2xl font-bold font-serif mb-[50px]'>
                My Skill
            </div >
            {/* addvance */}
            <Marquee speed={30}>


            <div className='md:mx-[100px] my-4 mx-[20px] flex grid-cols-1 gap-7'>
           


                {
                    advertage.map((ad,i)=>  <div key={i} className='flex flex-col items-center transition duration-500 hover:scale-110' >
                    <div className='w-[200px] shadow-md  shadow-[#ffb238]  flex flex-col items-center rounded-[30%]  bg-[#f2f2f2] p-9'>
                      <img className='w-[100px] h-[80px] ' src={ad.Image}  alt="" />
                      <h1 className='text-5xl mt-5'>{ad.prc}  </h1>
                   </div>
                      <h1 className='text-left text-xl mt-2'>{ad.name} </h1>
              </div>)
                }
            </div>
            </Marquee>
        </div>
    );
};

export default Advertance;