import React, { useState, useEffect } from "react";
import { X, Sparkles, Mail, Quote, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";

const LoadingModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: (bool: boolean) => void;
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [currentTip, setCurrentTip] = useState(0);

    const steps = [
        {
            id: 0,
            label: "Analyzing content",
            icon: Sparkles,
            duration: 3000,
        },
        {
            id: 1,
            label: "Generating Twitter thread",
            icon: FaTwitter,
            duration: 6000,
        },
        {
            id: 2,
            label: "Crafting LinkedIn post",
            icon: FaLinkedin,
            duration: 5000,
        },
        {
            id: 3,
            label: "Writing Instagram caption",
            icon: FaInstagram,
            duration: 4000,
        },
        {
            id: 4,
            label: "Creating email subject lines & Content",
            icon: Mail,
            duration: 3000,
        },
        {
            id: 5,
            label: "Extracting key quotes",
            icon: Quote,
            duration: 2000,
        },
    ];

    const tips = [
        "Repurpose content 7+ times across platforms",
        "Twitter threads get 3x more engagement",
        "LinkedIn posts perform best 9-10 AM weekdays",
        "Storytelling captions get 2x more comments",
        "Keep subject lines under 50 characters",
    ];

    useEffect(() => {
        if (!isOpen) {
            setCurrentStep(0);
            setCompletedSteps([]);
            setCurrentTip(0);
            return;
        }

        let stepTimer: NodeJS.Timeout;
        let tipTimer: NodeJS.Timeout;

        const processSteps = () => {
            if (currentStep < steps.length) {
                stepTimer = setTimeout(() => {
                    setCompletedSteps((prev) => [...prev, currentStep]);
                    setCurrentStep((prev) => prev + 1);
                }, steps[currentStep]?.duration || 3000);
            }
        };

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
    }, [currentStep, isOpen, tips.length, steps]);

    if (!isOpen) return null;

    const progressPercentage = (completedSteps.length / steps.length) * 100;
    const isComplete = completedSteps.length === steps.length;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
                {/* Header */}
                <div className="p-8 relative border-b border-gray-100">
                    <button
                        onClick={() => onClose(false)}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">
                            {isComplete ? "Content Ready" : "Creating Content"}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {isComplete
                                ? "Your social media pack is complete"
                                : "Optimizing for each platform"}
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="px-8 pt-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-500">
                            Progress
                        </span>
                        <span className="text-xs font-semibold text-gray-900">
                            {Math.round(progressPercentage)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-8">
                        <div
                            className="bg-gray-900 h-1.5 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>

                {/* Steps */}
                <div className="px-8 max-h-72 overflow-y-auto">
                    <div className="space-y-2">
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
                                        isCompleted || isCurrent
                                            ? "bg-gray-50"
                                            : ""
                                    }`}
                                >
                                    <div className="flex-shrink-0">
                                        {isCompleted ? (
                                            <CheckCircle2 className="w-5 h-5 text-gray-900" />
                                        ) : isCurrent ? (
                                            <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
                                        ) : (
                                            <Icon className="w-5 h-5 text-gray-300" />
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p
                                            className={`text-sm transition-colors ${
                                                isCompleted
                                                    ? "text-gray-900 font-medium"
                                                    : isCurrent
                                                    ? "text-gray-700 font-medium"
                                                    : "text-gray-400"
                                            }`}
                                        >
                                            {step.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tips Section */}
                {!isComplete && (
                    <div className="px-8 py-6 border-t border-gray-100 mt-6">
                        <div className="text-center">
                            <p className="text-xs text-gray-500 transition-all duration-500">
                                {tips[currentTip]}
                            </p>
                        </div>
                    </div>
                )}

                {/* Complete Section */}
                {isComplete && (
                    <div className="px-8 py-8 border-t border-gray-100 mt-6 text-center">
                        <button
                            onClick={() => onClose(false)}
                            className="w-full bg-gray-900 text-white text-sm font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            View Content Pack
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoadingModal;
