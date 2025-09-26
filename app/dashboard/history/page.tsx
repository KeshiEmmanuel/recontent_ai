import { Button } from "@/components/ui/button";
import React from "react";

const HistoryPage = () => {
    return (
        <main className="mt-24">
            <div className="flex items-center justify-between font-semibold">
                <h1 className="text-xl">Your content history</h1>
                <Button className="button button-primary">New content</Button>
            </div>
        </main>
    );
};

export default HistoryPage;
