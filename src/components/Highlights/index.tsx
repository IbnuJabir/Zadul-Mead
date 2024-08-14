import React from "react";
// import "@/styles/highlights.css";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import ExpandableCardDemo from "../blocks/expandable-card-demo-grid";
function Highlights() {
  return (
    <div className="w-full h-[120vh] bg-about-bkg md:bg-about-desktop-bkg bg-no-repeat bg-cover font-cinzel flex flex-col justify-center pt-8 pb-10 overflow-hidden">
      <div className="text-2xl font-medium ml-5 md:ml-52">
        <h1>HIGHLIGHTS OF </h1>
        <h1>
          ZAD AL-MEAD <span className="font-extrabold">MEDRASA</span>
        </h1>
        <p className="font-montserrat text-sm font-light">Learning for all ages and levels</p>
      </div>
      <ExpandableCardDemo />
    </div>
  );
}

export default Highlights;
