// juic3b0x 2026 - page.tsx
// Next.js App Router entry point — automatically resolved by the framework.
// This file is intentionally not imported by other source files.
// See: https://nextjs.org/docs/app/building-your-application/routing

"use client";

import { useState } from "react";

export default function Home() {
    const [inputData, setInputData] = useState<string>("");
    const [scrubbedLine, setScrubbedLine] = useState<string>("");

    const scrubBootloader = (): void => {
        const lines = inputData.split("\n");

        const scrubbed = lines
            .map((line: string) => {
                let cleanLine = line
                    .replace(/\(bootloader\)/g, "")
                    .replace(/\s/g, "");

                if (cleanLine.startsWith("Unlockdata:")) {
                    cleanLine = cleanLine.replace("Unlockdata:", "");
                }

                return cleanLine;
            })
            .join("");

        setScrubbedLine(scrubbed);
    };

    const copyToClipboard = async (): Promise<void> => {
        if (!scrubbedLine) {
            return;
        }

        await navigator.clipboard.writeText(scrubbedLine);
        alert("Scrubbed data copied to clipboard!");
    };

    return (
        <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-3xl font-bold text-accent">
                Motorola dataScrubTool
            </h1>

            <section className="mb-8">
                <h2 className="mb-3 text-xl font-bold text-white">
                    Paste output from get_unlock_data:
                </h2>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <textarea
                        id="input_data"
                        name="input_data"
                        rows={7}
                        value={inputData}
                        onChange={(event) =>
                            setInputData(event.target.value)
                        }
                        placeholder="Paste your fastboot oem get_unlock_data output here..."
                        aria-label="Motorola bootloader unlock data"
                        className="min-h-40 flex-1"
                    />

                    <button
                        type="button"
                        onClick={scrubBootloader}
                        className="w-full rounded-lg bg-secondary px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 sm:w-auto"
                    >
                        Submit
                    </button>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="mb-3 text-xl font-bold text-white">
                    Scrubbed Line:
                </h2>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <textarea
                        id="output_data"
                        name="output_data"
                        rows={7}
                        readOnly
                        value={scrubbedLine}
                        placeholder="Your scrubbed unlock data will appear here..."
                        aria-label="Scrubbed Motorola bootloader unlock data"
                        className="min-h-40 flex-1 font-mono"
                    />

                    <button
                        type="button"
                        onClick={copyToClipboard}
                        disabled={!scrubbedLine}
                        className="w-full rounded-lg bg-secondary px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                    >
                        Copy
                    </button>
                </div>
            </section>

            <section className="rounded-lg bg-primary p-5 text-white shadow-box sm:p-6">
                <h3 className="text-xl font-bold">
                    Instructions:
                </h3>

                <p className="mt-3">
                    Copy and paste the output of the command:
                </p>

                <p className="mt-2 rounded-md bg-black/30 p-3 font-mono text-sm text-accent">
                    fastboot oem get_unlock_data
                </p>

                <p className="mt-3">
                    into the text area above.
                </p>

                <h4 className="mt-5 font-semibold">
                    Example:
                </h4>

                <pre className="mt-2 overflow-x-auto rounded-md bg-black/40 p-4 font-mono text-sm leading-6 text-white">
{`(bootloader) 0A40040192024205#4C4D3556313230
(bootloader) 30373731363031303332323239#BD00
(bootloader) 8A672BA4746C2CE02328A2AC0C39F95
(bootloader) 1A3E5#1F53280002000000000000000
(bootloader) 0000000`}
                </pre>
            </section>
        </main>
    );
}