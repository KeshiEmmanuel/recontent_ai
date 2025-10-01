import { z } from "zod";

// Base tweet schema
const TweetSchema = z.object({
    content: z.string().min(1).max(280),
    threadNumber: z.number().optional(),
    totalThreads: z.number().optional(),
    isFirstTweet: z.boolean().optional(),
});

// Facebook post schema
const FacebookPostSchema = z.object({
    content: z.string().min(100).max(2500),
    hashtags: z.array(z.string()).min(3).max(5),
    callToAction: z.string(),
    engagementQuestions: z.array(z.string()).min(1).max(3),
});

// LinkedIn post schema
const LinkedInPostSchema = z.object({
    content: z.string().min(200).max(1500),
    keyInsights: z.array(z.string()).min(2).max(5),
    hashtags: z.array(z.string()).min(3).max(5),
    callToAction: z.string(),
});

// Instagram caption schema
const InstagramCaptionSchema = z.object({
    content: z.string().min(200).max(2200),
    hashtags: z.array(z.string()).min(10).max(15),
    callToAction: z.string(),
    emojis: z.array(z.string()).min(3).max(8),
});

// Email subject lines schema
const EmailSubjectLinesSchema = z.object({
    curiosityDriven: z.string().min(6).max(80).trim(),
    benefitFocused: z.string().min(6).max(80).trim(),
    urgencyScarcity: z.string().min(6).max(80).trim(),
    content: z.string().min(10).max(2200).trim(),
});

// Quotes schema
const QuotesSchema = z.object({
    quote1: z.string().min(5).max(100),
    quote2: z.string().min(5).max(100),
    quote3: z.string().min(5).max(100),
});

// Twitter thread schema (array of tweets)
const TwitterThreadSchema = z.object({
    tweets: z.array(TweetSchema).min(3).max(12),
    totalTweets: z.number().min(3).max(12),
    threadTopic: z.string(),
});

// Complete platform response schemas
export const PlatformSchemas = {
    facebook: FacebookPostSchema,
    twitter: TwitterThreadSchema,
    linkedin: LinkedInPostSchema,
    instagram: InstagramCaptionSchema,
    email: EmailSubjectLinesSchema,
    quotes: QuotesSchema,
} as const;

// Main API response schema
export const ContentRepurposeResponseSchema = z.object({
    success: z.boolean(),
    data: z.object({
        facebook: FacebookPostSchema.optional(),
        twitter: TwitterThreadSchema.optional(),
        linkedin: LinkedInPostSchema.optional(),
        instagram: InstagramCaptionSchema.optional(),
        email: EmailSubjectLinesSchema.optional(),
        quotes: QuotesSchema.optional(),
    }),
    warnings: z.record(z.string(), z.string()).optional(),
});

// Type exports
export type FacebookPost = z.infer<typeof FacebookPostSchema>;
export type TwitterThread = z.infer<typeof TwitterThreadSchema>;
export type LinkedInPost = z.infer<typeof LinkedInPostSchema>;
export type InstagramCaption = z.infer<typeof InstagramCaptionSchema>;
export type EmailSubjectLines = z.infer<typeof EmailSubjectLinesSchema>;
export type Quotes = z.infer<typeof QuotesSchema>;
export type ContentRepurposeResponse = z.infer<
    typeof ContentRepurposeResponseSchema
>;
