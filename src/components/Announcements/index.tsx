"use client";

import Image from "next/image";
import annnouncement from "../../../public/assets/kitab.png";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { AnnouncementsType } from "@/lib/types";
function Announcements() {
  const [announcements, setAnnouncements] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/announcements/getAllAnnouncements/all`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Announcements", data);
        setAnnouncements(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!announcements) return <p>No Announcement is available!</p>;
  return (
    <div className="w-full bg-announcement-phone-bkg  md:bg-announcement-bkg bg-no-repeat bg-cover md:bg-top flex items-center justify-center  flex-col py-8">
      <h1 className="text-3xl  mb-10 text-left md:w-[70%] ">ANNOUNCEMENTS</h1>
      {announcements.map((announcement: AnnouncementsType) => {
        const imageUrl = `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/${announcement.coverPicture}`;
        return (
          <div className="flex items-center justify-center flex-col md:flex-row">
            {/* <img src='/assets/kitab.png' alt="kitab" className="w-4/5 " /> */}
            <Image
            src={imageUrl}
            alt="kitab"
            width={300}
            height={300}
            className="w-[60%] md:w-[40%] h-80 cursor-pointer rounded-md"
            // placeholder="blur"
            priority
            onClick={() => console.log("Language")}
          />
            {/* <Image
              src={imageUrl}
              alt={announcement.name}
              width={500}
              height={300}
              objectFit="cover"
            /> */}
            <div className="flex flex-col gap-6 items-start">
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
                    {format(new Date(announcement.startingDate),'MMM d, yyyy')}
                  </h3>
                  <p className="text-left text-xs">starting Date</p>
                </div>
              </div>
              <div className="w-full font-montserrat px-4 flex items-top justify-left gap-4">
                <p className="w-8 h-6 text-black p-4 bg-slate-200 rounded-full flex items-center justify-center">
                  3
                </p>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-xl font-semibold normal-case">
                   {format(new Date(announcement.endDate),'MMM d, yyyy')}
                  </h3>
                  <p className="text-left text-xs">End date </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Announcements;
