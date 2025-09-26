"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NavItems = ({ href, label }: { href: string; label: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`text-sm hover:text-[#231645] hover:font-semibold duration-200 hover:border-b hover:border-b-purple-500 hover:pb-2 transition-all ${
                isActive && "font-semibold border-b border-b-purple-500 pb-2"
            }`}
        >
            {label}
        </Link>
    );
};

export default NavItems;
