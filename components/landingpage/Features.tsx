import React from "react";
import FeaturesCard from "./FeaturesCard";
import { BiSolidZap } from "react-icons/bi";
import { FaBrain, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";

const Features = () => {
    const features = [
        {
            icon: <BiSolidZap />,
            title: "Lightning Fast",
            description:
                "Generate platform-optimized content in less than 30 seconds. No more spending hours reformatting. Paste your blog post and get 6 ready-to-use pieces instantly.",
        },
        {
            icon: <FaBrain />,
            title: "Platform Intelligence",
            description:
                "Our AI understands each platform's unique best practices, character limits, and engagement patterns. Get content that actually performs.",
        },
        {
            icon: <FaTwitter />,
            title: "Twitter Threads",
            description:
                "8-12 tweets with hooks, CTAs, and perfect formatting. Turn blog posts into viral threads.",
        },
        {
            icon: <FaLinkedin />,
            title: "LinkedIn Posts",
            description:
                "Professional content with business insights and strategic hashtags.",
        },
        {
            icon: <TiSocialInstagram />,
            title: "Instagram Captions",
            description:
                "Story-driven with 10-15 hashtags and strategic emoji placement.",
        },
        {
            icon: <MdEmail />,
            title: "Email",
            description: "3 subject lines plus persuasive body copy.",
        },
        {
            icon: <FaFacebook />,
            title: "Facebook",
            description: "Community posts with engagement questions.",
        },
        {
            icon: <PiQuotesFill />,
            title: "Quotes",
            description: "3 shareable, graphics-ready quotes.",
        },
    ];

    return (
        <section className="py-20 max-w-[1200px] mx-auto">
            <p className="text-center text-xs bg-purple-100 px-6 py-2 rounded-xl text-purple-500 w-fit h-fit mx-auto">
                Features
            </p>
            <h1 className="text-center text-5xl font-bold py-3">
                Everything
                <span className="text-purple-500 mx-2">YOU</span>
                need
            </h1>
            <p className="text-center">
                Platform-specific intelligence that understands what works on
                each channel. No guesswork, just results.
            </p>
            <div className="py-12 feature_grid gap-2">
                {features.map((feature, i) => (
                    <FeaturesCard
                        key={feature.title}
                        icon={feature.icon}
                        description={feature.description}
                        title={feature.title}
                        index={i}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;
