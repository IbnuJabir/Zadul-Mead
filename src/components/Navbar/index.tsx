"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import languageIcon from "../../../public/assets/language.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const subpage = pathname.split('/')?.[1]
  


  
  
  return (
    <div className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden  md:flex md:justify-between md:items-center md:px-8 md:py-4">
        <Link href='/' className="text-white text-xl font-montserrat cursor-pointer">
          <p className="hover:text-gray-300">ZAD AL-MEAD</p>
        </Link>
        <ul className="flex md:ml-20  md:space-x-6 lg:space-x-10 text-white font-montserrat">
          <Link href='/' className={`${pathname === '/' ? " border-b-4 border-white text-white" : "text-gray-300"} cursor-pointer hover:text-white`}>Home</Link>
          <Link href='/about' className={`${pathname === '/about' ? " border-b-4 border-white text-white " : "text-gray-300"} cursor-pointer hover:text-white `}>About</Link>
          <Link href='/announcemets' className={`${ pathname === '/announcemets' ?" border-b-4 border-white text-white" : "text-gray-300"} cursor-pointer hover:text-white`}>Announcements</Link>
          <Link href='/register' className={`${ pathname === '/register' ? " border-b-4 border-white text-white" : "text-gray-300"} cursor-pointer hover:text-white`}>Register</Link>
          <Link href='/contact' className={`${pathname === '/contact'  ? " border-b-4 border-white text-white" : "text-gray-300"} cursor-pointer hover:text-white`}>Contact</Link>

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
      <Link href='/' className="text-white text-xl font-montserrat cursor-pointer">
          <p className="hover:text-gray-300">ZAD AL-MEAD</p>
        </Link>
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
                <a href='/' className="text-sm cursor-pointer hover:text-gray-400">Home</a>
                <a href='/about' className="text-sm cursor-pointer hover:text-gray-400">About</a>
                <a href='/announcemets' className="text-sm cursor-pointer hover:text-gray-400">Announcements</a>
                <a href='/programs' className="text-sm cursor-pointer hover:text-gray-400">Programs</a>
                <a href='/contact' className="text-sm cursor-pointer hover:text-gray-400">Contact</a>
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