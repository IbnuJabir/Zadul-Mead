"use client";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Announcements from "@/components/Announcements";
import Programs from "@/components/Programs";
import ScrollDown from "@/components/ScrollDown";
import Highlights from "@/components/Highlights";
import Offers from "@/components/Offers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";
import bkg from "../../public/assets/home_background1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 10,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className=" w-full h-[100svh] bg-[#f5f5f5] relative bg-no-repeat bg-center bg-cover font-cinzel z-10">
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover -z-10"
        />
        <Navbar />
        <div className="w-full h-[89%] flex flex-col items-center md:items-start justify-center gap-6 lg:pl-16 md:pl-12">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-white text-[23.2px] font-normal tracking-tight text-center md:text-left lg:text-[45px]"
          >
            WELCOME TO
            <span className="font-bold mr-1">
              <br></br>ZAD AL-MEAD
            </span>
            Islamic Center
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="font-montserrat w-9/12 text-white text-lg font-normal tracking-tight text-center md:text-left opacity-70 lg:text-[24px]"
          >
            A Community of Faith, Learning, and Spiritual Growth
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <a href="https://t.me/ahmedadem" target="_blank">
              <button
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay="300"
                className="w-max px-4 py-2 font-montserrat rounded-[26.24px] flex text-center items-center bg-white lg:px-3 hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-colors"
              >
                Join our Community
              </button>
            </a>
            <a href="/register">
              <button
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay="600"
                className="w-max px-4 py-2 font-montserrat rounded-[26.24px] flex text-center items-center bg-transparent border-2 border-white text-white lg:px-3 hover:bg-white hover:text-black transition-colors"
              >
                Register Now
              </button>
            </a>
          </div>
          <ScrollDown />
        </div>
        <About />
        <Announcements />
        <Programs />
        <Highlights />
        <Offers />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
