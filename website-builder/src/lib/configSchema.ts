// src/lib/configSchema.ts
import { z } from "zod";

// Loose core section shape you already rely on.
// If you have concrete section-type unions, you can refine this later.
export const SectionSchema = z.object({
  id: z.string().min(1),
  type: z.string().min(1),
  title: z.string().min(1),
}).loose();

export const SectionsArraySchema = z.array(SectionSchema);

// exported file structure is versioned.
export const ExportFileSchema = z.object({
  app: z.literal("Website-Builder").default("Website-Builder"),
  version: z.number().int().nonnegative(),
  exportedAt: z.iso.datetime(),
  sections: SectionsArraySchema,
});

// What we’ll accept during import (tolerant):
// - either a bare array of sections
// - or an object with { sections, version? }
export const ImportAcceptSchema = z.union([
  SectionsArraySchema, // bare array
  z.object({
    version: z.number().int().nonnegative().optional(),
    sections: SectionsArraySchema,
  }),
]);

export type SectionDTO = z.infer<typeof SectionSchema>;
