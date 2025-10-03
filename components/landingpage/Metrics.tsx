import React from "react";

const Metrics = () => {
    return (
        <main className="py-20 max-w-[1020px] mx-auto grid grid-cols-3">
            <div className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-6xl font-semibold">{"<"}30s</h1>
                <p className="text-sm text-gray-700">Average generation time</p>
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-6xl font-semibold">10+</h1>
                <p className="text-sm text-gray-700">Hours saved per week</p>
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-6xl font-semibold">6</h1>
                <p className="text-sm text-gray-700">
                    Platform optimized content
                </p>
            </div>
        </main>
    );
};

export default Metrics;
