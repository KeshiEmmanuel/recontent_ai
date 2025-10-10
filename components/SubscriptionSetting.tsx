import React from "react";
import { Button } from "./ui/button";
import { Crown } from "lucide-react";
import UsageBar from "./UsageMeter";

const SubscriptionSetting = () => {
    return (
        <section className="mt-12">
            <div className="py-5">
                <h1 className="font-semibold py-1">Credits/Repurposes</h1>
                <UsageBar
                    spaceHoriziontal="py-2"
                    userData={{
                        usageCount: 0,
                        maxUsage: 5,
                    }}
                />
            </div>
            <h2 className="font-semibold">Manage Subscription</h2>
            <div className="mt-4 flex items-center justify-between bg-gray-100/30 rounded-lg px-6 py-3 shadow">
                <p>Free plan</p>
                <Button className="button button-component">
                    {" "}
                    <Crown /> Upgrade
                </Button>
            </div>
        </section>
    );
};

export default SubscriptionSetting;
