import {
    getMaxTokensForPlatform,
    getStructuredFallbackContent,
    getTemperatureForPlatform,
} from "@/lib/utils";

import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { PROMPTS } from "../context";
import { PlatformSchemas } from "@/lib/schema";
type Platform = keyof typeof PlatformSchemas;
export const generatePlatformContent = async (
    blogContent: string,
    platform: Platform
): Promise<any> => {
    console.log(`🎯 Generating structured ${platform} content...`);
    console.log(`📝 Input content length: ${blogContent.length}`);

    try {
        const promptTemplate = PROMPTS[platform];
        if (!promptTemplate) {
            throw new Error(`No prompt found for platform: ${platform}`);
        }

        const prompt = promptTemplate.replace("{blog_content}", blogContent);
        const schema = PlatformSchemas[platform];

        console.log(`📋 Using structured schema for ${platform}`);

        const result = await generateObject({
            model: google("gemini-2.5-flash-lite"),
            prompt: prompt,
            schema: schema,
            temperature: getTemperatureForPlatform(platform),
            maxOutputTokens: getMaxTokensForPlatform(platform),
        });
        console.log(result.object);
        console.log(`🤖 Structured response for ${platform}:`, {
            hasObject: !!result.object,
            keys: result.object ? Object.keys(result.object) : [],
        });

        if (!result.object) {
            console.error(`⚠️ Empty structured response for ${platform}`);
            return getStructuredFallbackContent(platform, blogContent);
        }

        // Validate the response matches our schema
        const validatedContent = schema.parse(result.object);
        console.log(`✅ ${platform} validation successful`);

        return validatedContent;
    } catch (error: any) {
        console.error(
            `💥 Error generating structured ${platform} content:`,
            error.message
        );

        // Return structured fallback
        return getStructuredFallbackContent(platform, blogContent);
    }
};
