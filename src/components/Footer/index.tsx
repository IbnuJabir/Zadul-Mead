import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import imageUrl from "../../../public/assets/svg/Asset 4@4x 2.svg";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="w-full h-24 bg-slate-950 md:hidden flex items-center justify-around font-montserrat">
        <a href="/" className="text-white font-montserrat">
          Zad Al-Mead
        </a>
        <div className="flex gap-4 text-white">
          <Link href="https://t.me/ahmedadem" target="_blank">
            <BsTelegram className="size-[20px]" />
          </Link>
          <Link href="https://www.facebook.com/yenegew" target="_blank">
            <FaFacebook className="size-[20px]" />
          </Link>
          <Link href="http://www.youtube.com/c/ZadulMaad" target="_blank">
            <AiFillYoutube className="size-[20px]" />
          </Link>
          <Link
            href="https://chat.whatsapp.com/FCEvA6AIC8kETehY2WhQPN"
            target="_blank"
          >
            <FaWhatsapp className="size-[20px]" />
          </Link>
          <Link href="https://instagram.com/zad_al_mead" target="_blank">
            <FaInstagram className="size-[20px]" />
          </Link>
          <Link href="https://x.com/zadal_mead" target="_blank">
            <FaXTwitter className="size-[20px]" />
          </Link>
        </div>
      </div>
      <div className="hidden w-full h-56 bg-slate-950 md:flex md:items-center md:justify-between font-montserrat px-20">
        <div className="flex flex-col items-center w-[30%] font-montserrat">
          <a href="/" className="w-96 h-full ">
            <Image
              src={imageUrl}
              alt="logo"
              width={50}
              height={50}
              className="w-[40%] md:w-[20%] mx-auto h-20 cursor-pointer rounded-md"
              priority
            />
          </a>
          <p className="text-white font-montserrat text-[28px]">Zad Al-Mead</p>
          <p className="text-gray-400 text-[10px]">Knowledge Comes First</p>
        </div>
        <div className="flex justify-between text-white w-1/3">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-[12px]">Zad Al-Mead</p>
            <Link
              href="/"
              className="text-[13px] cursor-pointer hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[13px] cursor-pointer hover:text-gray-300"
            >
              About Us
            </Link>
            <Link
              href="/announcements"
              className="text-[13px] cursor-pointer hover:text-gray-300"
            >
              Announcements
            </Link>
            <Link
              href="/register"
              className="text-[13px] cursor-pointer hover:text-gray-300"
            >
              Register
            </Link>
            <Link
              href="/contact"
              className="text-[13px] cursor-pointer hover:text-gray-300"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-[12px]">Programs</p>
            <a href="/programs" className="text-[13px]">
              Mesjid
            </a>
            <a href="/programs" className="text-[13px]">
              Madrasa
            </a>
          </div>
        </div>
      </div>
      <p className="text-white bg-slate-950  w-full py-4 text-center font-montserrat border-t-[1px] border-t-white">
        Developed by:{" "}
        <a href="https://t.me/bullo01" target="_blank" className="font-bold text-orange-500">
         {" "} ALIF TECHS
        </a>
      </p>
    </>
  );
}

export default Footer;
