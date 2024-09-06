"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bkg from "../../../public/assets/programs_root_background.png";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Program, Schedule } from "@/lib/types";
import Loader from "../loading";

function programs() {
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
      <div className="md:px-32 px-10 py-10">
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
        <div className="w-full items-center justify-center grid grid-cols-1 gap-y-8 md:grid-cols-2 py-10">
          {programs
            .filter((program: Program) => program.type === "Mesjid") // Filter programs by type
            .map((program: Program) => (
              <div
                key={program._id}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="true"
                data-aos-delay="100"
                className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg text-lg"
              >
                <p className="font-bold">Program Name : {program.name}</p>
                <p>
                  Started at :{" "}
                  {new Date(program.startingDate).toLocaleDateString()}
                </p>
                <div>
                  <p className="font-bold border-b-2 border-black w-fit">Program Day</p>
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
                <p>Muallif : Sheikh Ahmed </p>
              </div>
            ))}

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
            className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg text-lg"
          >
            <p>Dars Name : 40 Hadith Habashi</p>
            <p>Starting Date : 23/2/2019</p>
            <p>Dars Day : Saturday & Sunday</p>
            <p>Muallif : Sheikh Ahmad </p>
            <p>Muallif : Sheikh Ahmad </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
            className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg text-lg"
          >
            <p>Dars Name : 40 Hadith Habashi</p>
            <p>Starting Date : 23/2/2019</p>
            <p>Dars Day : Saturday & Sunday</p>
            <p>Muallif : Sheikh Ahmad </p>
            <p>Muallif : Sheikh Ahmad </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
            className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg text-lg"
          >
            <p>Dars Name : 40 Hadith Habashi</p>
            <p>Starting Date : 23/2/2019</p>
            <p>Dars Day : Saturday & Sunday</p>
            <p>Muallif : Sheikh Ahmad </p>
            <p>Muallif : Sheikh Ahmad </p>
          </div>
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
        <div className="w-full items-center justify-center grid grid-cols-1 gap-y-8 md:grid-cols-2 py-10">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
            className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg text-lg"
          >
            <p>Dars Name : 40 Hadith Habashi</p>
            <p>Starting Date : 23/2/2019</p>
            <p>Dars Day : Saturday & Sunday</p>
            <p>Muallif : Sheikh Ahmad </p>
            <p>Muallif : Sheikh Ahmad </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="100"
            className="bg-white text-black w-[350px] px-3 py-6 rounded-lg shadow-slate-500 shadow-lg text-lg"
          >
            <p>Dars Name : 40 Hadith Habashi</p>
            <p>Starting Date : 23/2/2019</p>
            <p>Dars Day : Saturday & Sunday</p>
            <p>Muallif : Sheikh Ahmad </p>
            <p>Muallif : Sheikh Ahmad </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default programs;
