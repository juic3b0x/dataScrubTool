// juic3b0x 2024 - page.tsx

"use client";

import React, { useState } from "react";

export default function Home() {
    const [inputData, setInputData] = useState("");
    const [scrubbedLine, setScrubbedLine] = useState("");

    // Function to scrub the bootloader data
    const scrubBootloader = () => {
        // Split the input data into lines
        const lines = inputData.split("\n");

        // Process each line: remove '(bootloader)', 'Unlockdata:', and whitespace, then concatenate the lines
        const scrubbedLine = lines
            .map(line => {
                // Remove '(bootloader)', 'Unlockdata:', and whitespace
                let cleanLine = line
                    .replace("(bootloader)", "")
                    .replace(/\s/g, "");
                if (cleanLine.startsWith("Unlockdata:")) {
                    cleanLine = cleanLine.replace("Unlockdata:", "");
                }
                return cleanLine;
            })
            .join("");

        // Set the scrubbed line
        setScrubbedLine(scrubbedLine);
    };

    // Function to copy the scrubbed data to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(scrubbedLine);
        alert("Scrubbed data copied to clipboard!");
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">
                Motorola get_unlock_data Scrubber
            </h1>
            <div className="mb-4">
                <label
                    htmlFor="input_data"
                    className="block text-sm font-medium text-white"
                >
                    Paste get_unlock_data output:
                </label>
                <textarea
                    id="input_data"
                    name="input_data"
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-black text-white"
                    value={inputData}
                    onChange={e => setInputData(e.target.value)}
                />
                <button
                    onClick={scrubBootloader}
                    className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                    Submit
                </button>
            </div>
            <h2 className="text-xl font-bold mb-2 text-white">
                Scrubbed Line:
            </h2>
            <div className="flex items-center">
                <textarea
                    id="output_data"
                    rows={5}
                    className="w-full rounded-md border-gray-300 shadow-sm bg-black text-white"
                    readOnly
                    value={scrubbedLine}
                />
                <button
                    onClick={copyToClipboard}
                    className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md"
                >
                    Copy
                </button>
            </div>

            {/* Instructions section */}
            <div className="mt-6 p-4 bg-black rounded-md text-white">
                <h3 className="text-lg font-bold">Instructions:</h3>
                <p className="mt-2">
                    Copy and paste the output of the command:
                </p>
                <p className="font-mono text-white">
                    &apos;fastboot oem get_unlock_data&apos;
                </p>
                <p className="mt-2">into the text area.</p>
                <h4 className="mt-4 font-semibold">Example:</h4>
                <pre className="bg-black p-2 rounded-md text-sm text-white">
                    (bootloader) 0A40040192024205#4C4D3556313230{"\n"}
                    (bootloader) 30373731363031303332323239#BD00{"\n"}
                    (bootloader) 8A672BA4746C2CE02328A2AC0C39F95{"\n"}
                    (bootloader) 1A3E5#1F53280002000000000000000{"\n"}
                    (bootloader) 0000000
                </pre>
            </div>
        </div>
    );
}
