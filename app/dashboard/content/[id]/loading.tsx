import React from "react";

const Loading = () => {
    return (
        <main className="max-w-[1000px] mx-auto mt-20">
            <div className="mt-5 bg-gray-200/50 rounded-lg w-96 h-12 animate-pulse" />
            <div className="mt-2 bg-gray-200/50 rounded-lg w-50 h-5 animate-pulse" />
            <div className="mt-4 flex items-center flex-col gap-3">
                <div className="bg-gray-200/50 rounded-lg w-full h-[80px] animate-pulse" />
                <div className="bg-gray-200/50 rounded-lg w-full h-[80px] animate-pulse" />
                <div className="bg-gray-200/50 rounded-lg w-full h-[80px] animate-pulse" />
                <div className="bg-gray-200/50 rounded-lg w-full h-[80px] animate-pulse" />
                <div className="bg-gray-200/50 rounded-lg w-full h-[80px] animate-pulse" />
                <div className="bg-gray-200/50 rounded-lg w-full h-[80px] animate-pulse" />
            </div>
            <div className="bg-gray-200/50 rounded-lg w-full h-[300px] animate-pulse" />
        </main>
    );
};

export default Loading;
