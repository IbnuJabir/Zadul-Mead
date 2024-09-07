"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bkg from "../../../public/assets/programs_root_background.png";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Program, Schedule } from "@/lib/types";
import Loader from "../loading";
import kitabTewhid from "../../../public/assets/kitab-tewhid.png";

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
     <div className=" flex flex-col md:ml-[18%] ml-[18%] py-10">
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
        <div className="w-full grid grid-cols-1 gap-y-8 md:grid-cols-2  items-center justify-center py-10">
          {programs
            .filter((program: Program) => program.type === "Mesjid") // Filter programs by type
            .map((program: Program) => (
              
              <div
                key={program._id}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="true"
                data-aos-delay="100"
                className="bg-white text-black w-[300px]  rounded-xl shadow-slate-500 shadow-lg "
              >
                <p className="bg-[#474747] text-white py-1 px-2 w-fit rounded-br-lg rounded-tl-lg">{program.name}</p>
                <div className="px-10 py-6">
                  <Image    
                    src={kitabTewhid}
                    alt="Ders kitab"
                    className="w-[230px] items-center  rounded-xl"
                    />
              
                <p className="py-2">
                  Started at :{" "}
                  {new Date(program.startingDate).toLocaleDateString()}
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
                    const endTime = new Date(val.endTime).toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    );

                    return (
                      <p key={val._id}>
                        {val.day}: {startTime} - {endTime}
                      </p>
                    );
                  })}
                </div>
                <div className="w-28 h-[1px] mt-6 mb-3 bg-gray-500 before:w-10 before:h-10 before:bg-gray-500 before:rounded-full relative">
                  <div className="w-2 h-2 bg-gray-500 rounded-full absolute -mt-1"></div>
                  </div>
                <p>Muallif : Sheikh Ahmed </p>
                <p>Muallif : Sheikh Ahmed </p>
                
              </div>
              </div>
            ))}

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
        <div className="w-full  grid grid-cols-1 gap-y-8 md:grid-cols-2 items-center justify-center py-10">
        {programs
            .filter((program: Program) => program.type === "Mesjid") // Filter programs by type
            .map((program: Program) => (
              
              <div
                key={program._id}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="true"
                data-aos-delay="100"
                className="bg-white text-black w-[300px]  rounded-xl shadow-slate-500 shadow-lg "
              >
                <p className="bg-[#474747] text-white py-1 px-2 w-fit rounded-br-lg rounded-tl-lg">{program.name}</p>
                <div className="px-10 py-6">
                  <Image    
                    src={kitabTewhid}
                    alt="Ders kitab"
                    className="w-[230px] items-center  rounded-xl"
                    />
              
                <p className="py-2">
                  Started at :{" "}
                  {new Date(program.startingDate).toLocaleDateString()}
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
                    const endTime = new Date(val.endTime).toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      }
                    );

                    return (
                      <p key={val._id}>
                        {val.day}: {startTime} - {endTime}
                      </p>
                    );
                  })}
                </div>
                <div className="w-28 h-[1px] mt-6 mb-3 bg-gray-500 before:w-10 before:h-10 before:bg-gray-500 before:rounded-full relative">
                  <div className="w-2 h-2 bg-gray-500 rounded-full absolute -mt-1"></div>
                  </div>
                <p>Muallif : Sheikh Ahmed </p>
                <p>Muallif : Sheikh Ahmed </p>
                
              </div>
              </div>
            ))}
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default Programs;
