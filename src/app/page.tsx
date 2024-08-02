

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Announcements from "@/components/Announcements";
import Programs from "@/components/Programs";
import ScrollDown from "@/components/ScrollDown";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
const Home: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#f5f5f5] bg-home-bkg bg-no-repeat bg-cover font-cinzel">
      <Navbar />
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <h1 className="text-white text-[23.2px] font-normal tracking-tight text-center mx-auto">
            WELCOME TO
            <span className="font-bold mr-1">
              {" "}
              <br></br>ZADUL MEAD{" "}
            </span>{" "}
            Islamic Center
          </h1>
          <p className="font-montserrat w-9/12 text-white text-lg font-normal tracking-tight text-center opacity-70">
            A Community of Faith, Learning, and Spiritual Growth
          </p>
          <HoverBorderGradient children={"Join our Community"}/>
          {/* <button className="w-max px-4 py-2 rounded-[26.24px] border-none flex text-center items-center bg-white mt-12">
            Join our Community
          </button> */}
          <ScrollDown />
        </div>
        <About />
        <Announcements />
        <Programs />
      </div>
    </>
  );
};

export default Home;
