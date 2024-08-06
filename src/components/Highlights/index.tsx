import React from "react";
// import "@/styles/highlights.css";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
function Highlights() {
  return (
    <div className="w-full h-full bg-about-bkg bg-no-repeat bg-cover font-cinzel flex flex-col justify-center pt-20">
      <div className="text-2xl font-medium ml-5">
        <h1>HIGHLIGHTS OF </h1>
        <h1>
          ZADUL MEAD <span className="font-extrabold">MEDRASA</span>
        </h1>
      </div>
      <div className="highlight_cards w-full relative h-full">
        {/* <img src="/assets/highlight2.png" alt="#" className="card card_img1" />
        <img src="/assets/highlight1.jpeg" alt="#" className="card card_img2" />
        <img src="/assets/highlight3.png" alt="#" className="card card_img3" /> */}
        <DirectionAwareHover
        imageUrl="/assets/highlight1.jpeg"
        children="Zadul Mead Medrasa"
        imageClassName="card_img"
        childrenClassName="highlight_cards"
        className="w-1/2 absolute top-[2%] right-[5%] h-[40%]  hover:z-20"
         />
        <DirectionAwareHover
        imageUrl="/assets/highlight2.png"
        children="Zadul Mead - Dormitory"
        imageClassName="card_img"
        childrenClassName="highlight_cards"
        className="w-1/2 absolute top-[35%] left-[5%] h-[40%]  hover:z-20"
         />
        <DirectionAwareHover
        imageUrl="/assets/highlight3.png"
        children="Zadul Mead - Library"
        imageClassName="card_img"
        childrenClassName="highlight_cards"
        className="w-1/2 absolute bottom-[2%] right-[5%] h-[40%]  hover:z-20"
         />
      </div>
    </div>
  );
}

export default Highlights;
