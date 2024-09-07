import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { FiMenu as Icon } from "react-icons/fi";
import { GrLanguage } from "react-icons/gr";
import logo from "../../../public/assets/svg/Asset 4@4x 2.svg";
import menubar from "../../../public/assets/menubar.png";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
type MenuBarMobileProps = {
  setter: Dispatch<SetStateAction<boolean>>;
};

export default function MenuBarMobile({ setter }: MenuBarMobileProps) {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 bg-black bg-opacity-60 h-20 flex [&>*]:my-auto px-4">
      <Link className="text-3xl flex text-white" href="/register">
        {/* <GrLanguage className="w-70 h-70" /> */}
        <FaUser />
      </Link>
      <Link href="/" className="mx-auto">
        <img src={logo.src} alt="Company Logo" width={50} height={50} className="h-16" />
      </Link>
      <button
        className="text-4xl flex text-white"
        onClick={() => {
          setter((oldVal: boolean) => !oldVal);
        }}
      >
        <Image src={menubar} alt="menubar" unoptimized className="w-8 h-5 cursor-pointer" />
        {/* <Icon /> */}
      </button>
    </nav>
  );
}
