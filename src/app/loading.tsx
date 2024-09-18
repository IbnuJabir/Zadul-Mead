"use client";
import Image from "next/image";
import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import loadingBackround from "../../public/assets/contact_background.png";
const Loader = () => (
  <div className="w-full min-h-svh h-full flex items-center justify-center">
    <ScaleLoader
      height={40}
      width={8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  //    <div className="absolute inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50">
  //    <div className="w-1/3 h-1/4 flex items-center justify-center">
  //      <ScaleLoader
  //        height={40}
  //        width={8}
  //        color={"#fff"}
  //        aria-label="Loading Spinner"
  //        data-testid="loader"
  //      />
  //    </div>
  //  </div>
);

export default Loader;
