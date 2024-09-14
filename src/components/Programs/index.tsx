"use client";
import Lottie from "lottie-react";
import greenLive from "@/app/redliveicon.json";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { useEffect, useState } from "react";
import Loader from "@/app/loading";
import { Program, Schedule, TodayProgram } from "@/lib/types";
import { getAllPrograms } from "@/API";
import dayjs from "dayjs";
import Unavailable from "../Commons/Unavailable";
import ProgramsUnavailable from "../Commons/programsNotAvailable";

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [nextProgram, setNextProgram] = useState<{
    programName: string;
    timeLeft: string;
  } | null>(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/programs/getAllPrograms/all`
    )
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data);
        setLoading(false);
        setCountdown(data);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
        setLoading(false);
        setHasError(true);
      });
  }, []);

  const setCountdown = (programs: Program[]) => {
    const todayName = dayjs().format("dddd");

    const todaysProgramsList: TodayProgram[] = []; // Temporary list to hold today's programs

    for (const program of programs) {
      for (const schedule of program.schedule) {
        if (schedule.day.toLowerCase() === todayName.toLowerCase()) {
          // Add the program to today's program list
          todaysProgramsList.push({
            programName: program.name,
            startTime: schedule.startTime,
            endTime: schedule.endTime,
          });
        }
      }
    }

    // Find the nearest program
    findNearestProgram(todaysProgramsList);
  };

  // Function to find the nearest program to now
  const findNearestProgram = (todaysProgramsList: TodayProgram[]) => {
    const now = dayjs();
    let nearestProgram: TodayProgram | null = null;
    let minTimeDiff = Infinity;

    for (const program of todaysProgramsList) {
      let programStart;

      // Try parsing the full datetime string using dayjs
      programStart = dayjs(program.startTime);

      if (!programStart.isValid()) {
        console.error("Invalid startTime format:", program.startTime);
        continue; // Skip this program if the startTime is invalid
      }

      // Calculate the time difference from now
      const timeDiff = programStart.diff(now);

      // console.log("Time Difference (ms):", timeDiff);

      // Find the nearest future program
      if (timeDiff > 0 && timeDiff < minTimeDiff) {
        nearestProgram = program;
        minTimeDiff = timeDiff;
      }
    }

    if (nearestProgram) {
      updateCounter(nearestProgram.programName, minTimeDiff); // Update countdown with nearest program
    }
  };

  // Update the countdown timer and state
  const updateCounter = (programName: string, timeDifference: number) => {
    const interval = setInterval(() => {
      if (timeDifference <= 0) {
        clearInterval(interval);
        return;
      }
      timeDifference -= 1000;
      const { hours, minutes, seconds } = formatTimeLeft(timeDifference);
      setNextProgram({
        programName,
        timeLeft: `${hours}:${minutes}:<span class="text-red-600">${seconds}</span>`,
      });
    }, 1000);
  };

  // Helper function to format the time left in hours, minutes, and seconds
  const formatTimeLeft = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const truncateName = (name: string, maxLength: number) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...";
    }
    return name;
  };
  if (isLoading) return <Loader />;
  if (hasError) return <Unavailable message="Unable to load Programs" />;

  return (
    <div className="w-full relative min-h-[40rem] overflow-x-hidden bg-programs-bkg bg-no-repeat bg-cover bg-center p-3 flex flex-col justify-center gap-16 pt-20">
      {nextProgram && (
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-once="true"
          data-aos-delay="100"
          className="md:absolute md:right-[5%] md:top-[2%] md:mt-5 pr-4 w-[70%] xs:max-w-[48%] sm:max-w-[35%] md:max-w-[30%] lg:max-w-[22%] xl:max-w-[20%] 2xl:max-w-[18%] h-16 mx-auto overflow-hidden bg-white rounded-lg flex items-center justify-start font-montserrat"
        >
          <div className="w-15 h-full flex">
            <Lottie animationData={greenLive} loop={true} />
          </div>
          <p className="text-2xl w-1/2 font-bold text-center">Live</p>
          <div className="w-[80%] flex flex-col items-start justify-center">
            <div className="flex items-center justify-start gap-2 w-full">
              <p dangerouslySetInnerHTML={{ __html: nextProgram.timeLeft }} />
              <p>left</p>
            </div>
            <p className="text-nowrap">
              to start {truncateName(nextProgram.programName, 6)}
            </p>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-white text-xl md:text-3xl md:ml-7 md:-mt-10 ">
          Programs at Badir <span className="font-bold">Masjid</span>
        </h1>
      </div>
      {programs.filter((program: Program) => program.type === "Mesjid").length >
      0 ? (
        <div
          data-aos="zoom-out"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="100"
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:grid-cols-3"
        >
          {programs
            .filter((program: Program) => program.type === "Mesjid") // Filter programs by type
            .slice(0, 3) // Get the top 3 programs
            .map((program: Program) => (
              <BentoGrid
                key={program._id}
                className="w-[70%] xs:w-[60%] sm:w-[80%] md:w-[70%] lg:w-[55%] h-[70px] bg-white rounded-lg mt-3 py-2"
              >
                <BentoGridItem
                  title={program.name}
                  description={program.schedule
                    .map((val: Schedule) => val.day)
                    .join(", ")}
                />
              </BentoGrid>
            ))}
        </div>
      ) : (
        <ProgramsUnavailable message="Currently No Programs available At Badr Masjid" />
      )}

      <div>
        <h1 className="text-white text-xl md:text-3xl md:ml-7 ">
          Programs at Zad Al-Mead <span className="font-bold">Medresa</span>
        </h1>
      </div>
      {programs.filter((program: Program) => program.type === "Merkez").length >
      0 ? (
        <div
          data-aos="zoom-out"
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay="100"
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:grid-cols-3"
        >
          {programs
            .filter((program: Program) => program.type === "Merkez") // Filter programs by type "Merkez"
            .slice(0, 3) // Get the top 3 programs
            .map((program: Program) => (
              <BentoGrid
                key={program._id}
                className="w-[70%] xs:w-[60%] sm:w-[80%] md:w-[70%] lg:w-[55%] h-[70px] bg-white rounded-lg mt-3 py-2"
              >
                <BentoGridItem
                  title={program.name}
                  description={program.schedule
                    .map((val: Schedule) => val.day)
                    .join(", ")}
                />
              </BentoGrid>
            ))}
        </div>
      ) : (
        <ProgramsUnavailable message="Currently no programs available at our madrasa" />
      )}

      <a
        href="/programs"
        className="text-right text-white hover:text-blue-500 mr-5 mb-6 flex items-center justify-end gap-1 cursor-pointer"
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
