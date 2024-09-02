import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Announcements from "@/components/Announcements";
import Programs from "@/components/Programs";
import ScrollDown from "@/components/ScrollDown";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Highlights from "@/components/Highlights";
import Offers from "@/components/Offers";
import Contact from "@/components/Contact";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import Footer from "@/components/Footer";
import Image from "next/image";
import bkg from "../../public/assets/home_background1.png";
const Home: React.FC = () => {
  return (
    <>
      <div className="w-full h-[100svh] bg-[#f5f5f5] relative bg-no-repeat bg-center bg-cover font-cinzel z-10">
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover -z-10"
        />
        <Navbar />
        <div className="w-full h-[89%] flex flex-col items-center md:items-start justify-center gap-6 lg:pl-16 md:pl-12">
          <h1 className="text-white text-[23.2px] font-normal tracking-tight text-center md:text-left lg:text-[45px]">
            WELCOME TO
            <span className="font-bold mr-1">
              {" "}
              <br></br>ZAD AL-MEAD{" "}
            </span>{" "}
            Islamic Center
          </h1>
          <p className="font-montserrat w-9/12 text-white text-lg font-normal tracking-tight text-center md:text-left opacity-70 lg:text-[24px]">
            A Community of Faith, Learning, and Spiritual Growth
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <HoverBorderGradient children={"Join our Community"} />

            {/* <button className="w-max px-4 py-2 font-montserrat rounded-[26.24px] border-none flex text-center items-center bg-white mt-12 lg:px-3 ">
            Join our Community
          </button> */}
            <a
              href="/register"
              className="w-max px-4 py-2 font-montserrat rounded-[26.24px] border-none flex text-center items-center bg-white lg:px-3 "
            >
              Register Now
            </a>
          </div>
          <ScrollDown />
        </div>
        <About />
        <Announcements />
        <Programs />
        <Highlights />
        <Offers />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
