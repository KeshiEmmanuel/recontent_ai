import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    EmailSubjectLines,
    FacebookPost,
    InstagramCaption,
    LinkedInPost,
    Quotes,
    TwitterThread,
} from "./schema";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTemperatureForPlatform = (platform: any) => {
    const temperatures = {
        twitter: 0.8, // Creative but focused
        linkedin: 0.7, // Professional but engaging
        instagram: 0.9, // Most creative
        email: 0.6, // Direct and clear
        quotes: 0.5, // Precise extraction
    };
    return temperatures[platform] || 0.7;
};

export const getMaxTokensForPlatform = (platform: any) => {
    const maxTokens = {
        facebook: 1200,
        twitter: 1500, // Thread format needs more tokens
        linkedin: 1000, // Single post
        instagram: 1200, // Longer caption
        email: 1000, // Just subject lines
        quotes: 500, // 3 short quotes
    };
    return maxTokens[platform] || 1000;
};

export const getStructuredFallbackContent = (
    platform: string,
    blogContent: string
): any => {
    const title =
        (blogContent && blogContent.split("\n")[0]) ||
        "Content Generation Failed";
    const snippet =
        (blogContent && blogContent.substring(0, 200)) || "Please try again.";

    const fallbacks = {
        facebook: {
            content: `${title}\n\n${snippet}...\n\nWhat are your thoughts? 🤔`,
            hashtags: ["content", "marketing", "business"],
            callToAction: "Share your thoughts in the comments!",
            engagementQuestions: [
                "What's your experience with this?",
                "Have you tried this approach?",
            ],
        } as FacebookPost,

        twitter: {
            tweets: [
                {
                    content: `🧵 ${title}`,
                    isFirstTweet: true,
                    threadNumber: 1,
                    totalThreads: 3,
                },
                {
                    content: `1/3 ${snippet}...`,
                    threadNumber: 2,
                    totalThreads: 3,
                },
                {
                    content: `2/3 What's your experience? Share in the replies! 💭`,
                    threadNumber: 3,
                    totalThreads: 3,
                },
            ],
            totalTweets: 3,
            threadTopic: title,
        } as TwitterThread,

        linkedin: {
            content: `${title}\n\nKey insight: ${snippet}...\n\nWhat's your perspective on this?`,
            keyInsights: [
                "Content generation requires reliable systems",
                "Fallback strategies ensure user experience",
            ],
            hashtags: ["business", "insights", "content"],
            callToAction: "What's been your experience with this approach?",
        } as LinkedInPost,

        instagram: {
            content: `${title} ✨\n\n${snippet}...\n\nThoughts? 💭`,
            hashtags: [
                "content",
                "marketing",
                "business",
                "entrepreneur",
                "growth",
                "tips",
                "success",
                "motivation",
                "inspiration",
                "socialmedia",
            ],
            callToAction: "Double tap if you agree! 💙",
            emojis: ["✨", "💭", "💙", "🚀"],
        } as InstagramCaption,

        email: {
            curiosityDriven: `The ${title} Secret`,
            benefitFocused: `${title} - Key Insights`,
            urgencyScarcity: `Don't Miss: ${title}`,
        } as EmailSubjectLines,

        quotes: {
            quote1: "Success comes from consistent action",
            quote2: "Every failure teaches valuable lessons",
            quote3: "Progress beats perfection every time",
        } as Quotes,
    };

    return fallbacks[platform as keyof typeof fallbacks] || null;
};
