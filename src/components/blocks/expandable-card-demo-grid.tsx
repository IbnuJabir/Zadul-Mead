"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import medrasa from "../../../public/assets/medrasa.jpg";
import office from "../../../public/assets/office.jpg";
import mesjid from "../../../public/assets/insideMesjid.jpg";
export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px]  h-full md:h-fit md:max-h-[100%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl "
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-80 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full md:w-[50%]  2xl:w-[25%] h-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 relative py-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              offScreen:
                index === 0
                  ? { opacity: 0, x: "-40%" }
                  : index === 1
                  ? { opacity: 0, x: "40%" }
                  : index === 2
                  ? { opacity: 0, x: "-40%" }
                  : { opacity: 0 },
              onScreen: { opacity: 1, x: 0 },
            }}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="flex flex-col bg-red-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  priority
                  placeholder="blur"
                  width={200}
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className={`h-[16rem] w-[50%] absolute rounded-lg object-cover border-white border-4 object-center md:h-[20rem] ${
                    index === 0
                      ? "md:top-[8%] md:left-2 left-[4%] md:w-[15rem] md:h-[20rem]"
                      : index === 1
                      ? "md:top-0 right-[4%] md:right-auto md:w-[13rem] md:h-[17rem]"
                      : index === 2
                      ? "md:top-[40%] lg:top-[35%] xl:top[20%]  md:left-[37%] left-[4%] md:w-[12rem] md:h-[18rem]"
                      : ""
                  } absolute`}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Zadul Mead Medrasa",
    title: "Madresa",
    src: medrasa,
    ctaText: "Visit",
    ctaLink: "https://zadalmead.com/",
    content: () => {
      return (
        <>
          <p>
            Zad Al-Mead Medresa is dedicated to providing structured Islamic
            education, where students are guided by qualified teachers in
            learning the Qur&apos;an, Hadith, Aqidah, Menhaj, Fiqh and sira.
            It&apos;s a place where knowledge is imparted with care and
            attention to detail, helping students develop a strong foundation in
            Islamic principles while nurturing their spiritual growth.
          </p>
        </>
      );
    },
  },
  {
    description: "Zadul Mead Medrasa",
    title: "Badr Mesjid",
    src: mesjid,
    ctaText: "Visit",
    ctaLink: "https://zadalmead.com/",
    content: () => {
      return (
        <p>
          Badr serves as the spiritual core of the center, offering a space for
          prayer, reflection, and communal gatherings. It&apos;s not only a
          place for prayer but also a welcoming environment for guests and
          community members. The masjid plays a central role in promoting
          Islamic teachings and fostering unity among the faithful.
        </p>
      );
    },
  },

  {
    description: "Zadul Mead Medrasa",
    title: "Office",
    src: office,
    ctaText: "Visit",
    ctaLink: "https://zadalmead.com/",
    content: () => {
      return (
        <p>
          in our office, we manages the overall operations of the center,
          ensuring all Islamic teachings and activities align with values and
          mission of islam. we handles administrative tasks, oversees events,
          and supports the educational goals of the medrasa. The office also
          welcomes and assists guests, providing them with guidance and
          information about the center&apos;s services.
        </p>
      );
    },
  },
];
