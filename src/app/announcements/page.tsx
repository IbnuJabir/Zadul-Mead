"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import bkg from "../../../public/assets/announcements_banner.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnnouncementsType } from "@/lib/types";
import { differenceInDays, format } from "date-fns";
import Loader from "../loading";

function Announcements() {
  const [announcements, setAnnouncements] = useState<AnnouncementsType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/announcements/getAllAnnouncements/all`
    )
      .then((res) => res.json())
      .then((data) => {
        // Filter announcements whose end date has not passed
        const validAnnouncements = data.filter(
          (announcement: AnnouncementsType) =>
            new Date(announcement.endDate) > new Date()
        );
        setAnnouncements(validAnnouncements);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (announcements.length === 0) return <p>No announcements available!</p>;

  const calculateDuration = (startDate: Date, endDate: Date) => {
    const days = differenceInDays(endDate, startDate);

    // If duration is more than a day, show only the days remaining
    if (days > 1) {
      return `${days} days`;
    }

    // Otherwise, return the time normally
    return `${days} day`;
  };

  return (
    <div className="w-full text-white overflow-x-hidden">
      <div className="w-full py-10 md:py-0 md:h-[55vh] relative bg-black bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover align-center -z-10"
        />
        <div className="h-[82%] mt-12 md:mt-4 lg:mt-0 ml-3 md:ml-16 w-[96%] md:w-1/2 flex flex-col  gap-3 md:gap-2 items-start justify-end md:pb-10">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl md:text-4xl font-extralight"
          >
            Announcements of
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl md:text-3xl"
          >
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="font-montserrat text-[18px]"
          >
            Stay informed with the latest announcements and updates from ZAD
            AL-MEAD Islamic Center.
          </p>
        </div>
      </div>
      <div className="w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-90 flex flex-col gap-20 -z-14 py-16">
        <div className="w-[70%] mx-auto flex flex-col gap-10">
          {announcements.map((announcement: AnnouncementsType) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_APP_BACKEND_API}${announcement.coverPicture}`;
            const startDate = new Date(announcement.startingDate);
            const endDate = new Date(announcement.endDate);
            const duration = calculateDuration(startDate, endDate);

            return (
              <div key={announcement._id} className="flex flex-col gap-4">
                <div className="flex items-center justify-center flex-col md:flex-row md:justify-start gap-6 md:gap-20">
                  <Image
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    src={imageUrl}
                    alt={announcement.name}
                    width={300}
                    height={300}
                    className="w-[80%] sm:w-[70%] md:min-w-[20rem] md:w-[38%] h-72 cursor-pointer rounded-md border-4 border-white"
                    priority
                  />
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className="flex flex-col gap-8 items-start justify-start"
                  >
                    <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                      <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                        1
                      </p>
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="text-xl font-semibold normal-case">
                          {announcement.name}
                        </h3>
                        <p className="text-left text-xs">
                          {announcement.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                      <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                        2
                      </p>
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="text-lg font-semibold normal-case text-nowrap">
                          {format(startDate, "MMM d")} {" - "}{" "}
                          {format(endDate, "MMM d")}
                        </h3>
                        <p className="text-left text-xs">Date</p>
                      </div>
                    </div>
                    <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                      <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                        3
                      </p>
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="text-xl font-semibold normal-case">
                          {duration}
                        </h3>
                        <p className="text-left text-xs">Duration</p>
                      </div>
                    </div>
                  </div>
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

export default Announcements;
