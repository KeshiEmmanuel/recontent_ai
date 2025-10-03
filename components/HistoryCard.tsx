import { getTimeAgo } from "@/lib/utils";
import React from "react";

interface Props {
    created_date: string;
    post: string;
}

const HistoryCard = ({ created_date, post }: Props) => {
    return (
        <div className="border-[#231645]/60 border-1 px-10 py-5 hover:bg-gray-100 transition-colors duration-200 rounded-lg">
            <h2 className="font-semibold text-lg">{post.slice(0, 70)}....</h2>
            <p className="text-xs text-gray-400">{getTimeAgo(created_date)}</p>
        </div>
    );
};

export default HistoryCard;
