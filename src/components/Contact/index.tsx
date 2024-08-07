import React from "react";

function Contact() {
  return (
    <div className="w-full bg-contact-bkg bg-no-repeat bg-cover bg-center bg-slate-700 py-4">
      <h1 className="text-white font bold text-3xl m-4">Contact Us</h1>
      <div className="w-[ful] h-full flex flex-col gap-4 md:flex-row md:justify-around font-montserrat mt-10">
        <div className="w-[90%] md:w-[45%] h-96 m-auto bg-slate-300 bg-opacity-30 flex flex-col gap-4 p-4 rounded-lg">
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
        <div className="w-[90%] h-96  bg-slate-400 m-auto rounded-xl">
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.3138038617237!2d38.68982031586916!3d8.948614305259683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b80e159e07527%3A0x8029ecd6cbe2cded!2zTWFzamlkIEFsLUJhZHIg4Ymg4Yu14YitIOGImOGIteGMheGLtSDZhdiz2KzYrw!5e0!3m2!1sen!2set!4v1722911142213!5m2!1sen!2set"
            width="100%"
            height="100%"
            // style="border:0;"
            allowFullScreen={true}
            loading="lazy"
            // referrerpolicy={"no-referrer-when-downgrade"}
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
