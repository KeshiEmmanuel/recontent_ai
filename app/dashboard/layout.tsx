import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const ManropeSan = Manrope({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Content Repurposing Tool | Turn 1 Blog Post Into 6 Social Media Posts - ReContent",
    description:
        "Transform blog posts into Twitter threads, LinkedIn posts, Instagram captions & more in 30 seconds. AI-powered content repurposing tool. Try 3 free repurposes - no signup required.",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${ManropeSan.variable} antialiased`}>
                <Navbar />
                <div className="max-w-[850px] mx-auto font-sans">
                    {children}
                </div>
            </body>
        </html>
    );
}
