// @/components/sidebar/MenuBarMobile.tsx
import React from "react";
import Link from "next/link";
import { FiMenu as Icon } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import logo from "../../../public/assets/svg/Asset 4@4x 2.svg";

export default function MenuBarMobile({ setter }) {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 bg-black bg-opacity-60 h-20 flex [&>*]:my-auto px-2">
      <Link className="text-3xl flex text-white" href="/">
        <GrLanguage className="w-70 h-70"/>
      </Link>
      <Link href="/" className="mx-auto">
        {/*eslint-disable-next-line*/}
        <img src={logo.src} alt="Company Logo" width={50} height={50} className="h-20"/>
      </Link>
      <button
        className="text-4xl flex text-white"
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
      >
        <Icon />
      </button>
    </nav>
  );
}
