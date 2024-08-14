import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full bg-contact-bkg  bg-no-repeat bg-cover bg-center py-4">
      <h1 className="text-white font bold text-3xl m-4">Contact Us</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-around md:items-top  font-montserrat mt-10 md:py">
        <div className="w-[90%] md:w-[50%] flex flex-col items-center justify- mx-auto">
          <div className="w-full md:w-[70%] h-96 mx-auto bg-slate-300 bg-opacity-30 flex flex-col gap-4 p-4 rounded-lg">
            <p className="text-xl text-center text-white"> Drop us a message</p>
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-[5px] p-1 pl-4"
            />
            <div className="flex justify-between w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-[45%] rounded-[5px] p-1 pl-4"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-[45%] rounded-[5px] border-none p-1 pl-4"
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={6}
              placeholder=" Your message"
              className="rounded-[5px] pl-4"
            ></textarea>
            <button className="w-full px-4 py-2 rounded-[5px] border-none flex text-center items-center justify-center bg-white mt-4">
              Send Message
            </button>
          </div>
          <div className="hidden md:flex md:gap-4 md:justify-center text-white py-10">
            <BsTelegram className="size-[35px] lg:size-[40px]" />
            <FaFacebook className="size-[35px] lg:size-[40px]" />
            <AiFillYoutube className="size-[35px] lg:size-[40px]" />
            <FaWhatsapp className="size-[35px] lg:size-[40px]" />
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
