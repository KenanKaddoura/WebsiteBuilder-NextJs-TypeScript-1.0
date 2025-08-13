import type { z } from "zod";
import { SectionsArraySchema } from "./configSchema";

// Bump this when you change how you write sections to disk.
export const CURRENT_VERSION = 1;

// Registry of data migrations.
// Example: when you move from 0 -> 1, add a function to transform the array.
type Migrator = (input: unknown) => unknown;

const migrations: Record<number, Migrator> = {
  // 0 -> 1 example placeholder (no-op):
  0: (input) => input,

  // Add future migrations like:
  // 1: (input) => /* transform from v1 -> v2 */ input,
};

// Runs migrations sequentially from fileVersion up to CURRENT_VERSION - 1
export function runMigrations(
  candidate: unknown,
  fileVersion: number | undefined
): z.infer<typeof SectionsArraySchema> {
  let working: unknown = candidate;

  // If version is missing, assume 0 (pre-versioning exports)
  const startVersion = typeof fileVersion === "number" ? fileVersion : 0;

  for (let v = startVersion; v < CURRENT_VERSION; v++) {
    const step = migrations[v];
    working = step ? step(working) : working;
  }

  // Final guard: ensure the end result is valid sections[]
  return SectionsArraySchema.parse(working);
}
