"use client";

import React, { useState, useEffect } from "react";
import SectionsContainer from "./SectionsContainer";
import { allSections } from "./sections";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionLibrary() {
  const [isSectionLibraryOpened, setIsSectionLibraryOpened] = useState(true);

  // Handle mobile view
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isSectionLibraryOpened && (
        <>
          {/* Mobile overlay */}
          {isMobileView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsSectionLibraryOpened(false)}
            />
          )}

          <motion.div
            initial={isMobileView ? { y: "100%" } : { x: "100%" }}
            animate={isMobileView ? { y: 0 } : { x: 0 }}
            exit={isMobileView ? { y: "100%" } : { x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`
                ${
                  isMobileView
                    ? "fixed bottom-0 left-0 right-0 h-[80vh] rounded-t-xl"
                    : "relative md:w-60 lg:w-70 xl:w-80 flex flex-col h-screen"
                } surface wborder z-50`}
          >
            {/* Header */}
            <div className="bg-orange-100 border-b border-orange-200 flex flex-row flex-shrink-0 justify-evenly items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 drop-shadow-md stroke-orange-400 stroke-1 hover:stroke-orange-600 hover:cursor-pointer"
                onClick={() => setIsSectionLibraryOpened(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>

              <h2 className="text-2xl p-4 pb-1 text-orange-400 font-mono font-bold mb-4 drop-shadow-md">
                Sections Library
              </h2>
              <hr className="border-orange-200 bg-orange-200 rounded-lg drop-shadow-md h-1" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 overflow-y-auto p-4"
            >
              {/* Scrollable Content */}
              <SectionsContainer
                title="Headers"
                sections={allSections.headers}
              />
              <SectionsContainer title="Heroes" sections={allSections.heroes} />
              <SectionsContainer
                title="Content"
                sections={allSections.content}
              />
              <SectionsContainer
                title="Footers"
                sections={allSections.footers}
              />
            </motion.div>
          </motion.div>
        </>
      )}

      {!isSectionLibraryOpened && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10 mt-4 mr-4 drop-shadow-md stroke-orange-400 stroke-2 hover:stroke-orange-600 hover:cursor-pointer"
          onClick={() => setIsSectionLibraryOpened(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
      )}
    </AnimatePresence>
  );
}
