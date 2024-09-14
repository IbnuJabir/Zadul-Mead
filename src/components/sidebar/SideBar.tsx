import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { SlHome } from 'react-icons/sl'
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs'
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineEventNote } from "react-icons/md";
import { usePathname } from "next/navigation";

import logo from "../../../public/assets/svg/Asset 4@4x 2.svg";
import { MenuItemProps, SidebarProps } from '@/lib/types';

export default function Sidebar({ show, setter }: SidebarProps) {
    const pathname = usePathname();

    const className = "bg-black w-[200px] transition-[margin-right] ease-in-out duration-500 fixed md:static top-0 bottom-0 right-0 z-40 md:hidden text-white";
    const appendClass = show ? " mr-0" : " mr-[-250px]";

    const MenuItem = ({ icon, name, route }: MenuItemProps) => {
        const colorClass = pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter((oldVal: boolean) => !oldVal);
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

    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter((oldVal: boolean) => !oldVal);
            }}
        />
    );

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="p-2 pt-4 flex">
                    <Link href="/">
                        <img src={logo.src} alt="Zad Logo" width={200} height={200} className='h-32' />
                    </Link>
                </div>
                <div className="flex flex-col mt-10">
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
            {show && <ModalOverlay />}
        </>
    )
}
