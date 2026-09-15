import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./page";

describe("Motorola dataScrubTool", () => {
    beforeEach(() => {
        vi.restoreAllMocks();

        Object.assign(navigator, {
            clipboard: {
                writeText: vi.fn().mockResolvedValue(undefined),
            },
        });

        vi.spyOn(window, "alert").mockImplementation(() => {});
    });

    it("renders the main page", () => {
        render(<Home />);

        expect(
            screen.getByRole("heading", {
                name: "Motorola dataScrubTool",
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: "Paste output from get_unlock_data:",
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: "Scrubbed Line:",
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: "Instructions:",
            }),
        ).toBeInTheDocument();
    });

    it("renders both text fields", () => {
        render(<Home />);

        expect(
            screen.getByRole("textbox", {
                name: "Motorola bootloader unlock data",
            }),
        ).toBeInTheDocument();

        expect(
            screen.getByRole("textbox", {
                name: "Scrubbed Motorola bootloader unlock data",
            }),
        ).toBeInTheDocument();
    });

    it("scrubs bootloader output correctly", () => {
        render(<Home />);

        const input = screen.getByRole("textbox", {
            name: "Motorola bootloader unlock data",
        });

        const output = screen.getByRole("textbox", {
            name: "Scrubbed Motorola bootloader unlock data",
        });

        fireEvent.change(input, {
            target: {
                value: `(bootloader) 0A40040192024205#4C4D3556313230
(bootloader) 30373731363031303332323239#BD00
(bootloader) 8A672BA4746C2CE02328A2AC0C39F95
(bootloader) 1A3E5#1F53280002000000000000000
(bootloader) 0000000`,
            },
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Submit",
            }),
        );

        expect(output).toHaveValue(
            "0A40040192024205#4C4D355631323030373731363031303332323239#BD008A672BA4746C2CE02328A2AC0C39F951A3E5#1F532800020000000000000000000000",
        );
    });

    it("removes Unlockdata prefix", () => {
        render(<Home />);

        const input = screen.getByRole("textbox", {
            name: "Motorola bootloader unlock data",
        });

        const output = screen.getByRole("textbox", {
            name: "Scrubbed Motorola bootloader unlock data",
        });

        fireEvent.change(input, {
            target: {
                value: "(bootloader) Unlockdata: ABC123",
            },
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Submit",
            }),
        );

        expect(output).toHaveValue("ABC123");
    });

    it("disables Copy when there is no scrubbed data", () => {
        render(<Home />);

        expect(
            screen.getByRole("button", {
                name: "Copy",
            }),
        ).toBeDisabled();
    });

    it("copies scrubbed data to the clipboard", async () => {
        render(<Home />);

        const input = screen.getByRole("textbox", {
            name: "Motorola bootloader unlock data",
        });

        fireEvent.change(input, {
            target: {
                value: "(bootloader) Unlockdata: ABC123",
            },
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Submit",
            }),
        );

        fireEvent.click(
            screen.getByRole("button", {
                name: "Copy",
            }),
        );

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
            "ABC123",
        );
    });
});