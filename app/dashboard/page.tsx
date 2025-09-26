import InputArea from "@/components/InputArea";
import Navbar from "@/components/Navbar";
import UsageBar from "@/components/UsageMeter";
import React from "react";

const Home = () => {
    return (
        <main className="max-w-[850px] mx-auto font-sans pt-30">
            <div className="mb-12">
                <h1 className=" text-3xl text-[#231645] font-bold">
                    Welcome back, <span className="">Alexa 👋</span>
                </h1>
                <p className="text-sm">Ready to repurpose some content?</p>
            </div>
            <UsageBar
                spaceHoriziontal="my-4"
                userData={{ maxUsage: 5, usageCount: 2 }}
            />
            <InputArea />
        </main>
    );
};

export default Home;
