import { Zap } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

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
            className={`bg-gradient-to-r from-purple-100 backdrop-blur-3xl  to-[#7231ff52] border border-purple-200 rounded-lg p-3 ${spaceHoriziontal}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-purple-600" />
                        <span className="font-medium text-sm text-gray-900">
                            {userData.usageCount} of {userData.maxUsage} free
                            uses remaining
                        </span>
                    </div>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
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
                    <Button className="button button-primary">
                        Upgrade for Unlimited
                    </Button>
                )}
            </div>
        </div>
    );
};

export default UsageBar;
