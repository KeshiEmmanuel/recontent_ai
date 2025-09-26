import Image from "next/image";
import Link from "next/link";
import { Crown } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import NavItems from "./NavItems";

const links = [
    { href: "/dashboard/history", label: "History" },
    { href: "/dashboard/templates", label: "Templates" },
    { href: "/dashboard/account", label: "Account" },
];

const Navbar = () => {
    return (
        <nav className="fixed w-full top-2">
            <nav className="header-inner font-sans bg-gray-900 justify-between">
                <Link href="/dashboard">
                    <Image src="/logo.svg" width={20} height={20} alt="logo" />
                </Link>
                <ul className="flex items-center gap-3">
                    {links.map((link) => (
                        <li key={link.href}>
                            <NavItems {...link} />
                        </li>
                    ))}
                    <Button className="button button-secondary flex items-center gap-1 text-sm hover:button-primary duration-150 transition-colors">
                        <Crown />
                        Upgrade
                    </Button>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;
