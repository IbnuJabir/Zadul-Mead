"use client";

function About() {
  return (
    <div className=" text-center bg-about-bkg w-full min-h-screen bg-cover bg-no-repeat bg-center text-black">
      <h3 className="text-2xl font-semibold pb-4">ABOUT ZADULMEAD</h3>
      <h2 className="text-2xl font-semibold mb-6">OUR JOURNEY, OUR VISION</h2>
      <div className="font-montserrat px-4 flex flex-col gap-2">
        <p className="text-xl font-semibold mt-4 mb-2">Who We Are</p>
        <p className="mb-6">
          Established in [2000], Zadul-Mead is dedicated to
          providing high-quality Islamic education. Our center is a welcoming
          space for individuals seeking to enhance their knowledge and practice
          of Islam.
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
        <p
          className="text-right text-blue-700 mr-5 mt-10 flex items-center justify-end gap-2 cursor-pointer
        "
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
        </p>
      </div>
    </div>
  );
}

export default About;
