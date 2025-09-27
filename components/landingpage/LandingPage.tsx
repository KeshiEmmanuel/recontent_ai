import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const LandingPage = () => {
    return (
        <main className="font-sans">
            <Navbar />
            <section className="max-w-[1020px] mx-auto">
                <Hero />
            </section>
        </main>
    );
};

export default LandingPage;
