import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import bkg from "../../../public/assets/about_banner.png";
import zad from "../../../public/assets/history_of_zad.png";
import badr from "../../../public/assets/history_of_BadrMosque.png";

function About() {
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
          <p className="text-4xl font-extralight">About</p>
          <h1 className="text-4xl">
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p className="font-montserrat text-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-90  flex flex-col gap-40 -z-14 py-16">
        <div className="w-[80%]">
          {/* <div className=" flex flex-col gap-4"> */}
          <h1 className="font-bold text-2xl ">From The beginning </h1>
          <p className="font-montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="font-montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* </div> */}
          <div className="float-right">
            <Image
              src={zad}
              alt="history-background"
              priority
              placeholder="blur"
              quality={100}
              className="w-40 h-44"
            />
          </div>
        </div>
        <div className="w-full flex items-start justify-center gap-x-10">
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="font-bold text-2xl ">From The beginning </h1>
            <p className="font-montserrat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="font-montserrat">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Image
            src={badr}
            alt="history-background"
            priority
            placeholder="blur"
            quality={100}
            className="w-1/4 h-1/3"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
