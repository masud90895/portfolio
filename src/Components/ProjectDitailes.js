import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const ProjectDitailes = () => {
   

    

    
    
    const data = useLoaderData()

  console.log(data);

    





    return (
        <div className='lg:mx-[100px] text-start'>
        
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3  mt-36'>
           {
            data[0]?.image.map((item, index) => 
            <img
                key={index}
        
              alt="Signage"
              src={item}
              className="h-56 w-full border-2 border-yellow-500 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72 transition duration-500 group-hover:scale-105"
            />
          )
           }
           </div>
           <div className='mt-10 md:flex items-center justify-center gap-7'>
            <h1 className='text-4xl font-serif mb-7 md:mb-0'>Project : {data[0].name}</h1>
            <a className="hover:opacity-90 border-2 border-[#ffb238] bg-[#ffb238] hover:bg-white py-3 px-10 lg:py-3 lg:px-14 rounded-full  text-black text-sm md:text-lg " href={data[0].live} target="_blank" rel="noopener noreferrer"><button>Live</button></a>
            <a className="hover:opacity-90 border-2 border-[#ffb238] bg-[#ffb238] hover:bg-white py-3 px-10 lg:py-3 lg:px-14 rounded-full  text-black text-sm md:text-lg " href={data[0].client} target="_blank" rel="noopener noreferrer"> <button> client</button></a>
            <a className="hover:opacity-90 border-2 border-[#ffb238] bg-[#ffb238] hover:bg-white py-3 px-10 lg:py-3 lg:px-14 rounded-full  text-black text-sm md:text-lg " href={data[0].server} target="_blank" rel="noopener noreferrer"><button> server</button></a>        
           </div>

           <div className='mt-10'>
            <h1  className='text-4xl font-serif mb-10'>Projects feature</h1>
            <div>
              <ul>
                {
                  data[0].feature.map((item, index) =><li className='text-start mb-2 list-decimal' key={index}>{item}</li>)
                }
              </ul>
            </div>
           </div>
           <div className='mt-10'>
            <h1  className='text-4xl font-serif mb-10'>Projects technologies</h1>
            <div>
              <ul>
                {
                  data[0].technologies.map((item, index) =><li className='text-start mb-2 list-decimal' key={index}>{item}</li>)
                }
              </ul>
            </div>
           </div>
        </div>
    );
};

export default ProjectDitailes;