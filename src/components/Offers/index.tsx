"use-client";
import { IconLibrary } from "@tabler/icons-react";
import React from "react";
import { IoLibrary } from "react-icons/io5";
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
          <IoLibrary className="size-8" />
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-left">Modern Library</h2>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
              A well-equipped library with a vast collection of Islamic
              literature, academic texts, digital resources, and study spaces
              for students to conduct research and study.
            </p>
          </div>
        </div>
        <div
         data-aos="zoom-out"
         data-aos-once="true"
         data-duration="100"
         
        className="h-fit flex flex-col gap-4 items-start justify-start">
          <IoLibrary className="size-8" />
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-left">Modern Library</h2>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
              A well-equipped library with a vast collection of Islamic
              literature, academic texts, digital resources, and study spaces
              for students to conduct research and study.
            </p>
          </div>
        </div>
        <div
          data-aos-once="true"
          data-aos="zoom-out"
         data-duration="100"

          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <IoLibrary className="size-8" />
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-left">Modern Library</h2>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
              A well-equipped library with a vast collection of Islamic
              literature, academic texts, digital resources, and study spaces
              for students to conduct research and study.
            </p>
          </div>
        </div>
        <div
          data-aos-once="true"
         data-aos="zoom-out"
         data-duration="100"

          className="h-fit flex flex-col gap-4 items-start justify-start">
          <IoLibrary className="size-8" />
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-left">Modern Library</h2>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
              A well-equipped library with a vast collection of Islamic
              literature, academic texts, digital resources, and study spaces
              for students to conduct research and study.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <IoLibrary className="size-8" />
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-left">Modern Library</h2>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
              A well-equipped library with a vast collection of Islamic
              literature, academic texts, digital resources, and study spaces
              for students to conduct research and study.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <IoLibrary className="size-8" />
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-left">Modern Library</h2>
            <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
              A well-equipped library with a vast collection of Islamic
              literature, academic texts, digital resources, and study spaces
              for students to conduct research and study.
            </p>
          </div>
        </div>
      </div>
      <div className="h-40 flex items-center justify-center">
        {/* <button className="bg-gray-900 text-white px-4 py-2 rounded-full font-montserrat">
          Register Now
        </button> */}
        <a href="/register">
          <PulsatingButton>Register Now</PulsatingButton>
        </a>
        <a href="/register">
          <PulsatingButton>Register Now</PulsatingButton>
        </a>
      </div>
    </div>
  );
}

export default Offers;
