import { getTimeAgo } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
    id: string;
    created_at: string;
    post: string;
}

const HistoryCard = ({ created_at, post, id }: Props) => {
    return (
        <Link href={`/dashboard/content/${id}`}>
            <h2 className="font-semibold text-lg">{post.slice(0, 70)}....</h2>
            <p className="text-xs text-gray-400">{getTimeAgo(created_at)}</p>
        </Link>
    );
};

export default HistoryCard;
