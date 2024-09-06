"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import bkg from "../../../public/assets/register_page.png";
import Footer from "@/components/Footer";
import { MultiStepFormDemo } from "@/components/Register";

function Register() {
  return (
    <div className="overflow-x-hidden w-full text-white ">
      <div className="w-full py-5 md:py-0 md:h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className=" object-cover align-top -z-10"
        />
        <div className="mt-12 ml-6 md:ml-16 w-full md:w-1/2 flex flex-col gap-2">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl md:text-4xl font-extralight"
          >
            Register For
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="md:text-3xl text-2xl"
          >
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="font-montserrat text-[18px]"
          >
            Enroll today at ZAD AL-MEAD Islamic Center and start your journey of
            Islamic knowledge and spiritual growth.
          </p>
        </div>
      </div>
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-90  flex flex-col gap-20 -z-14 py-16">
        <div className="w-[80%] ml-8 md:ml-16">
          <h1 className="font-bold text-2xl mb-4">Register</h1>
          <p className="font-montserrat text-justify">
            At ZAD AL-MEAD Islamic Center, you can learn from respected Ustazs
            and Sheikhs who know a lot about Islam. Our teachers are dedicated
            to helping you understand your faith. They will guide you through
            important teachings and support your spiritual and moral growth.
            Join us now to start your journey toward more knowledge and
            spiritual growth.
          </p>
        </div>
        <div className=" text-black w-[80%] md:w-[60%] mx-auto bg-white rounded-lg">
          <MultiStepFormDemo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
