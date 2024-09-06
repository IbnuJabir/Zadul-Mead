"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bkg from "../../../public/assets/announcements_banner.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnnouncementsType } from "@/lib/types";
import { format } from "date-fns";
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
        setAnnouncements(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <Loader />;
  if (!announcements) return <p>No Announcement is available!</p>;
  return (
    <div className="w-full text-white ">
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
            Announcements of
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className=" text-2xl md:text-3xl"
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
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-90  flex flex-col gap-20 -z-14 py-16">
        <div className="w-[70%] mx-auto  flex flex-col gap-10">
          {announcements.map((announcement: AnnouncementsType) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_APP_BACKEND_API}${announcement.coverPicture}`;
            return (
              <div key={announcement._id} className="flex flex-col gap-4">
                <div className="flex items-center justify-center flex-col md:flex-row md:justify-start gap-6 md:gap-20">
                  <Image
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-once="true"
                    src={imageUrl}
                    alt="kitab"
                    width={300}
                    height={300}
                    className="w-[80%] sm:w-[70%] md:min-w-[20rem] md:w-[38%] h-72 cursor-pointer rounded-md border-4 border-white"
                    // placeholder="blur"
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
                        <h3 className="text-xl font-semibold normal-case">
                          {format(
                            new Date(announcement.startingDate),
                            "MMM d, yyyy"
                          )}
                        </h3>
                        <p className="text-left text-xs">starting Date </p>
                      </div>
                    </div>
                    <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                      <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                        3
                      </p>
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="text-xl font-semibold normal-case">
                          {format(
                            new Date(announcement.endDate),
                            "MMM d, yyyy"
                          )}
                        </h3>
                        <p className="text-left text-xs">End date</p>
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
