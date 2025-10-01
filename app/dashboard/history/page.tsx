import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link";

const HistoryPage = () => {
    return (
        <main className="mt-24">
            <div className="flex items-center justify-between font-semibold">
                <h1 className="text-2xl">Your content history</h1>
                <Link href="/dashboard">
                    <Button className="button button-primary">
                        New content
                    </Button>
                </Link>
            </div>
            <div className="mt-5">
                <div className="relative">
                    <CiSearch className="absolute left-3 top-4" size={20} />
                    <Input placeholder="search chat.." className="px-10 py-6" />
                </div>
            </div>
        </main>
    );
};

export default HistoryPage;
