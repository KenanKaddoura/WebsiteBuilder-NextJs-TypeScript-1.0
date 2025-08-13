"use client";

import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import SectionProducer from "./sections/SectionProducer";
import { useSectionsStore } from "@/store/useSectionsStore";
import Image from "next/image";
 
export default function PreviewSpace() {
  const sections = useSectionsStore((state) => state.sections);
  const reorderSections = useSectionsStore((state) => state.reorderSections);
  const removeSection = useSectionsStore((state) => state.removeSection);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    reorderSections(result.source.index, result.destination.index);
  };

  return (
    <div className="h-full overflow-y-auto bg-orange-50 rounded-lg shadow-inner mx-4">
      <div className="min-h-full w-full max-w-6xl mx-auto">
        {/* Empty PreviewSpace */}
        {sections.length === 0 ? (
          <div className="h-screen flex items-center justify-center">
            <div className="text-center p-8">
              <div className="mb-4">
                <Image src="/click.png" alt="Logo" width={40} height={40} className="mx-auto"/>
              </div>
              <h3 className="text-lg font-sans font-medium text-gray-900">
                No sections added yet
              </h3>
              <p className="mt-1 text-sm font-sans text-gray-500">
                Click on the sections from the library to start building your
                website
              </p>
            </div>
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="preview-sections">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="preview-sections"
                >
                  {sections.map((section, index) => (
                    <Draggable
                      key={section.id}
                      draggableId={section.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`preview-section border-2 relative group ${
                            snapshot.isDragging
                              ? "border-orange-500 shadow-lg"
                              : "border-transparent"
                          } transition-colors mb-4`}
                        >
                          <button
                            onClick={() => removeSection(section.id)}
                            className="absolute top-2 right-2 z-10 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                            aria-label="Delete section"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <SectionProducer section={section} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  );
}
