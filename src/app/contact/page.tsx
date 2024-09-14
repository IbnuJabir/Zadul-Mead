"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import bkg from "../../../public/assets/contact_banner.png";
import Image from "next/image";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { Button, Group, TextInput, NumberInput } from "@mantine/core";
import Sidebar from "@/components/sidebar/MenuBarMobile";
import Layout from "@/components/sidebar";
function Contact() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnBlur: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      email: isEmail("Invalid email"),
      phone: isNotEmpty("Invalid Phone Number"),
    },
  });
  return (
    <div className="w-full text-white overflow-x-hidden">
      <div className="w-full py-10 md:py-0 md:h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover  align-center -z-10"
        />
        <div className="h-[82%] mt-12 md:mt-4 lg:mt-0 ml-3 md:ml-16 w-[96%] md:w-1/2 flex flex-col  gap-3 md:gap-2 items-start justify-end md:pb-10">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl md:text-4xl font-extralight"
          >
            Contact Us
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-xl md:text-3xl"
          >
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="font-montserrat text-[18px]"
          >
            Reach out to us through our available contact options, and we will
            be happy to connect with you.
          </p>
        </div>
      </div>
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-95  flex flex-col gap-20 -z-14 py-16">
        <div className="w-[80%] mx-auto">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="font-bold text-2xl mb-4"
          >
            Contact Us
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
            className="font-montserrat text-justify"
          >
            We&apos;d love to hear from you at ZAD AL-MEAD Islamic Center.
            Whether you have questions about our programs, events, or services,
            or you&apos;re looking for ways to get involved, we&apos;re here to
            help. Feel free to reach out for support, feedback, or general
            inquiries, and a member of our team will respond as soon as
            possible. Your connection with us matters, and we&apos;re committed
            to fostering a strong community bond.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 md:justify-around md:items-top  font-montserrat mt-10 md:py md:gap-10">
          <div className="w-[90%] md:w-[80%] flex flex-col items-center justify- mx-auto md:flex-row">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
              className="w-full text-black sm:w-[90%]  h-[30rem] md:h-[28rem] mx-auto bg-slate-300 bg-opacity-30 flex flex-col gap-4 p-4  rounded-lg"
            >
              <p className="text-xl text-center text-white">
                {" "}
                Drop us a message
              </p>
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
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
              className="hidden md:flex md:w-[90%] md:flex-col md:gap-4 md:justify-center md:items-start md:pl-10 text-white py-10"
            >
              <Link
                href="https://t.me/ahmedadem"
                className="flex gap-4 items-center"
              >
                <BsTelegram className="size-[35px] lg:size-[40px]" />
                <p>@ahmedadem</p>
              </Link>
              <Link
                href="https://www.facebook.com/yenegew"
                className="flex gap-4 items-center"
              >
                <FaFacebook className="size-[35px] lg:size-[40px]" />
                <p>@yenegew</p>
              </Link>
              <Link
                href="http://www.youtube.com/c/ZadulMaad"
                className="flex gap-4 items-center"
              >
                <AiFillYoutube className="size-[35px] lg:size-[40px]" />
                <p>@ZadulMaad</p>
              </Link>
              <Link
                href="https://chat.whatsapp.com/FCEvA6AIC8kETehY2WhQPN"
                className="flex gap-4 items-center"
              >
                <FaWhatsapp className="size-[35px] lg:size-[40px]" />
                <p>@FCEvA6AIC8kETehY2WhQPN</p>
              </Link>
              <Link
                href="https://instagram.com/zad_al_mead"
                className="flex gap-4 items-center"
              >
                <FaInstagram className="size-[35px] lg:size-[40px]" />
                <p>@zad_al_mead</p>
              </Link>
              <Link
                href="https://x.com/zadal_mead"
                className="flex gap-4 items-center"
              >
                <FaXTwitter className="size-[35px] lg:size-[40px]" />
                <p>@zadal_mead</p>
              </Link>
            </div>
          </div>
          <div className="w-[80%] h-[28.5rem] md:w-[80%] mx-auto rounded-xl">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.3138038617237!2d38.68982031586916!3d8.948614305259683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b80e159e07527%3A0x8029ecd6cbe2cded!2zTWFzamlkIEFsLUJhZHIg4Ymg4Yu14YitIOGImOGIteGMheGLtSDZhdiz2KzYrw!5e0!3m2!1sen!2set!4v1722911142213!5m2!1sen!2set"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-xl w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
