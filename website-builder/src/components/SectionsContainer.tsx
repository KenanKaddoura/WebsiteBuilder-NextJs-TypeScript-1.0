"use client";

import React from "react";
import { BaseSection } from "../types/sections";
import { useSectionsStore } from "@/store/useSectionsStore";
import Image from "next/image";
import CollapsibleSection from "./CollapsibleSection";

interface SectionsContainerProps {
  title: string;
  sections: BaseSection[];
}

export default function SectionsContainer({
  title,
  sections,
}: SectionsContainerProps) {
  const addSection = useSectionsStore((state) => state.addSection);

  return (
    <CollapsibleSection title={title}>
      <div className="grid grid-cols-1 gap-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 rounded-md p-3 hover:shadow-md cursor-pointer transition-all"
            onClick={() => addSection(section)}
          >
            <div className="aspect-video bg-gray-700 mb-2 rounded-md overflow-hidden relative">
              <Image
                src={section.thumbnail}
                alt={section.title}
                style={{objectFit: section.type === "header" || 
                                    section.type === "footer" ? "contain" : "cover"}} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />    
            </div>
            <h4 className="font-medium text-sm text-black font-sans">
              {section.title}
            </h4>
            <p className="text-xs text-gray-500 font-sans">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
