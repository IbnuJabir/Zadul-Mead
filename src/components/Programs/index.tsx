"use client";
import Lottie from "lottie-react";
import greenLive from "@/app/redliveicon.json";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { useEffect, useState } from "react";
import Loader from "@/app/loading";
import { Program, Schedule } from "@/lib/types";
import { getAllPrograms } from "@/API";

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setLoading] = useState(true);
  // const allPrograms = getAllPrograms();
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/programs/getAllPrograms/all`
    )
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <Loader />;
  if (!programs) return <h1>No Programs Available!</h1>;
  return (
    <div className="w-full overflow-x-hidden bg-programs-bkg bg-no-repeat bg-cover bg-center p-6 flex flex-col gap-16">
      <div className="flex flex-col gap-2 md:ml-10">
        <h1 className="text-white text-xl md:text-2xl text-left ">
          Programs <br />
          at <span className="font-bold">Badir Masjid</span>
        </h1>
        <p className="text-gray-300 text-left text-lg font-montserrat">
          Learning for All Ages and Levels
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-once="true"
        data-aos-delay="100"
        className="w-[70%] xs:max-w-[48%] sm:max-w-[35%] md:max-w-[30%] lg:max-w-[22%] xl:max-w-[20%] 2xl:max-w-[18%]  h-16 mx-auto overflow-hidden bg-white rounded-lg flex items-center justify-start font-montserrat"
      >
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
      <div
        data-aos="zoom-out"
        data-aos-duration="800"
        data-aos-once="true"
        data-aos-delay="100"
        className="w-full grid grid-cols-2 gap-y-8 md:grid-cols-3"
      >
        {programs.map((program: Program) => (
          <BentoGrid
            key={program._id}
            className="w-[120px] h-[70px] bg-white rounded-lg mt-6"
          >
            <BentoGridItem
              title={program.name}
              description={program.schedule
                .map((val: Schedule) => val.day)
                .join(", ")}
            />
          </BentoGrid>
        ))}
        <BentoGrid className="w-[120px] h-[70px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>{" "}
        <BentoGrid className="w-[120px] h-[70px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>{" "}
        <BentoGrid className="w-[120px] h-[70px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>{" "}
        <BentoGrid className="w-[120px] h-[70px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>{" "}
        <BentoGrid className="w-[120px] h-[70px] bg-white rounded-lg mt-6">
          <BentoGridItem title={"Qur'an Tafsir"} description={"sat, sun"} />
        </BentoGrid>
      </div>
      <a
        href="/programs"
        className="text-right text-white mr-5 mt-10 flex items-center justify-end gap-1 cursor-pointertext-whit "
      >
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
      </a>
    </div>
  );
}

export default Programs;
