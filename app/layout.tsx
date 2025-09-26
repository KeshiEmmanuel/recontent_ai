import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingpage/Navbar";

const ManropeSan = Manrope({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Content Repurposing Tool | Turn 1 Blog Post Into 5 Social Media Posts - ReContent",
    description:
        "Transform blog posts into Twitter threads, LinkedIn posts, Instagram captions & more in 30 seconds. AI-powered content repurposing tool. Try 3 free repurposes - no signup required.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${ManropeSan.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
