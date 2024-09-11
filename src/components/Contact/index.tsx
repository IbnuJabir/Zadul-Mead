import Link from "next/link";
import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="w-full bg-contact-bkg  bg-no-repeat bg-cover bg-center py-4">
      <h1 className="text-white font bold text-3xl m-4">Contact Us</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-around md:items-top  font-montserrat mt-10 md:py">
        <div className="w-[90%] md:w-[50%] flex flex-col items-center justify- mx-auto">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
            className="w-full text-black md:w-[90%]  h-[30rem] md:h-[28rem] mx-auto bg-slate-300 bg-opacity-30 flex flex-col gap-4 p-4  rounded-lg"
          >
            <p className="text-xl text-center text-white"> Drop us a message</p>
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-[5px] p-2 pl-4"
            />
            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full md:w-[45%] rounded-[5px] p-2 pl-4"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-full md:w-[45%] rounded-[5px] border-none p-2 pl-4"
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={6}
              placeholder=" Your message"
              className="rounded-[5px] p-4"
            ></textarea>
            <button className="w-full px-4 py-2 rounded-[5px] border-none flex text-center items-center justify-center bg-white text-black md:mt-4">
              Send Message
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-once="true"
            className="hidden md:flex md:gap-4 md:justify-center text-white py-10"
          >
            <Link href="https://t.me/ahmedadem" target="_blank">
              <BsTelegram className="size-[35px] lg:size-[40px]" />
            </Link>
            <Link href="https://www.facebook.com/yenegew" target="_blank">
              <FaFacebook className="size-[35px] lg:size-[40px]" />
            </Link>
            <Link href="http://www.youtube.com/c/ZadulMaad" target="_blank">
              <AiFillYoutube className="size-[35px] lg:size-[40px]" />
            </Link>
            <Link
              href="https://chat.whatsapp.com/FCEvA6AIC8kETehY2WhQPN"
              target="_blank"
            >
              <FaWhatsapp className="size-[35px] lg:size-[40px]" />
            </Link>
            <Link href="https://instagram.com/zad_al_mead" target="_blank">
              <FaInstagram className="size-[35px] lg:size-[40px]" />
            </Link>
            <Link href="https://x.com/zadal_mead" target="_blank">
              <FaXTwitter className="size-[35px] lg:size-[40px]" />
            </Link>
          </div>
        </div>
        <div className="w-[90%] h-[28.5rem] md:w-[65%] mx-auto rounded-xl md:pr-14">
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.3138038617237!2d38.68982031586916!3d8.948614305259683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b80e159e07527%3A0x8029ecd6cbe2cded!2zTWFzamlkIEFsLUJhZHIg4Ymg4Yu14YitIOGImOGIteGMheGLtSDZhdiz2KzYrw!5e0!3m2!1sen!2set!4v1722911142213!5m2!1sen!2set"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
