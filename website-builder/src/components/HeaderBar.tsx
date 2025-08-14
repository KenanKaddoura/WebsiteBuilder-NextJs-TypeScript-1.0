"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import { useSectionsStore } from "@/store/useSectionsStore";
import type { BaseSection } from "@/types/sections"; // your existing type
import {
  ExportFileSchema,
  ImportAcceptSchema,
} from "@/lib/configSchema";
import { CURRENT_VERSION, runMigrations } from "@/lib/migrations";
import { toast } from "sonner";

export default function HeaderBar() {
  const clearSections = useSectionsStore((state) => state.clearSections);

  const sections = useSectionsStore((s) => s.sections);
  const setSections = useSectionsStore((s) => s.setSections);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleExport = useCallback(() => {
    const payload = {
      app: "Website-Builder",
      version: CURRENT_VERSION,
      exportedAt: new Date().toISOString(),
      sections,
    };

    // Validate we are exporting the correct shape
    ExportFileSchema.parse(payload);

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
          type: "application/json",
      });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `builder-config-v${CURRENT_VERSION}-${new Date().getSeconds().toString()}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }, [sections]);

    const importFromText = useCallback((text: string) => {
      // Accept either plain array or object-with-sections
      const parsed = JSON.parse(text);
      const accepted = ImportAcceptSchema.parse(parsed);

      const incomingVersion =
        Array.isArray(accepted) ? undefined : accepted.version;
      const incomingSections = Array.isArray(accepted)
        ? accepted
        : accepted.sections;

      // Run migrations if needed
      const migrated = runMigrations(incomingSections, incomingVersion);

      setSections(migrated as unknown as BaseSection[]);
      toast.success("Design Imported Successfully.");
    }, [setSections]);

    const handleImportClick = useCallback(() => {
      fileInputRef.current?.click();
    }, []);



  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-600 to-gray-900 border-b border-orange-400 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

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
                  importFromText(text);
                } catch (err) {
                  console.error(err);
                  toast.error("Failed to Import File. Ensure It's Valid JSON.");
                } finally {
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }
              }}
            />


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

            <button
              onClick={clearSections}
              className="px-4 py-2 bg-orange-100 text-gray-800 font-mono rounded-md hover:bg-orange-600 hover:text-white transition-colors"
            >
              Clear
            </button>
          </div>

          <h1 className="text-2xl font-mono font-extrabold text-orange-400  ">
            Website Builder
          </h1>
          <h1></h1>

          <Image src="/hammer.png" alt="Logo" width={40} height={40} />
        </div>
      </div>
    </header>
  );
}
