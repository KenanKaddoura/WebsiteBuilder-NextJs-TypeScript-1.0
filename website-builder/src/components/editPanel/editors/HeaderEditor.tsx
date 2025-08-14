"use client";

import { HeaderSection } from "@/types/sections";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputWithLink from "@/components/ui/InputWithLink";

interface HeaderEditorProps {
  section: HeaderSection;
  onUpdate: (updates: Partial<HeaderSection>) => void;
}

export function HeaderEditor({ section, onUpdate }: HeaderEditorProps) {
  const [navigation, setNavigation] = useState(section.navigation);


  const updateNavigation = useCallback(
    (newNavigation: typeof navigation) => {
      setNavigation(newNavigation);
      onUpdate({ navigation: newNavigation });
    },
    [onUpdate]
  );


  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Logo URL
        </label>
        <input
          type="text"
          value={section.logo || ""}
          onChange={(e) => onUpdate({ logo: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter logo URL"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Navigation
          </label>
        </div>
        {navigation.map((item, index) => (
            <InputWithLink
              key={index}
              label={item.label}
              value={item.label}
              linkValue={item.link}
              onValueChange={(value) => {
                const newNav = [...navigation];
                newNav[index] = { ...item, label: value};
                updateNavigation(newNav);
              }}
              onLinkChange={(value) => {
                const newNav = [...navigation];
                newNav[index] = { ...item, link: value };
                updateNavigation(newNav);
              }}
            /> 
        ))}
      </div>
    </div>
  );
}

          // <div key={`nav-item-${index}`} className="flex gap-2 items-center">
          //   <input
          //     type="text"
          //     value={item.label}
          //     onChange={(e) => {
          //       const newNav = [...navigation];
          //       newNav[index] = { ...item, label: e.target.value };
          //       updateNavigation(newNav);
          //     }}
          //     className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          //     placeholder="Label"
          //   />
          //   <input
          //     type="text"
          //     value={item.link}
          //     onChange={(e) => {

          //     }}
          //     className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          //     placeholder="Link"
          //   />
          //   <button
          //     onClick={() => removeNavItem(index)}
          //     className="p-2 text-red-500 hover:text-red-600"
          //     type="button"
          //   >
          //     ×
          //   </button>
          // </div>