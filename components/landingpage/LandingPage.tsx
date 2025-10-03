import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ImageLayer from "./VideoPlayer";
import Metrics from "./Metrics";
import Steps from "./Steps";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";

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
                <Footer />
            </section>
        </main>
    );
};

export default LandingPage;
