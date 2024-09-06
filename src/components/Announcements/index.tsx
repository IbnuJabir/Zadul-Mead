"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { AnnouncementsType } from "@/lib/types";
import Loader from "@/app/loading";
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
    <div className="overflow-x-hidden w-full bg-announcement-phone-bkg  md:bg-announcement-bkg bg-no-repeat bg-cover md:bg-top flex items-center justify-center  flex-col py-8">
      <h1 className="text-3xl  mb-10 text-left md:w-[70%] ">ANNOUNCEMENTS</h1>
      {announcements.slice(0, 1).map((announcement: AnnouncementsType) => {
        const imageUrl = `${process.env.NEXT_PUBLIC_APP_BACKEND_API}${announcement.coverPicture}`;
        return (
          <div
            key={announcement._id}
            className="flex items-center justify-center flex-col gap-4 md:flex-row"
          >
            <Image
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              src={imageUrl}
              alt="kitab"
              width={300}
              height={300}
              className="w-[60%] md:w-[40%] h-80 cursor-pointer rounded-md"
              // placeholder="blur"
              priority
            />
            <div
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="true"
              className="flex flex-col gap-6 items-start"
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
                    {format(new Date(announcement.startingDate), "MMM d, yyyy")}
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
                    {format(new Date(announcement.endDate), "MMM d, yyyy")}
                  </h3>
                  <p className="text-left text-xs">End date</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div data-aos="zoom-in" className="w-[90%] flex justify-end">
        <a
          href="/announcements"
          className="w-fit text-[#161C2D] hover:text-blue-500 mr-5 mt-10 flex items-center gap-2 cursor-pointer"
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
    </div>
  );
}

export default Announcements;
