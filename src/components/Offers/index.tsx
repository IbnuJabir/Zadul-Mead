"use-client";

import React from "react";
import { IoLibrary } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { GiFamilyHouse } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { MdHouse } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import PulsatingButton from "../ui/pulsating-button";
function Offers() {
  return (
    <div className="pt-10 bg-about-bkg md:bg-about-desktop-bkg bg-no-repeat bg-cover">
      <div className="h-fit w-[90%] bg-[#202020] font-light grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-white  m-auto rounded-3xl p-4 md:py-10">
        <div
          data-aos-once="true"
         data-duration="100"
         data-aos="zoom-out"
       
        className="h-fit flex flex-col gap-4 items-start justify-start">
          <div className="w-full flex gap-3 items-center">
          <IoLibrary className="size-8" />
          
            <h2 className="text-left"> Modern Library</h2>
            </div>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            A well-equipped library with a vast collection of Islamic literature, academic texts, digital resources, and study spaces for students to conduct research and study.

            </p>
        
        </div>
        <div
         data-aos="zoom-out"
         data-aos-once="true"
         data-duration="200"
      
         
        className="h-fit flex flex-col gap-4 items-start justify-start">
           <div className="flex  gap-3 items-center w-full">
          <GrResources className="size-8" />
         
            <h2 className="text-left">Resource Center
            </h2>
            </div>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            Academic texts, digital resources, and study spaces for students to conduct research and study.

            </p>
          
        </div>
        <div
          data-aos-once="true"
         data-aos="zoom-out"
         data-duration="300"
        


          className="h-fit flex flex-col gap-4 items-start justify-start">
             <div className="flex items-center gap-3 w-full">
          <GiFamilyHouse className="size-8" />
         
            <h2 className="text-left">On-Campus Housing
            </h2>
            </div>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          
        </div>
        <div
          data-aos-once="true"
         data-aos="zoom-out"
         data-duration="400"
      
         
          className="h-fit flex flex-col gap-4 items-start justify-start">
             <div className="flex items-center gap-3 w-full">
          <ImSpoonKnife className="size-8" />
         
            <h2 className="text-left">Clean Dining Services
            </h2>
            </div>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          
        </div>
        <div
          data-aos-once="true"
         data-aos="zoom-out"
         data-duration="500"
   
         
          className="h-fit flex flex-col gap-4 items-start justify-start">
             <div className="flex items-center gap-3 w-full">
          <MdHouse className="size-8" />
         
            <h2 className="text-left">Meditation Spaces
            </h2>
            </div>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          
        </div>
        <div 
          data-aos-once="true"
         data-aos="zoom-out"
         data-duration="600"
         

          className="h-fit flex flex-col gap-4 items-start justify-start">
             <div className="flex items-center gap-3 w-full">
          <IoMdFootball className="size-8" />
         
            <h2 className="text-left">Sports and Recreational</h2>
            </div>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
        
        </div>
      </div>
      <div className="h-40 flex items-center justify-center">
        <a href="/register">
          <PulsatingButton>Register Now</PulsatingButton>
        </a>
      </div>
    </div>
  );
}

export default Offers;
