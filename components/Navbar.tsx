import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const links = [
    { href: "/history", label: "History" },
    { href: "/account", label: "Account" },
];

const Navbar = () => {
    return (
        <nav className="fixed w-full top-2">
            <nav className="header-inner font-sans bg-gray-900 justify-between">
                <Image src="/logo.svg" width={20} height={20} alt="logo" />
                <ul className="flex items-center gap-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <Button className="button button-secondary text-sm">
                        Upgrade
                    </Button>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;
