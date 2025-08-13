"use client";

import React, { useRef }  from "react";
import Image from "next/image";
import { useSectionsStore } from "@/store/useSectionsStore";
import type { BaseSection } from "@/types/sections";

export default function HeaderBar() {
  const clearSections = useSectionsStore((state) => state.clearSections);

  const sections = useSectionsStore((state) => state.sections);
  const setSections = useSectionsStore((state) => state.setSections);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleExport = () => {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      sections, // current builder state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "builder-config.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-l from-gray-600 to-gray-900 border-b border-orange-400 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Image src="/hammer.png" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-mono font-extrabold text-orange-400">
            Website Builder
          </h1>
          <div className="flex items-center gap-3">

            {/* Hidden Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                try {
                  const text = await file.text();
                  const parsed = JSON.parse(text);

                  // Accept both { sections: [...] } and plain [...]
                  const candidate: unknown = Array.isArray(parsed) ? parsed : parsed?.sections;

                  // Minimal runtime validation
                  const valid =
                    Array.isArray(candidate) &&
                    candidate.every(
                      (s) =>
                        typeof s === "object" &&
                        s !== null &&
                        typeof (s as any).id === "string" &&
                        typeof (s as any).type === "string" &&
                        typeof (s as any).title === "string"
                    );

                  if (!valid) {
                    alert("Invalid configuration file. Make sure it matches the exported format.");
                    return;
                  }

                  // Optionally normalize / migrate here if needed
                  setSections(candidate as BaseSection[]);
                  alert("Design imported successfully.");
                } catch (err) {
                  console.error(err);
                  alert("Failed to import file. Is it valid JSON?");
                } finally {
                  // reset so selecting the same file again still triggers onChange
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }
              }}
            />

            <button
              onClick={clearSections}
              className="px-4 py-2 bg-orange-100 text-gray-800 font-mono rounded-md hover:bg-orange-600 hover:text-white transition-colors"
            >
              Clear
            </button>
            <button 
              onClick={handleImportClick}
              className="px-4 py-2 bg-orange-400 text-white font-mono rounded-md hover:bg-orange-600">
                Import
            </button>
            <button 
              onClick={handleExport}
              className="px-4 py-2 bg-orange-400 text-white font-mono rounded-md hover:bg-orange-600">
                Export
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
