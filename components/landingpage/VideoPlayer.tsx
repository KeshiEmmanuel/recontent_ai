"use client";
import React, { useState } from "react";

const ImageLayer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoadedData = () => {
        setIsLoading(false);
    };
    return (
        <div className="mb-10 max-w-[800px] mx-auto">
            {isLoading && (
                <div className="w-full h-[644px] rounded-lg animate-pulse bg-gray-100" />
            )}
            <video
                className={`rounded-xl ${isLoading ? "hidden" : ""}`}
                src="https://u953ljl5yk.ufs.sh/f/LmKZAyjcSWj9yNkmZEbKkZTx4Sf0EwuPz1XDVq7dy3tG8McI"
                autoPlay
                playsInline
                muted
                onLoadedData={handleLoadedData}
                loop
            ></video>
        </div>
    );
};

export default ImageLayer;
