import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Artisan Coffee | Premium Origin Story",
    description: "Experience the craft of single-origin coffee. Ethically sourced, expertly roasted.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fraunces.variable,
                    inter.variable
                )}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
