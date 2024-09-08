"use-client";

import React from "react";
import { IoLibrary } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { GiFamilyHouse } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { MdHouse } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import PulsatingButton from "../ui/pulsating-button";
import { FaBook, FaBookOpen, FaHistory } from "react-icons/fa";
import { FaAnglesUp } from "react-icons/fa6";
import { VscLaw } from "react-icons/vsc";
import language from "../../../public/assets/language.png";
import Image from "next/image";
function Offers() {
  return (
    <div className="pt-10 bg-about-bkg md:bg-about-desktop-bkg bg-no-repeat bg-cover">
      <div className="h-fit w-[90%] bg-[#202020] font-light grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-white  m-auto rounded-3xl p-8 md:py-10">
        <div
          data-aos="zoom-out"
          data-aos-once="true"
          data-duration="200"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <div className="flex  gap-3 items-center w-full">
            <FaBookOpen className="size-14 md:size-10" />

            <h2 className="text-left">Qur'an Studies and Tafsir</h2>
          </div>
          <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            Learn the meanings and teachings of the Qur'an to better understand
            Allah's words and guidance.
          </p>
        </div>
        <div
          data-aos-once="true"
          data-aos="zoom-out"
          data-duration="300"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <div className="flex items-center gap-3 w-full">
            <FaBook className="size-8" />

            <h2 className="text-left">Hadith and Sunnah</h2>
          </div>
          <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            Study the sayings and actions of Prophet Muhammad (PBUH) to follow
            his example in daily life.
          </p>
        </div>
        <div
          data-aos-once="true"
          data-aos="zoom-out"
          data-duration="400"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <div className="flex items-center gap-3 w-full">
            <VscLaw className="size-12" />
            <h2 className="text-left">Islamic Law (Fiqh)</h2>
          </div>
          <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            Understand the rules of Islamic life, from worship to family
            matters, and how to live according to them.
          </p>
        </div>
        <div
          data-aos-once="true"
          data-aos="zoom-out"
          data-duration="500"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <div className="flex items-center gap-3 w-full">
            <Image src={language} width={100} height={100} alt="language" className="w-10" />

            <h2 className="text-left">Arabic Language</h2>
          </div>
          <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            Improve your reading and understanding of Islamic texts by learning
            the basics of the Arabic language.
          </p>
        </div>
        <div
          data-aos-once="true"
          data-aos="zoom-out"
          data-duration="600"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <div className="flex items-center gap-3 w-full">
            <FaHistory className="size-8" />

            <h2 className="text-left">Islamic History</h2>
          </div>
          <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            Discover key events and figures from Islamic history that have
            shaped the Muslim world.
          </p>
        </div>
        <div
          data-aos-once="true"
          data-duration="100"
          data-aos="zoom-out"
          className="h-fit flex flex-col gap-4 items-start justify-start"
        >
          <div className="w-full flex gap-3 items-center">
            <FaAnglesUp className="size-16 md:size-10" />

            <h2 className="text-left">Islamic Morals and Spiritual Growth</h2>
          </div>
          <p className="w-full font-montserrat text-[11px] text-gray-300 text-left">
            Learn how to live a good and moral life through Islamic teachings,
            focusing on character and inner growth.
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
