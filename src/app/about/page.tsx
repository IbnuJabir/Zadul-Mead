import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import bkg from "../../../public/assets/about_banner.png";
import zad from "../../../public/assets/history_of_zad.png";
import badr from "../../../public/assets/history_of_BadrMosque.png";
import Footer from "@/components/Footer";

function About() {
  return (
    <div className="w-full text-white ">
      <div className="w-full py-10 md:py-0 md:h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover align-middle md:align-top -z-10"
        />
        <div className="mt-12 ml-3 md:ml-16 w-[96%] md:w-1/2 flex flex-col  gap-3 md:gap-2">
          <p
           data-aos="zoom-in" 
           data-aos-duration="1000" 
            data-aos-once="true"
           className="text-4xl font-extralight">About</p>
          <h1
           data-aos="zoom-in" 
           data-aos-duration="1000" 
            data-aos-once="true"
           className="text-2xl md:text-3xl">
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
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
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-90  flex flex-col gap-20 -z-14 py-16">
        <div className="w-[90%] md:w-[70%] ml-[5%] md:ml-[10%] mt-10">
          {/* <div className=" flex flex-col gap-4"> */}
          <h1 data-aos="fade-up" 
           data-aos-duration="1000" 
            data-aos-once="true"
             className="font-bold text-2xl mb-4">From The beginning </h1>
          <p 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="100"
           data-aos-once="true"
            className="hidden md:block font-montserrat text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="100"
           data-aos-once="true"
            className=" md:hidden font-montserrat text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <Image
            src={zad}
            alt="history-background"
            priority
            placeholder="blur"
            quality={100}
            className=" w-1/2 md:w-1/3 h-[270px] md:h-1/3 float-right ml-4 mb-2 "
            data-aos="zoom-in" 
           data-aos-duration="1000" 
           data-aos-delay="200"
            data-aos-once="true"
          />
          <p
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="100"
           data-aos-once="true"
            className=" font-montserrat text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco 
            
          </p>
          <p 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="100"
           data-aos-once="true"
            className="hidden md:block font-montserrat text-justify mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* </div> */}
          {/* <div className="float-right"> */}

          {/* </div> */}
        </div>
        <div className=" w-[90%] md:w-[70%] ml-[5%] md:ml-[10%] ">
          {/* <div className=" flex flex-col gap-4"> */}
          <h1
          data-aos="fade-up" 
          data-aos-duration="1000" 
           data-aos-once="true"
            className="font-bold text-2xl mb-4">From The beginning </h1>
          <p
           data-aos="zoom-in" 
           data-aos-duration="1000" 
           data-aos-delay="100"
            data-aos-once="true"
             className="hidden md:block  font-montserrat text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="300"
           data-aos-once="true"
            className=" md:hidden font-montserrat text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <Image
            src={badr}
            alt="history-background"
            priority
            placeholder="blur"
            quality={100}
            className="w-1/2 md:w-1/3 h-[270px] md:h-1/3 float-left mr-4 mt-2 "
            data-aos="zoom-in" 
           data-aos-duration="1000" 
           data-aos-delay="200"
            data-aos-once="true"
          />
          <p 
           data-aos="zoom-in" 
           data-aos-duration="1000" 
           data-aos-delay="100"
            data-aos-once="true"
             className="font-montserrat text-justify mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p 
          data-aos="zoom-in" 
          data-aos-duration="1000" 
          data-aos-delay="100"
           data-aos-once="true"
            className="hidden md:block  font-montserrat text-justify mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
