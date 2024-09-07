"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bkg from "../../../public/assets/programs_root_background.png";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Program, Schedule } from "@/lib/types";
import Loader from "../loading";
import { formatDistanceToNow, isFuture, isToday } from "date-fns";

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setLoading] = useState(true);

  // Fetch programs
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

  // // Helper function to format date difference using date-fns
  // import { formatDistanceToNow, isFuture, isToday } from "date-fns";

  const getDateDifferenceMessage = (startingDate: string) => {
    const startDate = new Date(startingDate);

    if (isToday(startDate)) {
      return (
        <span>
          <span className="font-bold">starts:</span> today
        </span>
      );
    }

    if (isFuture(startDate)) {
      return (
        <span>
          <span className="font-bold">will start:</span>{" "}
          {formatDistanceToNow(startDate, { addSuffix: false })}
        </span>
      );
    }

    return (
      <span>
        <span className="font-bold">started:</span>{" "}
        {formatDistanceToNow(startDate)} ago
      </span>
    );
  };

  if (isLoading) return <Loader />;
  if (!programs.length) return <h1>No Programs Available!</h1>;

  return (
    <div className="overflow-x-hidden w-full text-white bg-black">
      <div className="w-full py-10 md:py-0 md:h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover align-center -z-10"
        />
        <div className="mt-12 ml-6 md:ml-16 w-[95%] md:w-1/2 flex flex-col gap-2">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl md:text-4xl font-extralight"
          >
            Programs at
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className=" text-2xl md:text-3xl"
          >
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Community
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="font-montserrat text-[18px]"
          >
            Discover the ongoing programs at both Badr Masjid and our Medrasa.
          </p>
        </div>
      </div>
      <div className="md:px-40 px-16 py-10">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
            className="text-white text-xl md:text-3xl md:ml-2  font-cinzel mt-5"
          >
            Programs at Badir <span className="font-bold">Masjid</span>
          </h1>
        </div>
        <div className="w-full mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
          {programs
            .filter((program: Program) => program.type === "Mesjid") // Filter programs by type
            .map((program: Program) => {
              const imageUrl = `${process.env.NEXT_PUBLIC_APP_BACKEND_API}${program.coverPicture}`;

              return (
                <div
                  key={program._id}
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-once="true"
                  data-aos-delay="100"
                  className="bg-white mx-auto text-black w-[300px] max-h-[560px] rounded-xl shadow-slate-500 shadow-lg"
                >
                  <p className="bg-[#474747] text-white py-1 px-2 w-fit rounded-br-lg rounded-tl-lg">
                    {program.name}
                  </p>
                  <div className="px-10 py-6 flex flex-col items-start justify-between">
                    <Image
                      src={imageUrl}
                      alt="Program Cover"
                      width={300}
                      height={300}
                      className="w-[230px] items-center rounded-xl"
                    />

                    <p className="py-2">
                      {getDateDifferenceMessage(program.startingDate)}
                    </p>

                    <div>
                      <p className="font-bold w-fit my-1">Program Day</p>
                      {program.schedule.map((val: Schedule) => {
                        const startTime = new Date(
                          val.startTime
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });
                        const endTime = new Date(
                          val.endTime
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });

                        return (
                          <p key={val._id}>
                            {val.day}: {startTime} - {endTime}
                          </p>
                        );
                      })}
                    </div>

                    <div className="w-28 h-[1px] mt-3 mb-2 bg-gray-500 before:w-10 before:h-10 before:bg-gray-500 before:rounded-full relative">
                      <div className="w-2 h-2 bg-gray-500 rounded-full absolute -mt-1"></div>
                    </div>
                    {program?.mualif && (
                      <p>
                        <span className="font-semibold">Muallif :</span>{" "}
                        {program?.mualif}{" "}
                      </p>
                    )}
                    {program?.qireatGivenBy && (
                      <p>
                        <span className="font-semibold">Given By :</span>
                        {program?.qireatGivenBy}{" "}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
            className="text-white text-xl md:text-3xl md:ml-2  font-cinzel mt-10"
          >
            Programs at Zadul Mead <span className="font-bold">Medresa</span>
          </h1>
        </div>
        <div className="w-full mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
          {programs
            .filter((program: Program) => program.type === "Merkez") // Filter programs by type
            .map((program: Program) => {
              const imageUrl = `${process.env.NEXT_PUBLIC_APP_BACKEND_API}${program.coverPicture}`;

              return (
                <div
                  key={program._id}
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-once="true"
                  data-aos-delay="100"
                  className="bg-white mx-auto text-black w-[300px] max-h-[560px] rounded-xl shadow-slate-500 shadow-lg hover:bg-[#80807F] hover:bg-opacity-100 hover:text-white"
                >
                  <p className="bg-[#474747] text-white py-1 px-2 w-fit rounded-br-lg rounded-tl-lg group-hover:bg-white group-hover:text-black">
                    {program.name}
                  </p>
                  <div className="px-10 py-6 flex flex-col items-start justify-between">
                    <Image
                      src={imageUrl}
                      alt="Program Cover"
                      width={300}
                      height={300}
                      className="w-[230px] items-center rounded-xl"
                    />

                    <p className="py-2">
                      {getDateDifferenceMessage(program.startingDate)}
                    </p>

                    <div>
                      <p className="font-bold w-fit my-1">Program Day</p>
                      {program.schedule.map((val: Schedule) => {
                        const startTime = new Date(
                          val.startTime
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });
                        const endTime = new Date(
                          val.endTime
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        });

                        return (
                          <p key={val._id}>
                            {val.day}: {startTime} - {endTime}
                          </p>
                        );
                      })}
                    </div>

                    <div className="w-28 h-[1px] mt-3 mb-2 bg-gray-500 before:w-10 before:h-10 before:bg-gray-500 before:rounded-full relative">
                      <div className="w-2 h-2 bg-gray-500 rounded-full absolute -mt-1"></div>
                    </div>
                    {program?.mualif && (
                      <p>
                        <span className="font-semibold">Muallif :</span>{" "}
                        {program?.mualif}{" "}
                      </p>
                    )}
                    {program?.qireatGivenBy && (
                      <p>
                        <span className="font-semibold">Given By :</span>
                        {program?.qireatGivenBy}{" "}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Programs;
