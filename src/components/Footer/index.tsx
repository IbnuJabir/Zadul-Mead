import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
function Footer() {
  return (
    <div className="w-full h-24 bg-slate-900 flex items-center justify-around">
      <p className="text-white font-montserrat">Zadul Mead</p>
      <div className="flex gap-4 text-white">
        <BsTelegram className="size-[20px]" />
        <FaFacebook className="size-[20px]" />
        <AiFillYoutube className="size-[20px]" />
        <FaWhatsapp className="size-[20px]" />
      </div>
    </div>
  );
}

export default Footer;
