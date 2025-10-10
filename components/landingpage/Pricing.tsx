import React from "react";
import { PricingPlan } from "@/utils/context";
import PricingCard from "./PricingCard";
import { BiPhoneCall } from "react-icons/bi";
import { Button } from "../ui/button";

const Pricing = () => {
    return (
        <section id="pricing" className="">
            <p className="text-center text-xs bg-purple-100 px-6 py-2 rounded-xl text-purple-500 w-fit h-fit mx-auto">
                Pricing
            </p>
            <h1 className="text-center text-5xl font-bold py-4 ">
                Simple, Transparent Pricing Fee
            </h1>
            <div className="py-12 max-w-[1200px] mx-auto flex gap-6 flex-col lg:flex-row">
                <div className="flex p-6 rounded-lg bg-gray-100 lg:w-[850px] gap-5 flex-col">
                    {PricingPlan.map((pricing) => (
                        <PricingCard {...pricing} key={pricing.id} />
                    ))}
                </div>
                <div className="flex mx-8 lg:mx-0 flex-col bg-purple-600 rounded-lg shadow lg:w-[350px]">
                    <div className="pt-20 py-10 lg:pt-40 px-10 w-full">
                        <BiPhoneCall className="my-2 text-white text-2xl" />
                        <h1 className="text-4xl font-bold text-white">
                            Contact Us
                        </h1>
                        <p className="text-purple-100 my-4">
                            Help your team repurpose content closely and easily,
                            manage it with your team, focus on your work while
                            we do the heavylifting for you.
                        </p>
                        <Button className="button button-secondary w-full">
                            Contact now
                        </Button>
                        <p className="text-sm text-center text-purple-100 my-2">
                            For enterprise-level purchase only
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
