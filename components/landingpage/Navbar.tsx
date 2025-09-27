import Image from "next/image";
import React from "react";
import NavItems from "../NavItems";
import { Button } from "../ui/button";
import Link from "next/link";
const links = [
    { href: "#features", label: "Features" },
    { href: "/dashboard/templates", label: "Pricing" },
    { href: "#demo", label: "Demo" },
    { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
    return (
        <nav className="fixed w-full top-4">
            <div className="relative border border-white navbar shadow max-w-[675px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" width={25} height={25} alt="logo" />
                    <p className="text-sm font-bold">Recontent</p>
                </div>
                <ul className="flex items-center gap-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <NavItems {...link} />
                        </li>
                    ))}
                </ul>
                <Button className="button button-primary">
                    <Link href="/login">Get started</Link>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
