import React from "react";
import SectionsContainer from "./SectionsContainer";
import { allSections } from "./sections";

export default function SectionLibrary() {
  return (
    <div className="xs:w-40 sm:w-50 md:w-60 lg:w-70 xl:w-80 surface wborder flex flex-col h-screen">
      
      {/* Header */}
      <div className="bg-orange-100 border-b border-orange-200 flex-shrink-0">
        <h2 className="text-2xl p-4 pb-1 text-orange-400 font-mono font-bold mb-4 drop-shadow-md">
          Sections Library
        </h2>
        <hr className="border-orange-200 bg-orange-200 rounded-lg drop-shadow-md h-1" />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <SectionsContainer title="Headers" sections={allSections.headers} />
        <SectionsContainer title="Heroes" sections={allSections.heroes} />
        <SectionsContainer title="Content" sections={allSections.content} />
        <SectionsContainer title="Footers" sections={allSections.footers} />
      </div>
    </div>
  );
}
