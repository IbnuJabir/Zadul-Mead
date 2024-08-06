"use client";
import Lottie from "lottie-react";
import greenLive from "@/app/redliveicon.json";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Link from "next/link";

function Programs() {
  return (
    <div className="w-full h-full bg-programs-bkg bg-no-repeat bg-cover bg-center p-6 flex flex-col gap-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-2xl text-left ">
          Programs <br />
          at <span className="font-bold">Badir Masjid</span>
        </h1>
        <p className="text-gray-300 text-left text-lg font-montserrat">
          Learning for All Ages and Levels
        </p>
      </div>
      <div className="w-2/3 h-16 mx-auto overflow-hidden bg-white rounded-lg flex items-center justify-start font-montserrat">
        <div className="w-15 h-full flex ">
          <Lottie animationData={greenLive} loop={true} />
        </div>
        <p className="text-2xl w-1/2 font-bold text-center">Live</p>
        <div className="w-[80%] flex flex-col items-start justify-center">
          <div className="flex items-center justify-start gap-2 w-full">
            <p>
              10:07:<span className="text-red-600">52</span>
            </p>
            <p>left</p>
          </div>
          <p className="">to start Tafsir</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-y-8 md:grid-cols-3">
        <BentoGrid className="w-[173px] h-[78px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>
        <BentoGrid className="w-[173px] h-[78px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>
        <BentoGrid className="w-[173px] h-[78px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>
        <BentoGrid className="w-[173px] h-[78px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>
        <BentoGrid className="w-[173px] h-[78px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>
        <BentoGrid className="w-[173px] h-[78px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>
      </div>
      <Link href="/programs" className="text-right text-white mr-5 mt-10 flex items-center justify-end gap-1 cursor-pointertext-whit">
          MORE{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
      </Link>
    </div>
  );
}

export default Programs;
