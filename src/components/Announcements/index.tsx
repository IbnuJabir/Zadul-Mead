"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnnouncementsType } from "@/lib/types";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from "date-fns";
import Loader from "@/app/loading";
import Unavailable from "../Commons/Unavailable";

function Announcements() {
  const [announcements, setAnnouncements] = useState<AnnouncementsType[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/announcements/getAllAnnouncements/all`
    )
      .then((res) => res.json())
      .then((data) => {
        const validAnnouncements = data.filter(
          (announcement: AnnouncementsType) =>
            new Date(announcement.endDate) > new Date()
        );
        // setAnnouncements(validAnnouncements);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        setLoading(false);
        setHasError(true);
      });
  }, []);

  const calculateDuration = (startDate: Date, endDate: Date) => {
    if (endDate < startDate) {
      [startDate, endDate] = [endDate, startDate];
    }

    const days = differenceInDays(endDate, startDate);
    const hours = differenceInHours(endDate, startDate) % 24;
    const minutes = differenceInMinutes(endDate, startDate) % 60;

    let duration = "";
    if (days > 0) duration += `${days} day${days > 1 ? "s" : ""}`;
    else if (hours > 0)
      duration +=
        (duration ? ", " : "") + `${hours} hour${hours > 1 ? "s" : ""}`;
    else if (minutes > 0 || duration === "")
      duration +=
        (duration ? ", " : "") + `${minutes} minute${minutes > 1 ? "s" : ""}`;

    return duration;
  };

  if (isLoading) return <Loader />;
  if (hasError) return <Unavailable message="Unable to load announcements" />;

  return (
    <div className="overflow-x-hidden w-full bg-announcement-phone-bkg md:bg-announcement-bkg bg-no-repeat bg-cover md:bg-top flex items-center justify-center flex-col py-8">
      <h1 className="text-3xl mb-10 text-left md:w-[70%]">ANNOUNCEMENTS</h1>
      {announcements.length > 0 ? (
        announcements.slice(0, 1).map((announcement: AnnouncementsType) => {
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
        })
      ) : (
        <Unavailable message="No Announcements Available!" />
      )}
      {announcements.length > 0 && (
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
      )}
    </div>
  );
}

export default Announcements;
