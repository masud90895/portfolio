import React from 'react';
import project1 from"../assist/projects/resale-go.png"
import project2 from"../assist/projects/eco-learning.png"
import project3 from"../assist/projects/yummi-food.png"

const Projects = () => {

    const projects =[
        {
           name : "Resale-Go" ,
           img : project1,
           details: "This site build based on selling used (second-hand phone) with the ability to advertise a product.To Build This Project I used React, React router, Tailwind, sweet alert,firebase,MongoDB,React query, axios etc.This brand sells sustainably sourced second hand Phone through their website .This Site uses three types user, like : admin,seller & user/buyer.This project i using 2 type authentication, exe: 1.google & email-password.This project have dashboard route.dashboard are fully dynamic.This project also have Blog page.There we showings most important Question's.Etc",
           server: "https://github.com/masud90895/resale-go-server",
           client: "https://github.com/masud90895/resale-go-client",
           live : "https://aassinment12.web.app/"
        },
        {
            name : "Eco Learning" ,
            img : project2,
            details: "This site build based on learning related courses.To Build This Project I used React, React router, Tailwind, sweet alertfirebase,lottie,react-animated-text etc.Every courses have full detailed info.Here You Find Development related top courses & courses details.This project's fully authenticated using firebase.This project i using 3 type authentication, exe: 1.google,Github & email-password.This project also have Blog page.There we showings most important Question's.Etc",
            server: "https://github.com/masud90895/eco-learning-server-side",
            client: "https://github.com/masud90895/eco-learning-client-side",
            live : "https://eco-learning-9111b.web.app/"
         },
         {
            name : "Yummi-Homemade" ,
            img : project3,
            details: "This site build based on home made food delivery.To Build This Project I used React, React router, Tailwind, sweet alert,firebase,mongodb etc.We Provide Best meal delivery for unique recipes.This project's fully authenticated using firebase.Here You Find Food related top meal & meal details.This project i using 2 type authentication, exe: 1.google & email-password.This project have My Review Page.There You See your All Review.This project have Add Services Page.There You Add Food Services on Our Site.This project also have Blog page.There we showings most important Question's.Etc",
            server: "https://github.com/masud90895/Yammi-food-server",
            client: "https://github.com/masud90895/Yammi-food-client",
            live : "https://assinment11-c5915.web.app/"
         },
    ]





    return (
        <div id='project' className=" 2xl:container 2xl:mx-auto mt-10">
            <div className="text-center lg:py-10 md:py-8 py-6">
                <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-6xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">Projects</p>
            </div>
            <div className=" py-6 lg:px-20 md:px-6 px-4">


                <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                {
                        projects.map((project, index) =>  <div key={index} className=" relative ">
                            <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                                <p className="text-xs leading-3 text-gray-800">New</p>
                            </div>
                            <div className=" relative group">
                                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                <img className=" w-full h-[400px]" src={project.img} alt="" />
                                <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                    <a target='_blank' href={project.client}><button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Source Code</button></a>
                                    <a target='_blank'  href={project.live}><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button></a>
                                </div>
                            </div>
                            <p className=" font-normal text-left text-base leading-4  mt-4">{project.details.length > 300 ? project.details.slice(0,300) + "..." : project.details}</p>
                        </div>
                   )}
                   
                    

                    
                   

            
                </div>
            </div>
        </div>
    );
};

export default Projects;