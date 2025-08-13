"use client";

import { ContentSection } from "@/types/sections";

interface ContentEditorProps {
  section: ContentSection;
  onUpdate: (updates: Partial<ContentSection>) => void;
}

export function ContentEditor({ section, onUpdate }: ContentEditorProps) {
  const handleContentChange = (
    field: keyof typeof section.content,
    value: string
  ) => {
    onUpdate({
      content: { ...section.content, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      {section.content.title !== undefined && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={section.content.title}
            onChange={(e) => handleContentChange("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Main Text
        </label>
        <textarea
          value={section.content.mainText}
          onChange={(e) => handleContentChange("mainText", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[150px]"
        />
      </div>

      {section.content.imageUrl !== undefined && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            value={section.content.imageUrl}
            onChange={(e) => handleContentChange("imageUrl", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      )}
    </div>
  );
}
