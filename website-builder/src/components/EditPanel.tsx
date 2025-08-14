"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionsStore } from "@/store/useSectionsStore";
import dynamic from "next/dynamic";

// Dynamic imports without disabling SSR
const HeaderEditor = dynamic(() =>
  import("./editPanel/HeaderEditor").then((mod) => mod.HeaderEditor)
);
const HeroEditor = dynamic(() =>
  import("./editPanel/HeroEditor").then((mod) => mod.HeroEditor)
);
const ContentEditor = dynamic(() =>
  import("./editPanel/ContentEditor").then((mod) => mod.ContentEditor)
);
const FooterEditor = dynamic(() =>
  import("./editPanel/FooterEditor").then((mod) => mod.FooterEditor)
);
import {
  ContentSection,
  FooterSection,
  HeaderSection,
  HeroSection,
} from "@/types/sections";

export default function EditPanel() {
  const editingSectionId = useSectionsStore((state) => state.editingSectionId);
  const sections = useSectionsStore((state) => state.sections);
  const updateSection = useSectionsStore((state) => state.updateSection);
  const setEditingSection = useSectionsStore(
    (state) => state.setEditingSection
  );

  const editingSection = sections.find((s) => s.id === editingSectionId);

  // Handle mobile view
  const [isMobileView, setIsMobileView] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!editingSection) return null;

  const renderEditor = () => {
    switch (editingSection.type) {
      case "header":
        return (
          <HeaderEditor
            section={editingSection as HeaderSection}
            onUpdate={(updates) => updateSection(editingSection.id, updates)}
          />
        );
      case "hero":
        return (
          <HeroEditor
            section={editingSection as HeroSection}
            onUpdate={(updates) => updateSection(editingSection.id, updates)}
          />
        );
      case "content":
        return (
          <ContentEditor
            section={editingSection as ContentSection}
            onUpdate={(updates) => updateSection(editingSection.id, updates)}
          />
        );
      case "footer":
        return (
          <FooterEditor
            section={editingSection as FooterSection}
            onUpdate={(updates) => updateSection(editingSection.id, updates)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {editingSection && (
        <>
          {/* Mobile overlay */}
          {isMobileView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setEditingSection(null)}
            />
          )}

          {/* Edit panel */}
          <motion.div
            initial={isMobileView ? { y: "100%" } : { x: "100%" }}
            animate={isMobileView ? { y: 0 } : { x: 0 }}
            exit={isMobileView ? { y: "100%" } : { x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed ${
              isMobileView
                ? "bottom-0 left-0 right-0 h-[80vh] rounded-t-xl"
                : "top-0 right-0 h-full overflow-y-auto w-80"
            } surface wborder z-50`}
          >
            <div className="sticky top-0 bg-orange-100 wborder px-4 py-3 flex items-center justify-between">
              <h3 className="text-xl text-orange-400 font-mono font-bold  ">
                Edit{" "}
                {editingSection.type.charAt(0).toUpperCase() +
                  editingSection.type.slice(1)}
              </h3>
              <button
                onClick={() => setEditingSection(null)}
                className="p-2 font-sans text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                ✅ Done
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-4 edit-panel"
            >
              {renderEditor()}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
