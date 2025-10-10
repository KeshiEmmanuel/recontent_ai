"use client";
import { motion } from "motion/react";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <section className="pt-40 pb-24 max-w-[1020px] mx-auto relative">
            <motion.h1
                initial={{
                    y: 50,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.85,
                    ease: "easeInOut",
                }}
                className="hero_title text-center font-semibold"
            >
                One Blog Post.
                <br />
                <motion.span
                    className="text-[#7e43ff] font-black"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.9,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                >
                    Six Platforms.
                </motion.span>
                <br />
                Thirty Seconds.
            </motion.h1>

            <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: "easeInOut",
                }}
                className="text-center py-7 text-lg text-foreground"
            >
                Stop wasting hours reformatting content. Turn your blog posts
                into <br /> platform-optimized social media posts instantly with
                AI.
            </motion.p>

            <motion.div className="flex items-center flex-col justify-center">
                <motion.div>
                    <Button className="button button-primary z-10 px-10 py-7 mb-5 text-lg">
                        Turn One Blog Post Into Six Social Posts - Free
                    </Button>
                </motion.div>

                <p className="text-sm text-gray-600">
                    No credit card required. 2 free repurposes per day to get
                    started.
                </p>
            </motion.div>

            {/* Animated background elements */}
            <motion.div
                className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-500/50 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/60 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
        </section>
    );
};

export default Hero;
