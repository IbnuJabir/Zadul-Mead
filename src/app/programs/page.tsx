"use client";
import Image from "next/image";
import React from "react";
import bkg from "../../../public/assets/programs_root_background.png";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function programs() {
  return (
    <div className="overflow-x-hidden w-full text-white bg-black">
      <div className="w-full py-10 md:py-0 md:h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover align-center -z-10"
        />
        <div className="mt-12 ml-6 md:ml-16 w-[95%] md:w-1/2 flex flex-col gap-2">
          <p 
           data-aos="zoom-in" 
           data-aos-duration="1000" 
            data-aos-once="true"
            className="text-2xl md:text-4xl font-extralight">Programs at</p>
          <h1 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
           data-aos-once="true"
            className=" text-2xl md:text-3xl">
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Community
          </h1>
          <p 
          data-aos="fade-up" 
          data-aos-duration="1000" 
           data-aos-once="true"
            className="font-montserrat text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="md:px-32 px-10 py-10">
      <div>
      <h1 
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      data-aos-delay="100"
       className="text-white text-xl md:text-3xl md:ml-2  font-cinzel mt-5">
          Programs 
          at Badir <span className="font-bold">Masjid</span>
        </h1>
      </div>
      <div
       
        className="w-full items-center justify-center grid grid-cols-1 gap-y-8 md:grid-cols-2 py-10"
      >
        <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="100"
         className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg">
          <p>Dars Name : 40 Hadith Habashi</p>
          <p>Starting Date : 23/2/2019</p>
          <p>Dars Day : Saturday & Sunday</p>
          <p>Muallif : Sheikh Ahmad </p>
          <p>Muallif : Sheikh Ahmad </p>
        </div>
        <div 
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="100"
        className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg">
          <p>Dars Name : 40 Hadith Habashi</p>
          <p>Starting Date : 23/2/2019</p>
          <p>Dars Day : Saturday & Sunday</p>
          <p>Muallif : Sheikh Ahmad </p>
          <p>Muallif : Sheikh Ahmad </p>
        </div>
        <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="100"
         className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg">
          <p>Dars Name : 40 Hadith Habashi</p>
          <p>Starting Date : 23/2/2019</p>
          <p>Dars Day : Saturday & Sunday</p>
          <p>Muallif : Sheikh Ahmad </p>
          <p>Muallif : Sheikh Ahmad </p>
        </div>
      
        <div
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="100"
         className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg">
          <p>Dars Name : 40 Hadith Habashi</p>
          <p>Starting Date : 23/2/2019</p>
          <p>Dars Day : Saturday & Sunday</p>
          <p>Muallif : Sheikh Ahmad </p>
          <p>Muallif : Sheikh Ahmad </p>
        </div>
        </div>
        <div>
      <h1
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      data-aos-delay="100"
       className="text-white text-xl md:text-3xl md:ml-2  font-cinzel mt-10">
          Programs 
          at Zadul Mead <span className="font-bold">Medresa</span>
        </h1>
      </div>
      <div
        
        className="w-full items-center justify-center grid grid-cols-1 gap-y-8 md:grid-cols-2 py-10"
      >
        <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="100"
         className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg">
          <p>Dars Name : 40 Hadith Habashi</p>
          <p>Starting Date : 23/2/2019</p>
          <p>Dars Day : Saturday & Sunday</p>
          <p>Muallif : Sheikh Ahmad </p>
          <p>Muallif : Sheikh Ahmad </p>
        </div>
        <div
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="100"
         className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg">
          <p>Dars Name : 40 Hadith Habashi</p>
          <p>Starting Date : 23/2/2019</p>
          <p>Dars Day : Saturday & Sunday</p>
          <p>Muallif : Sheikh Ahmad </p>
          <p>Muallif : Sheikh Ahmad </p>
        </div>
       </div>
      </div>
        
      <Footer />
    </div>
  );
}

export default programs;
