import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="pt-36 pb-30 max-w-[1100px] mx-auto">
                <h1 className="text-center font-bold text-6xl">
                    Ready to Save 10 Hours This Week?
                </h1>
                <p className="text-center py-4 text-foreground">
                    Join 1,000+ content creators who never run out of social
                    media posts. Start your free trial today.
                </p>
                <div className="flex justify-center mt-2 py-2">
                    <Button className="button button-component w-full">
                        <Link href="/login">Get Started</Link>
                    </Button>
                </div>
                <p className="text-sm text-center text-gray-600">
                    No credit card required • Cancel anytime • 5 free repurposes
                    monthly
                </p>
            </div>
            <div className="text-gray-200 bg-gray-900 py-8">
                <p className="text-center text-sm">
                    © 2025 Recontent. All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
