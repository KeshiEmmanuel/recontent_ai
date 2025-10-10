"use client";

import { useState } from "react";

export const useContentRepurpose = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const repurposeContent = async (content: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/repurpose", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // console.log(data);
            if (data.success) {
                // console.log(results);
                return data.data; // Add this return statement
            } else {
                throw new Error(data.error || "Failed to generate content");
            }
        } catch (err) {
            setError(err.message);
            // console.error("Content repurposing error:", err);
            throw err; // Re-throw to handle in the component
        } finally {
            setIsLoading(false);
        }
    };

    return {
        repurposeContent,
        isLoading,
        error,
    };
};
