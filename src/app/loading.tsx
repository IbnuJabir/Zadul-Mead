"use client";
import Image from "next/image";
import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import loadingBackround from "../../public/assets/contact_background.png";
const Loader = () => (
  <div className="w-full min-h-svh h-full flex items-center justify-center">
    <ScaleLoader height={40} width={8} />
  </div>
);

export default Loader;
