import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
function Footer() {
  return (
    <>
      <div className="w-full h-24 bg-slate-900 md:hidden flex items-center justify-around font-montserrat">
        <p className="text-white font-montserrat">Zadul Mead</p>
        <div className="flex gap-4 text-white">
          <BsTelegram className="size-[20px]" />
          <FaFacebook className="size-[20px]" />
          <AiFillYoutube className="size-[20px]" />
          <FaWhatsapp className="size-[20px]" />
        </div>
      </div>
      <div className="hidden w-full h-56 bg-slate-900 md:flex md:items-center md:justify-between font-montserrat px-20">
        <div className="flex flex-col w-[30%] font-montserrat">
          <p className="text-white font-montserrat text-[28px]">Zadul Mead</p>
          <p className="text-gray-400 text-[10px] ">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="flex justify-between text-white w-1/3">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-[12px]">Zad Al-Mead</p>
            <a className="text-[13px]">Home</a>
            <a className="text-[13px]">About Us</a>
            <a className="text-[13px]">Announcements</a>
            <a className="text-[13px]">Register</a>
            <a className="text-[13px]">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-[12px]">Services</p>
            <a className="text-[13px]">Mesjid</a>
            <a className="text-[13px]">Madrasa</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
