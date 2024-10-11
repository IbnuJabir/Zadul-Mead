"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";

// Validation Schema
const FormSchema = z.object({
  fullName: z.string().min(1, "Please enter your full name"),
  phone: z.coerce.number().min(1, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Please enter your email"),
  message: z.string().min(1, "Please enter a message"),
});

type FormValues = z.infer<typeof FormSchema>;

function Contact() {
  const [isLoading, setLoading] = useState(false);

  // Initialize react-hook-form with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      phone: undefined,
      email: "",
      message: "",
    },
    reValidateMode: "onBlur",
    mode: "onBlur",
  });
  

  // Function to get the first error
  const getFirstErrorMessage = () => {
    const errors = form.formState.errors;
    if (errors.fullName) return errors.fullName.message;
    if (errors.email) return errors.email.message;
    if (errors.phone) return errors.phone.message;
    if (errors.message) return errors.message.message;
    return null;
  };

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const payload = {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      message: data.message,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_API}/message/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        toast.error("Failed to send your message");
        throw new Error(result.error);
      }
      toast.success("Your message was successfully sent, thank you!");

      // Reset form fields after successful submission
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-contact-bkg bg-no-repeat bg-cover bg-center py-4">
      <h1 className="text-white font-bold text-3xl m-4">Contact Us</h1>
      <div className="w-full flex flex-col gap-4 md:flex-row md:justify-around md:items-top font-montserrat mt-10 md:py">
        <div className="w-[90%] md:w-[50%] flex flex-col items-center justify- mx-auto">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
            className="w-full text-black md:w-[90%] h-[32rem] md:h-[28rem] mx-auto bg-slate-300 bg-opacity-30 flex flex-col gap-4 p-4 rounded-lg"
          >
            <p className="text-xl text-center text-white">Drop us a message</p>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                {...form.register("fullName")}
                type="text"
                placeholder="Full Name"
                className="rounded-[5px] p-2 pl-4"
              />
              <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                <input
                  {...form.register("email")}
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-[45%] rounded-[5px] p-2 pl-4"
                />
                <input
                  {...form.register("phone")}
                  type="number"
                  placeholder="Phone"
                  className="w-full md:w-[45%] rounded-[5px] border-none p-2 pl-4"
                />
              </div>
              <textarea
                {...form.register("message")}
                cols={30}
                rows={6}
                placeholder="Your message"
                className="rounded-[5px] p-4"
              ></textarea>

              {/* Displaying the first error message */}
              {getFirstErrorMessage() && (
                <small className="text-red-500">{getFirstErrorMessage()}</small>
              )}

              <button
                disabled={isLoading}
                type="submit"
                className="w-full px-4 py-2 rounded-[5px] border-none flex text-center items-center justify-center bg-white text-black"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
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
            <Link href="https://x.com/zad_al_mead" target="_blank">
              <FaXTwitter className="size-[35px] lg:size-[40px]" />
            </Link>
          </div>
        </div>
        <div className="w-[90%] h-[28.5rem] md:w-[65%] mx-auto rounded-xl md:pr-14">
          {/* Google Map Embed */}
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
