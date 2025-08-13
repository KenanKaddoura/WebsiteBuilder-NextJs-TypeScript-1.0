"use client";

import React from "react";
import Image from "next/image";
import { useSectionsStore } from "@/store/useSectionsStore";

export default function HeaderBar() {
  const clearSections = useSectionsStore((state) => state.clearSections);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-l from-gray-600 to-gray-900 border-b border-orange-400 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Image src="/hammer.png" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-mono font-extrabold text-orange-400">
            Website Builder
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={clearSections}
              className="px-4 py-2 bg-orange-100 text-gray-800 font-mono rounded-md hover:bg-orange-600 hover:text-white transition-colors"
            >
              Clear
            </button>
            <button className="px-4 py-2 bg-orange-400 text-white font-mono rounded-md hover:bg-orange-600">
              Import
            </button>
            <button className="px-4 py-2 bg-orange-400 text-white font-mono rounded-md hover:bg-orange-600">
              Export
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
