import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ImageLayer from "./VideoPlayer";
import Metrics from "./Metrics";
import Steps from "./Steps";
import Features from "./Features";
import Pricing from "./Pricing";

const LandingPage = () => {
    return (
        <main className="font-sans">
            <Navbar />
            <section className="">
                <Hero />
                <ImageLayer />
                <Metrics />
                <Steps />
                <Features />
                <Pricing />
            </section>
        </main>
    );
};

export default LandingPage;
