import { create } from "zustand";
import { BaseSection } from "@/types/sections";

interface SectionsState {
  sections: BaseSection[];
  editingSectionId: string | null;
  addSection: (section: BaseSection) => void;
  removeSection: (id: string) => void;
  updateSection: (id: string, patch: Partial<BaseSection>) => void;
  reorderSections: (sourceIndex: number, destinationIndex: number) => void;
  clearSections: () => void;
  setEditingSection: (id: string | null) => void;
}

export const useSectionsStore = create<SectionsState>((set) => ({
  sections: [],
  editingSectionId: null,
  addSection: (section) =>
    set((state) => ({
      sections: [...state.sections, { ...section, id: crypto.randomUUID() }],
    })),
  removeSection: (sectionId) =>
    set((state) => ({
      sections: state.sections.filter((section) => section.id !== sectionId),
      editingSectionId:
        state.editingSectionId === sectionId ? null : state.editingSectionId,
    })),
  updateSection: (id, patch) =>
    set((state) => ({
      sections: state.sections.map((section) =>
        section.id === id ? { ...section, ...patch } : section
      ),
    })),
  reorderSections: (sourceIndex, destinationIndex) =>
    set((state) => {
      const newSections = [...state.sections];
      const [removed] = newSections.splice(sourceIndex, 1);
      newSections.splice(destinationIndex, 0, removed);
      return { sections: newSections };
    }),
  clearSections: () => set({ sections: [], editingSectionId: null }),
  setEditingSection: (id) => set({ editingSectionId: id }),
}));
