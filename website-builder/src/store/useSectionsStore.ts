import { create } from "zustand";
import { BaseSection } from "@/types/sections";

interface SectionsStore {
  sections: BaseSection[];
  addSection: (section: BaseSection) => void;
  removeSection: (sectionId: string) => void;
  reorderSections: (sourceIndex: number, destinationIndex: number) => void;
  clearSections: () => void;
}

export const useSectionsStore = create<SectionsStore>((set) => ({
  sections: [],
  addSection: (section) =>
    set((state) => ({
      sections: [...state.sections, { ...section, id: crypto.randomUUID() }],
    })),
  removeSection: (sectionId) =>
    set((state) => ({
      sections: state.sections.filter((section) => section.id !== sectionId),
    })),
  reorderSections: (sourceIndex, destinationIndex) =>
    set((state) => {
      const newSections = [...state.sections];
      const [removed] = newSections.splice(sourceIndex, 1);
      newSections.splice(destinationIndex, 0, removed);
      return { sections: newSections };
    }),
  clearSections: () => set({ sections: [] }),
}));
