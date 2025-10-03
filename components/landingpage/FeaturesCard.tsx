import React from "react";

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
}
interface MainProps extends Props {
    index: number;
}

const FeaturesCard = ({ icon, title, description, index }: MainProps) => {
    return (
        <div
            className={`feature-${
                index + 1
            } bg-gray-200/20 backdrop-blur-lg rounded-xl border border-purple-50 py-2`}
        >
            <div className="text-2xl py-2">{icon}</div>
            <h1>{title}</h1>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default FeaturesCard;
