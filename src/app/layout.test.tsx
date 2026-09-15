import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import RootLayout from "./layout";

vi.mock("@vercel/analytics/react", () => ({
    Analytics: () => null,
}));

vi.mock("@vercel/speed-insights/next", () => ({
    SpeedInsights: () => null,
}));

describe("RootLayout", () => {
    beforeEach(() => {
        cleanup();
        document.documentElement.lang = "";
        document.body.innerHTML = "";
    });

    it("renders the application content", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>,
        );

        expect(
            screen.getByText("Test Content"),
        ).toBeInTheDocument();
    });

    it("renders the GitHub link", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>,
        );

        const githubLink = screen.getByRole("link", {
            name: "View dataScrubTool on GitHub",
        });

        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute(
            "href",
            "https://github.com/juic3b0x/dataScrubTool",
        );
        expect(githubLink).toHaveAttribute("target", "_blank");
        expect(githubLink).toHaveAttribute(
            "rel",
            "noopener noreferrer",
        );
    });

    it("renders the copyright notice", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>,
        );

        const currentYear = new Date().getFullYear();

        expect(
            screen.getByText(
                `© 2024–${currentYear} juic3b0x. All rights reserved.`,
            ),
        ).toBeInTheDocument();
    });

    it("renders the trademark notice", () => {
        render(
            <RootLayout>
                <div>Test Content</div>
            </RootLayout>,
        );

        expect(
            screen.getByText(
                /MOTOROLA, the Stylized M Logo, MOTO, and the MOTO family/,
            ),
        ).toBeInTheDocument();
    });
});