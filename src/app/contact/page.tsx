"use client";
import Navbar from "@/components/Navbar";
import React from "react";
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
function Contact() {
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
    <div className="w-full text-white ">
      <div className="w-full h-[55vh] relative bg-black  bg-no-repeat bg-center bg-cover font-cinzel z-10 text-white">
        <Navbar />
        <Image
          src={bkg}
          alt="Home-background"
          fill
          priority
          placeholder="blur"
          className="object-cover align-center -z-10"
        />
        <div className="mt-12 ml-16 w-[90%]  md:w-1/2 flex flex-col gap-2">
          <p className="text-4xl font-extralight">Contact Us</p>
          <h1 className="text-4xl">
            <span className="font-bold">ZAD AL-MEAD</span> Islamic Center
          </h1>
          <p className="font-montserrat text-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className=" w-full bg-about_page2 bg-no-repeat bg-center bg-cover bg-black bg-opacity-80  flex flex-col gap-20 -z-14 py-16">
        <div className="w-[80%] ml-16">
          <h1 className="font-bold text-2xl mb-4">Contact</h1>
          <p className="font-montserrat text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 md:justify-around md:items-top  font-montserrat mt-10 md:py md:gap-10">
          <div className="w-[90%] md:w-[80%] flex flex-col items-center justify- mx-auto md:flex-row">
            <div className="w-full md:w-[50%] h-[26rem] mx-auto bg-slate-300 bg-opacity-30 flex flex-col items-center gap-4 p-4 rounded-lg text-black">
              <p className="text-xl text-center text-white">
                {" "}
                Drop us a message
              </p>
              <form
                onSubmit={form.onSubmit(() => {})}
                className="flex flex-col gap-0"
              >
                <TextInput
                  placeholder="Full Name"
                  withAsterisk
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                  className="rounded-[5px] p-1"
                />
                <div className="flex justify-between w-full m-auto">
                  <TextInput
                    placeholder="Email"
                    withAsterisk
                    mt="md"
                    type="email"
                    name="email"
                    id="email"
                    key={form.key("email")}
                    {...form.getInputProps("email")}
                    className="w-[45%] rounded-[5px] p-1"
                  />
                  <NumberInput
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    withAsterisk
                    mt="md"
                    key={form.key("phone")}
                    {...form.getInputProps("phone")}
                    className="w-[50%] rounded-[5px] border-none p-1"
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={6}
                  placeholder=" Your message"
                  className="rounded-[5px] pl-4 m-auto mt-4"
                ></textarea>
                <button className="w-full px-4 py-2 rounded-[5px] border-none flex text-center items-center justify-center bg-white mt-4">
                  Send Message
                </button>
              </form>
            </div>
            <div className="hidden md:flex md:w-[90%] md:flex-col md:gap-4 md:justify-center md:items-start md:pl-10 text-white py-10">
              <Link
                href="https://t.me/ahmedadem"
                className="flex gap-4 items-center"
              >
                <BsTelegram className="size-[35px] lg:size-[40px]" />
                <p>https://t.me/ahmedadem</p>
              </Link>
              <Link
                href="https://www.facebook.com/yenegew"
                className="flex gap-4 items-center"
              >
                <FaFacebook className="size-[35px] lg:size-[40px]" />
                <p>https://www.facebook.com/yenegew</p>
              </Link>
              <Link
                href="http://www.youtube.com/c/ZadulMaad"
                className="flex gap-4 items-center"
              >
                <AiFillYoutube className="size-[35px] lg:size-[40px]" />
                <p>http://www.youtube.com/c/ZadulMaad</p>
              </Link>
              <Link
                href="https://chat.whatsapp.com/FCEvA6AIC8kETehY2WhQPN"
                className="flex gap-4 items-center"
              >
                <FaWhatsapp className="size-[35px] lg:size-[40px]" />
                <p>https://chat.whatsapp.com/FCEvA6AIC8kETehY2WhQPN</p>
              </Link>
              <Link
                href="https://instagram.com/zad_al_mead"
                className="flex gap-4 items-center"
              >
                <FaInstagram className="size-[35px] lg:size-[40px]" />
                <p>https://instagram.com/zad_al_mead</p>
              </Link>
              <Link
                href="https://x.com/zadal_mead"
                className="flex gap-4 items-center"
              >
                <FaXTwitter className="size-[35px] lg:size-[40px]" />
                <p>https://x.com/zadal_mead</p>
              </Link>
            </div>
          </div>
          <div className="w-[90%] h-[28.5rem] md:w-[80%] mx-auto rounded-xl md:pr-14">
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
      <Footer />
    </div>
  );
}

export default Contact;
