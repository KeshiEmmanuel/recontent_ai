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

type TemperaturePlatform =
    | "twitter"
    | "linkedin"
    | "instagram"
    | "email"
    | "quotes";
type MaxTokensPlatform =
    | "facebook"
    | "twitter"
    | "linkedin"
    | "instagram"
    | "email"
    | "quotes";

export const getTemperatureForPlatform = (platform: string) => {
    const temperatures: Record<TemperaturePlatform, number> = {
        twitter: 0.8, // Creative but focused
        linkedin: 0.7, // Professional but engaging
        instagram: 0.9, // Most creative
        email: 0.6, // Direct and clear
        quotes: 0.5, // Precise extraction
    };
    return temperatures[platform as TemperaturePlatform] || 0.7;
};

export const getMaxTokensForPlatform = (platform: string) => {
    const maxTokens: Record<MaxTokensPlatform, number> = {
        facebook: 1200,
        twitter: 1500, // Thread format needs more tokens
        linkedin: 1000, // Single post
        instagram: 1200, // Longer caption
        email: 1000, // Just subject lines
        quotes: 500, // 3 short quotes
    };
    return maxTokens[platform as MaxTokensPlatform] || 1000;
};

// Union type of all possible platform content types
type PlatformContent =
    | FacebookPost
    | TwitterThread
    | LinkedInPost
    | InstagramCaption
    | EmailSubjectLines
    | Quotes;

export const getStructuredFallbackContent = (
    platform: string,
    blogContent: string
): PlatformContent | null => {
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
                    isFirstTweet: false,
                    threadNumber: 2,
                    totalThreads: 3,
                },
                {
                    content: `2/3 What's your experience? Share in the replies! 💭`,
                    isFirstTweet: false,
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

// Supabase returns dates in ISO format like: "2025-09-29T19:35:35.757211+00:00"
export function getTimeAgo(supabaseDate: string) {
    const date = new Date(supabaseDate);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "week", seconds: 604800 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
}
