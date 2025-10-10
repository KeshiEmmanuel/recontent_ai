import { Zap } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { BiSolidZap } from "react-icons/bi";

const UsageBar = ({
    spaceHoriziontal,
    userData,
}: {
    spaceHoriziontal: string;
    userData: {
        usageCount: number;
        maxUsage: number;
    };
}) => {
    return (
        <div
            className={`relative overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 ${spaceHoriziontal}`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent" />

            <div className="relative flex items-center justify-between gap-6">
                <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BiSolidZap  className="text-purple-600"/>
                            <span className="text-sm font-medium text-gray-700">
                                {userData.usageCount} / {userData.maxUsage}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500">
                            {Math.round(
                                (userData.usageCount / userData.maxUsage) * 100
                            )}
                            % used
                        </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-purple-600 to-purple-500 h-full rounded-full transition-all duration-500 ease-out"
                            style={{
                                width: `${
                                    (userData.usageCount / userData.maxUsage) *
                                    100
                                }%`,
                            }}
                        />
                    </div>
                </div>

                {userData.usageCount >= userData.maxUsage - 1 && (
                    <Button className="button button-primary whitespace-nowrap text-sm">
                        Upgrade
                    </Button>
                )}
            </div>
        </div>
    );
};

export default UsageBar;
