import React from "react";
import StepsCard from "./StepsCard";

const Steps = () => {
    const steps = [
        {
            number: 1,
            step: "Paste Your Content",
            desc: "Copy your blog post or article into our tool. Works with any length from 100 to 20,000 characters.",
        },
        {
            number: 2,
            step: "AI Does the Magic",
            desc: "Our AI analyzes and generates platform-optimized versions under 30 seconds with proper formatting and structure.",
        },
        {
            number: 3,
            step: "Copy & Schedule",
            desc: "Get 6 ready-to-post pieces instantly. Copy into your scheduler or post directly. No editing required.",
        },
    ];
    return (
        <section className="py-20 max-w-[1020px] mx-auto">
            <h2 className="text-center text-5xl font-bold">How it works?</h2>
            <div className="mt-12 bg-gradient-to-b from-[#4801e4c2] to-[#7e43ff]  flex flex-col items-center justify-center py-36 rounded-xl border border-white shadow px-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {steps.map((step) => (
                        <StepsCard {...step} key={step.number} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
