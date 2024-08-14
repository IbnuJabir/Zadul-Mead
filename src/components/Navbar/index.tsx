"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import languageIcon from "../../../public/assets/language.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex md:justify-between md:items-center md:px-8 md:py-4">
        <div className="text-white text-xl font-montserrat">
          <p>ZAD AL-MEAD</p>
        </div>
        <ul className="flex md:space-x-6 lg:space-x-10 text-white font-montserrat">
          <li>Home</li>
          <li>About</li>
          <li>Announcements</li>
          <li>Register</li>
          <li>Contact</li>
        </ul>
        {/* <div className="text-white">
          <a href="#" className="border-b border-white">
            Register
          </a>
        </div> */}
        <div>
          <Image
            src={languageIcon}
            alt="menubar"
            className="w-8 h-8 cursor-pointer"
            onClick={() => console.log("Language")}
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-2.5 text-white bg-opacity-70 relative">
        <div className="text-white text-xl">
          <p>ZADUL MEAD</p>
        </div>
        <div className="z-40">
          <Image
            src="/assets/menubar.png"
            alt="menubar"
            width={60}
            height={100}
            className="w-12 h-8 fixed top-2 right-3 bg-opacity-20 bg-black p-2 rounded-full px-4 cursor-pointer"
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
              className="fixed top-2 right-3 bg-white text-black shadow-lg z-30 py-8 px-4 rounded-2xl"
            >
              <ul className="flex flex-col gap-6 font-montserrat w-22">
                <li className="text-sm">Home</li>
                <li className="text-sm">About</li>
                <li className="text-sm">Announcements</li>
                <li className="text-sm">Contact</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
