"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import bkg from "../../../public/assets/register_page.png";

import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { Button, Group, TextInput, NumberInput } from "@mantine/core";
import Footer from "@/components/Footer";
import { MultiStepFormDemo } from "@/components/Register";

function Register() {
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnBlur: true,
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      favoriteColor: matches(
        /^#([0-9a-f]{3}){1,2}$/,
        "Enter a valid hex color"
      ),
      age: isInRange(
        { min: 18, max: 99 },
        "You must be 18-99 years old to register"
      ),
    },
  });
  return (
    <div className="w-full text-white ">
      <div className="w-full h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover align-top -z-10"
        />
        <div className="mt-12 ml-16 w-1/2 flex flex-col gap-2">
          <p 
            data-aos="zoom-in" 
            data-aos-duration="1000" 
            data-aos-once="true"
            className="text-4xl font-extralight">Register For</p>
          <h1
          data-aos="zoom-in" 
          data-aos-duration="1000" 
           data-aos-once="true"
            className="md:text-3xl text-2xl">
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p
          data-aos="fade-up" 
          data-aos-duration="1000" 
           data-aos-once="true"
            className="font-montserrat text-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-90  flex flex-col gap-20 -z-14 py-16">
        <div className="w-[80%] ml-16">
          <h1 className="font-bold text-2xl mb-4">Register</h1>
          <p className="font-montserrat text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="text-black w-[60%] mx-auto bg-white rounded-lg">
          <MultiStepFormDemo />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
