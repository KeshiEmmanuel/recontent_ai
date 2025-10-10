import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link";
import HistoryCard from "@/components/HistoryCard";

import {
    getAllContentGenerated,
    handleDelete,
} from "@/utils/actions/post.actions";
import DeleteMenu from "@/components/DeleteMenu";

const HistoryPage = async () => {
    const data = await getAllContentGenerated();

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
            <div className="mt-6 flex items-center gap-2 flex-col">
                {data.map((content) => (
                    <div
                        className="w-full border-[#231645]/60 border-1 px-10 py-5 hover:bg-gray-100 transition-colors duration-200 rounded-lg flex items-center justify-between"
                        key={content.id}
                    >
                        <HistoryCard {...content} />
                        <DeleteMenu
                            handleDelete={handleDelete}
                            id={content.id}
                        />
                    </div>
                ))}
                {!data.length && (
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">No Content found</h1>
                        <p className="text-sm text-center text-gray-700">
                            Paste your blog post and get 6 platform optimized
                            posts
                        </p>
                        <Button className="mt-4 button button-primary">
                            <Link href="/dashboard">Repurpose</Link>
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default HistoryPage;
