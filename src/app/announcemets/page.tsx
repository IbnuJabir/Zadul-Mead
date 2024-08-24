"use client";
import Image from "next/image";
import React from "react";
import bkg from "../../../public/assets/announcements_banner.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Announcements() {
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
          className="object-cover align-center -z-10"
        />
        <div className="mt-12 ml-16 w-1/2 flex flex-col gap-2">
          <p className="text-4xl font-extralight">Announcements of</p>
          <h1 className="text-4xl">
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p className="font-montserrat text-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-90  flex flex-col gap-20 -z-14 py-16">
        <div className="w-[80%] ml-16 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Kitab</h1>
            <p className="font-montserrat text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div className="flex items-center justify-center flex-col md:flex-row md:justify-around">
              {/* <img src='/assets/kitab.png' alt="kitab" className="w-4/5 " /> */}
              <Image
                src={bkg}
                alt="kitab"
                className="w-[60%] md:w-[321px] h-[219px] cursor-pointer border-4 border-white rounded-md"
                placeholder="blur"
                priority
                onClick={() => console.log("Language")}
              />
              <div className="flex flex-col gap-6 items-start">
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    1
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      Riyad As-Sualihin
                    </h3>
                    <p className="text-left text-xs">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    2
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      Sat, Sun, Mon
                    </h3>
                    <p className="text-left text-xs">Weekly schedule </p>
                  </div>
                </div>
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    3
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      fri, Aug 2024
                    </h3>
                    <p className="text-left text-xs">Starts date </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Kitab</h1>
            <p className="font-montserrat text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div className="flex items-center justify-center flex-col md:flex-row md:justify-around">
              {/* <img src='/assets/kitab.png' alt="kitab" className="w-4/5 " /> */}
              <Image
                src={bkg}
                alt="kitab"
                className="w-[60%] md:w-[321px] h-[219px] cursor-pointer border-4 border-white rounded-md"
                placeholder="blur"
                priority
                onClick={() => console.log("Language")}
              />
              <div className="flex flex-col gap-6 items-start">
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    1
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      Riyad As-Sualihin
                    </h3>
                    <p className="text-left text-xs">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    2
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      Sat, Sun, Mon
                    </h3>
                    <p className="text-left text-xs">Weekly schedule </p>
                  </div>
                </div>
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    3
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      fri, Aug 2024
                    </h3>
                    <p className="text-left text-xs">Starts date </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Kitab</h1>
            <p className="font-montserrat text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div className="flex items-center justify-center flex-col md:flex-row md:justify-around">
              {/* <img src='/assets/kitab.png' alt="kitab" className="w-4/5 " /> */}
              <Image
                src={bkg}
                alt="kitab"
                className="w-[60%] md:w-[321px] h-[219px] cursor-pointer border-4 border-white rounded-md"
                placeholder="blur"
                priority
                onClick={() => console.log("Language")}
              />
              <div className="flex flex-col gap-6 items-start">
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    1
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      Riyad As-Sualihin
                    </h3>
                    <p className="text-left text-xs">
                      With lots of unique blocks, you can easily build a page
                      without coding.{" "}
                    </p>
                  </div>
                </div>
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    2
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      Sat, Sun, Mon
                    </h3>
                    <p className="text-left text-xs">Weekly schedule </p>
                  </div>
                </div>
                <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                  <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                    3
                  </p>
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-lg font-semibold normal-case">
                      fri, Aug 2024
                    </h3>
                    <p className="text-left text-xs">Starts date </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Announcements;
