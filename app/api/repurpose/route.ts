import { NextRequest, NextResponse } from "next/server";
import { generatePlatformContent } from "@/utils/ai";
import { getStructuredFallbackContent } from "@/lib/utils";
import { ContentRepurposeResponseSchema } from "@/lib/schema";

export async function POST(request: NextRequest) {
    try {
        console.log("🚀 Structured API route called");

        const { content } = await request.json();
        console.log("📝 Received content length:", content?.length);

        if (!content || content.length < 100) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Content too short. Please provide at least 100 characters.",
                },
                { status: 400 }
            );
        }

        console.log("✅ Content validation passed");

        const platforms = [
            "facebook",
            "twitter",
            "linkedin",
            "instagram",
            "email",
            "quotes",
        ] as const;

        // Generate all platforms in parallel
        const results = await Promise.allSettled(
            platforms.map((platform) =>
                generatePlatformContent(content, platform)
            )
        );

        // Process structured results
        const finalResults: Record<string, any> = {};
        const errors: Record<string, string> = {};

        results.forEach((result, index) => {
            const platform = platforms[index];
            console.log(
                `📋 Processing structured ${platform} result:`,
                result.status
            );

            if (result.status === "fulfilled" && result.value) {
                finalResults[platform] = result.value;
                console.log(`✅ ${platform} structured content complete`);
            } else {
                console.error(`❌ ${platform} failed:`, result.reason);
                errors[platform] = result.reason?.message || "Unknown error";
                finalResults[platform] = getStructuredFallbackContent(
                    platform,
                    content
                );
            }
        });

        const responseData = {
            success: true,
            data: finalResults,
            warnings: Object.keys(errors).length > 0 ? errors : undefined,
        };

        // Validate response with Zod
        const validatedResponse =
            ContentRepurposeResponseSchema.parse(responseData);

        console.log("📤 Sending validated structured response");
        return NextResponse.json(validatedResponse);
    } catch (error: any) {
        console.error("💥 Structured API Error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Internal server error: " + error.message,
            },
            { status: 500 }
        );
    }
}
