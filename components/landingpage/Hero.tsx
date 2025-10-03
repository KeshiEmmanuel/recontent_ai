import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="pt-40 pb-24 max-w-[1020px] mx-auto">
            <h1 className="hero_title text-center font-semibold">
                One Blog Post.
                <br />
                <span className="text-[#7e43ff] font-black">
                    Six Platforms.
                </span>
                <br />
                Thirty Seconds.
            </h1>
            <p className="text-center py-7 text-lg text-foreground">
                Stop wasting hours reformatting content. Turn your blog posts
                into <br /> platform-optimized social media posts instantly with
                AI.
            </p>
            <div className="flex items-center flex-col justify-center">
                <Button className="button button-primary z-10 px-10 py-7 mb-5 text-lg">
                    Turn One Blog Post Into Six Social Posts - Free
                </Button>
                <p className="text-sm text-gray-600">
                    No credit card required. 2 free repurposes per day to get
                    started.
                </p>
            </div>
        </section>
    );
};

export default Hero;
