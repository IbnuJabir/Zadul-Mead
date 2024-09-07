// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SlHome } from 'react-icons/sl'
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineEventNote } from "react-icons/md";

import logo from "../../../public/assets/svg/Asset 4@4x 2.svg";

export default function Sidebar({ show, setter }) {
    const router = useRouter();

    // Define our base class
    const className = "bg-black w-[200px] transition-[margin-right] ease-in-out duration-500 fixed md:static top-0 bottom-0 right-0 z-40 md:hidden";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " mr-0" : " mr-[-250px]";

    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-3 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="p-2 flex">
                    <Link href="/">
                        {/*eslint-disable-next-line*/}
                        <img src={logo.src} alt="Zad Logo" width={200} height={200} className='h-32' />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<SlHome />}
                    />
                    <MenuItem
                        name="About"
                        route="/about"
                        icon={<BsInfoSquare />}
                    />
                    <MenuItem
                        name="Announcements"
                        route="/announcements"
                        icon={<TfiAnnouncement />}
                    />
                    <MenuItem
                        name="Programs"
                        route="/programs"
                        icon={<MdOutlineEventNote />}
                    />
                    <MenuItem
                        name="Contact"
                        route="/contact"
                        icon={<BsEnvelopeAt />}
                    />
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}