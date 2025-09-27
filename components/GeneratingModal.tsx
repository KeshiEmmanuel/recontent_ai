import React, { useState, useEffect } from "react";
import { X, Sparkles, Mail, Quote, CheckCircle2, Loader2 } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Button } from "./ui/button";
const LoadingModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: (bool: boolean) => void;
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [currentTip, setCurrentTip] = useState(0);

    // Processing steps with realistic timing
    const steps = [
        {
            id: 0,
            label: "Analyzing your content",
            icon: Sparkles,
            duration: 3000,
            description: "Reading and understanding your blog post...",
        },
        {
            id: 1,
            label: "Generating Twitter thread",
            icon: FaTwitter,
            duration: 6000,
            description: "Creating engaging tweets with hooks and CTAs...",
        },
        {
            id: 2,
            label: "Crafting LinkedIn post",
            icon: FaLinkedin,
            duration: 5000,
            description: "Optimizing for professional networking...",
        },
        {
            id: 3,
            label: "Writing Instagram caption",
            icon: FaInstagram,
            duration: 4000,
            description: "Adding storytelling elements and hashtags...",
        },
        {
            id: 4,
            label: "Creating email subject lines",
            icon: Mail,
            duration: 3000,
            description: "Testing for high open rates...",
        },
        {
            id: 5,
            label: "Extracting key quotes",
            icon: Quote,
            duration: 2000,
            description: "Finding the most shareable moments...",
        },
    ];

    // Engaging tips to show during loading
    const tips = [
        "💡 Pro tip: The best content gets repurposed 7+ times across different platforms",
        "🚀 Your Twitter threads will get 3x more engagement than regular tweets",
        "📈 LinkedIn posts perform best between 9-10 AM on weekdays",
        "✨ Instagram captions with storytelling get 2x more comments",
        "🎯 Email subject lines under 50 characters have higher open rates",
        "💪 Consistent posting is more important than perfect content",
    ];

    // Fun facts about content creation
    const funFacts = [
        "🤖 Our AI has analyzed over 100,000 viral social media posts",
        "⚡ You're about to save 2+ hours of manual content creation",
        "📊 Platform-optimized content gets 40% more engagement",
        "🎨 The perfect tweet length is 71-100 characters for max retweets",
        "🔥 LinkedIn posts with 3+ hashtags get 10% more visibility",
    ];

    useEffect(() => {
        if (!isOpen) {
            setCurrentStep(0);
            setCompletedSteps([]);
            setCurrentTip(0);
            return;
        }

        let stepTimer:number;
        let tipTimer: number;

        // Progress through steps
        const processSteps = () => {
            if (currentStep < steps.length) {
                stepTimer = setTimeout(() => {
                    setCompletedSteps((prev) => [...prev, currentStep]);
                    setCurrentStep((prev) => prev + 1);
                }, steps[currentStep]?.duration || 3000);
            }
        };

        // Rotate tips every 4 seconds
        const rotateTips = () => {
            tipTimer = setInterval(() => {
                setCurrentTip((prev) => (prev + 1) % tips.length);
            }, 4000);
        };

        processSteps();
        rotateTips();

        return () => {
            clearTimeout(stepTimer);
            clearInterval(tipTimer);
        };
    }, [currentStep, isOpen]);

    if (!isOpen) return null;

    const progressPercentage = (completedSteps.length / steps.length) * 100;
    const isComplete = completedSteps.length === steps.length;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                {/* Header */}
                <div className="button-primary p-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="text-center text-white">
                        <h2 className="text-xl font-bold mb-2">
                            {isComplete
                                ? "🎉 Your Content Pack is Ready!"
                                : "Creating Your Content Pack"}
                        </h2>
                        <p className="text-gray-100">
                            {isComplete
                                ? "5 platform-optimized posts generated!"
                                : "Transforming your blog post into social media gold..."}
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="px-6 pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">
                            Progress
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                            {Math.round(progressPercentage)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                        <div
                            className="bg-[#7e43ff] h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>

                {/* Steps */}
                <div className="px-6 max-h-64 overflow-y-auto">
                    <div className="space-y-3">
                        {steps.map((step) => {
                            const isCompleted = completedSteps.includes(
                                step.id
                            );
                            const isCurrent =
                                currentStep === step.id && !isCompleted;
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.id}
                                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                                        isCompleted
                                            ? "bg-green-50 border border-green-200"
                                            : isCurrent
                                            ? "bg-purple-50 border border-purple-200"
                                            : "bg-gray-50"
                                    }`}
                                >
                                    <div
                                        className={`p-2 rounded-full flex-shrink-0 ${
                                            isCompleted
                                                ? "bg-green-100"
                                                : isCurrent
                                                ? "bg-purple-100"
                                                : "bg-gray-100"
                                        }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        ) : isCurrent ? (
                                            <Loader2 className="w-5 h-5 text-purple-600 animate-spin" />
                                        ) : (
                                            <Icon
                                                className={`w-5 h-5 ${
                                                    isCompleted
                                                        ? "text-green-600"
                                                        : isCurrent
                                                        ? "text-purple-600"
                                                        : "text-gray-400"
                                                }`}
                                            />
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p
                                            className={`text-sm font-medium ${
                                                isCompleted
                                                    ? "text-green-900"
                                                    : isCurrent
                                                    ? "text-purple-900"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {step.label}
                                        </p>
                                        {(isCompleted || isCurrent) && (
                                            <p
                                                className={`text-xs ${
                                                    isCompleted
                                                        ? "text-green-600"
                                                        : "text-purple-600"
                                                }`}
                                            >
                                                {isCompleted
                                                    ? "Complete!"
                                                    : step.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tips Section */}
                {!isComplete && (
                    <div className="px-6 py-4 bg-gray-50 border-t">
                        <div className="text-center">
                            <div className="bg-purple-100 border border-purple-200 rounded-lg p-3 mb-3">
                                <p className="text-sm text-purple-800 font-medium transition-all duration-500">
                                    {tips[currentTip]}
                                </p>
                            </div>
                            <p className="text-xs text-gray-500">
                                {
                                    funFacts[
                                        Math.floor(
                                            Math.random() * funFacts.length
                                        )
                                    ]
                                }
                            </p>
                        </div>
                    </div>
                )}

                {/* Complete Section */}
                {isComplete && (
                    <div className="px-6 py-6 bg-purple-50 border-t text-center">
                        <div className="mb-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle2 className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-purple-900 mb-2">
                                All Done! 🎉
                            </h3>
                            <p className="text-purple-700 text-sm mb-4">
                                Your content pack is ready. Time to dominate
                                social media!
                            </p>
                        </div>

                        <Button
                            onClick={onClose}
                            className=" button button-component transition-colors w-full"
                        >
                            View My Content Pack
                        </Button>
                    </div>
                )}

                {/* Loading Animation at Bottom */}
                {!isComplete && (
                    <div className="px-6 pb-6">
                        <div className="flex justify-center space-x-1">
                            <div
                                className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                                style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                                style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                                style={{ animationDelay: "300ms" }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoadingModal;
