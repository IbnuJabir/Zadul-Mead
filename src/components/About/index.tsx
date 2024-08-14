"use client";
import { AnimatePresence, motion } from "framer-motion";

function About() {
  return (
    <div className=" text-center bg-about-bkg w-full min-h-screen bg-cover bg-no-repeat bg-center text-black pt-10 pb-4">
      <motion.div
        variants={{
          offScreen: { opacity: 0, y: "100%" },
          onScreen: { opacity: 1, y: 0 },
        }}
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          type: "twin",
          // delay: 1.5,
          duration: 1,
          // stiffness: 8,
        }}
      >
        <h3 className="text-2xl font-semibold pb-4">ABOUT ZAD AL-MEAD</h3>
        <h2 className="text-2xl font-semibold mb-6">OUR JOURNEY, OUR VISION</h2>
      </motion.div>
      <div className="font-montserrat px-4 flex flex-col gap-2 md:w-[70%] lg:m-auto">
        <p className="text-xl font-semibold mt-4 mb-2">Who We Are</p>
        <p className="mb-6">
          Established in [2000], Zadul-Mead is dedicated to providing
          high-quality Islamic education. Our center is a welcoming space for
          individuals seeking to enhance their knowledge and practice of Islam.
        </p>

        <p className="text-xl font-semibold mt-4 mb-2">Our Vision</p>
        <p className="mb-6">
          We envision a world where Islamic knowledge is accessible to all,
          fostering a community of learned, compassionate, and socially
          responsible individuals.
        </p>

        <p className="text-xl font-semibold mt-4 mb-2">Our Values</p>
        <p>
          We are committed to the principles of faith, knowledge, and community.
          Our programs are designed to instill these values in our students,
          encouraging them to apply their learning in all aspects of life.
        </p>
        <div className="flex justify-end">
          <a
            href="/about"
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
    </div>
  );
}

export default About;
