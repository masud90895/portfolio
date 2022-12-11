import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch("projects.json")
        .then(response => response.json())
        .then(data => setProjects(data))
    },[])





    return (
        <div id='project' className=" 2xl:container 2xl:mx-auto mt-10">
            <div className="text-center lg:py-10 md:py-8 py-6">
                <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-6xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Projects</p>
            </div>
            <div className=" py-6 lg:px-20 md:px-6 px-4">


                <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                
                {
                        projects.map((project, index) =>  <div key={index} className="border relative ">
                            <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                                <p className="text-xs leading-3 text-gray-800">New</p>
                            </div>
                            <div className=" relative group">
                                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-yellow-200 via-yellow-400 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                <img className=" w-full h-[400px] transition duration-500 group-hover:scale-105" src={project.img} alt="" />
                                <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                    <a target='_blank' href={project.client}><button className=" font-medium text-base leading-4 text-gray-800 bg-yellow-400 py-3 w-full">Source Code</button></a>
                                    <a target='_blank'  href={project.live}><button className=" bg-transparent font-medium text-base leading-4 border-2 border-yellow-400 py-3 w-full mt-2 text-black">Quick View</button></a>
                                </div>
                            </div>
                            <p className=" font-normal text-left text-base leading-4  mt-4">{project.details.length > 300 ? project.details.slice(0,300) + "..." : project.details}</p>
                        <Link to={`project/${project.id}`}>
                        <button  className='my-3 border-2 w-[90%] py-2 border-[#ffb238] hover:bg-[#ffb238]'>See More</button>
                        </Link>
                           
                        </div>
                   )}
                   
                    

                    
                   

            
                </div>
            </div>
        </div>
    );
};

export default Projects;