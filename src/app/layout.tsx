// Next.js App Router entry point — automatically resolved by the framework.
// This file is intentionally not imported by other source files.
// See: https://nextjs.org/docs/app/building-your-application/routing

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata: Metadata = {
    title: "Motorola dataScrubTool",
    description:
        "A simple tool for scrubbing Motorola bootloader unlock data.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const currentYear = new Date().getFullYear();

    return (
        <html lang="en">
            <body className="flex min-h-screen flex-col">
                <main className="flex-1">
                    {children}
                </main>

                <footer className="bg-gray-800 p-4 text-center text-white">
                    <div className="flex items-center justify-center gap-2">
                        <p>
                            &copy; 2024–{currentYear} juic3b0x. All rights
                            reserved.
                        </p>

                        <a
                            href="https://github.com/juic3b0x/dataScrubTool"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View dataScrubTool on GitHub"
                            className="flex items-center transition-opacity hover:opacity-75"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <p className="mt-2 text-sm">
                        MOTOROLA, the Stylized M Logo, MOTO, and the MOTO
                        family of marks are trademarks of Motorola Trademark
                        Holdings, LLC. LENOVO is a trademark of Lenovo. All
                        other trademarks are the property of their respective
                        owners.
                    </p>
                </footer>

                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}