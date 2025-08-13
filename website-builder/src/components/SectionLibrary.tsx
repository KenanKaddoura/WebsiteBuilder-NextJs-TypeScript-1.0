import React from "react";
import SectionsContainer from "./SectionsContainer";
import { allSections } from "./sections";

export default function SectionLibrary() {
  return (
    <div className="w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto ">
      <div>
        <h2 className="text-lg ps-4 pt-4 text-orange-400 font-mono font-bold mb-4">
          Sections Library
        </h2>
      </div>
        <div className="p-4 bg-orange-50 min-h-screen max-h-screen">
          <SectionsContainer title="Headers" sections={allSections.headers} />
          <SectionsContainer title="Heroes" sections={allSections.heroes} />
          <SectionsContainer title="Content" sections={allSections.content} />
          <SectionsContainer title="Footers" sections={allSections.footers} />
        </div>
    </div>
  );
}
