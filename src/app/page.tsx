

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
const Home: React.FC = () => {
  return (
    <>
      <div className="w-full h-[100svh] bg-[#f5f5f5] bg-home-bkg md:bg-home-bkg-desktop bg-no-repeat bg-center bg-cover font-cinzel">
      <Navbar />
        <div className="w-full h-full flex flex-col items-center md:items-start justify-center gap-6 lg:pl-16 md:pl-12">
          <h1 className="text-white text-[23.2px] font-normal tracking-tight text-center md:text-left lg:text-[45px]">
            WELCOME TO
            <span className="font-bold mr-1">
              {" "}
              <br></br>ZADUL MEAD{" "}
            </span>{" "}
            Islamic Center
          </h1>
          <p className="font-montserrat w-9/12 text-white text-lg font-normal tracking-tight text-center md:text-left opacity-70 lg:text-[24px]">
            A Community of Faith, Learning, and Spiritual Growth
          </p>
          {/* <HoverBorderGradient children={"Join our Community"}/> */}
          <button className="w-max px-4 py-2 font-semibold rounded-[26.24px] border-none flex text-center items-center bg-white mt-12 lg:px-3 ">
            Join our Community
          </button>
          <ScrollDown />
        </div>
        <About />
        <Announcements />
        <Programs />
        <Highlights />
        <Offers />
        <ExpandableCardDemo />
        <Contact  />
        <Footer />
      </div>
    </>
  );
};

export default Home;
