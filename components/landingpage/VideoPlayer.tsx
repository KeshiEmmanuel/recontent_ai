"use client";
import Image from "next/image";
import { motion } from "motion/react";
import React, { useState } from "react";

const ImageLayer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoadedData = () => {
        setIsLoading(false);
    };
    return (
        <motion.div
            initial={{
                scale: 0.9,
                opacity: 0,
            }}
            whileInView={{
                scale: 1,
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
                delay: 0.85,
                ease: "easeInOut",
            }}
            className="mb-10 max-w-[800px] mx-auto"
        >
            {isLoading && (
                <Image
                    src="/dashboard.png"
                    width={800}
                    className="rounded-lg shadow border border-gray-100"
                    height={800}
                    alt="dashboard"
                />
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
        </motion.div>
    );
};

export default ImageLayer;
