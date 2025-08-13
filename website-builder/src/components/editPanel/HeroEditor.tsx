"use client";

import { HeroSection } from "@/types/sections";

interface HeroEditorProps {
  section: HeroSection;
  onUpdate: (updates: Partial<HeroSection>) => void;
}

export function HeroEditor({ section, onUpdate }: HeroEditorProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Heading
        </label>
        <input
          type="text"
          value={section.heading}
          onChange={(e) => onUpdate({ heading: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subheading
        </label>
        <input
          type="text"
          value={section.subheading}
          onChange={(e) => onUpdate({ subheading: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Background Image URL
        </label>
        <input
          type="text"
          value={section.backgroundImage}
          onChange={(e) => onUpdate({ backgroundImage: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          CTA Text
        </label>
        <input
          type="text"
          value={section.ctaText}
          onChange={(e) => onUpdate({ ctaText: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
