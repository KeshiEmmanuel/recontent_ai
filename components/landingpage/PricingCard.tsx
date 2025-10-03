import React from "react";
import { IoCheckmark, IoCheckmarkCircleSharp } from "react-icons/io5";
import { Button } from "../ui/button";

interface Props {
    id: number;
    title: string;
    pricingMonthly: string;
    isPopular: boolean;
    caption: string;
    features: string[];
    highlighted: boolean;
}

const PricingCard = ({
    id,
    title,
    pricingMonthly,
    isPopular,
    caption,
    features,
    highlighted,
}: Props) => {
    return (
        <article className="w-full">
            <div className="bg-white shadow rounded-lg p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left section - Pricing info */}
                    <div className="flex flex-col">
                        <p className="text-xl font-semibold mb-4">{title}</p>
                        <div className="flex items-center gap-2 mb-2">
                            <p className="text-6xl text-[#7e43ff] font-bold">
                                ${pricingMonthly}
                            </p>
                            <div className="text-sm text-gray-700">/month</div>
                        </div>
                        <Button className="mt-6 w-full button button-component lg:w-auto">
                            Get Started
                        </Button>
                    </div>

                    {/* Right section - Features */}
                    <div className="grid gap-3 content-start">
                        {features.map((feature) => (
                            <div
                                key={feature}
                                className="grid grid-cols-[auto_1fr] gap-2 items-start"
                            >
                                <IoCheckmarkCircleSharp
                                    className="text-[#7e43ff] mt-0.5"
                                    size={20}
                                />
                                <p className="text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PricingCard;
