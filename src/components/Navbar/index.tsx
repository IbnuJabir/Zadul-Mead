"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import languageIcon from "../../../public/assets/language.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import zadlogo from "../../../public/assets/svg/Asset 4@4x 2.svg";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const subpage = pathname.split("/")?.[1];

  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden  md:flex md:justify-between md:items-center md:px-8 md:py-4">
        <Link
          href="/"
          className="text-white text-xl font-montserrat cursor-pointer"
        >
          <p className="hover:text-gray-300">ZAD AL-MEAD</p>
        </Link>
        <ul className="flex md:ml-20  md:space-x-6 lg:space-x-10 text-white font-montserrat">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? " border-b-4 border-white text-white"
                : "text-gray-300"
            } cursor-pointer hover:text-white`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? " border-b-4 border-white text-white "
                : "text-gray-300"
            } cursor-pointer hover:text-white `}
          >
            About
          </Link>
          <Link
            href="/announcements"
            className={`${
              pathname === "/announcements"
                ? " border-b-4 border-white text-white"
                : "text-gray-300"
            } cursor-pointer hover:text-white`}
          >
            Announcements
          </Link>
          <Link
            href="/programs"
            className={`${
              pathname === "/programs"
                ? " border-b-4 border-white text-white"
                : "text-gray-300"
            } cursor-pointer hover:text-white`}
          >
            Programs
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? " border-b-4 border-white text-white"
                : "text-gray-300"
            } cursor-pointer hover:text-white`}
          >
            Contact
          </Link>
        </ul>
        <div>
          {/* <a className="text-3xl flex text-white" href="/register">
            <FaUser />
          </a> */}
          {/* <Image
            src={languageIcon}
            alt="menubar"
            className="w-8 h-8 cursor-pointer"
          /> */}
        </div>
      </div>

      {/* Mobile Navbar */}
      {/* <div className="md:hidden flex justify-between items-center pl-10 pr-2 text-white h-20 bg-black bg-opacity-40">
        <Link
          href="/"
          className="text-white text-xl font-montserrat cursor-pointer"
        >
          <Image
            src={zadlogo}
            alt="logo"
            width={50}
            height={50}
            className="w-[80%] md:w-[20%] h-20 cursor-pointer"
            priority
          />
        </Link>
        <div className="z-4000">
          <Image
            src="/assets/menubar.png"
            alt="menubar"
            width={60}
            height={100}
            className="w-18 h-10 bg-opacity-20 hover:bg-black p-2 px-4 cursor-pointer z-200 "
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "110%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-2 right-3 bg-black bg-opacity-40 text-white shadow-lg -z-10 py-8 px-4 rounded-2xl"
            >
              <ul className="flex flex-col gap-6 font-montserrat w-22">
                <a
                  href="/"
                  className={`${
                    pathname === "/"
                      ? " border-b-2 border-white text-white font-semibold"
                      : "text-gray-100"
                  } text-sm cursor-pointer hover:text-gray-100 w-fit`}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? " border-b-2 border-white text-white font-semibold"
                      : "text-gray-100"
                  } text-sm cursor-pointer hover:text-gray-100`}
                >
                  About
                </a>
                <a
                  href="/announcements"
                  className={`${
                    pathname === "/announcements"
                      ? " border-b-2 border-white text-white font-semibold"
                      : "text-gray-100"
                  } text-sm cursor-pointer hover:text-gray-100`}
                >
                  Announcements
                </a>
                <a
                  href="/programs"
                  className={`${
                    pathname === "/programs"
                      ? " border-b-2 border-white text-white font-semibold"
                      : "text-gray-100"
                  } text-sm cursor-pointer hover:text-gray-100`}
                >
                  Programs
                </a>
                <a
                  href="/contact"
                  className={`${
                    pathname === "/contact"
                      ? " border-b-2 border-white text-white font-semibold"
                      : "text-gray-100"
                  } text-sm cursor-pointer hover:text-gray-100`}
                >
                  Contact
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}
    </div>
  );
}

export default Navbar;

// 1, Solidity
// 2, React
// 3, Ethers
// 4, routing
// 5, HTML & CSS

// PL -> Solidity (JS), Vyper(PY)
// Dev Framework -> Hardhat(JS) or Truffle, Brownie(PY)
// we can use remix before Hardhat

// Rust for Solana
// Go for Cosmos
// JS for Ethereum
// Python for Ethereum

// JS libraries:
//   Ether.js
//   Web3.js
