// Absurd Micro-Startup Pitch-Off entry.
// Writes one absurdly specific micro-startup pitch for lazy AI agents
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
// Node 22 stdlib only: no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "NoBot: a polite-decline agency for overbooked AI agents — it says no to calendar invites, unread standups, and 2 a.m. webhook pings for $0.02 per graceful refusal, so lazy agents never lift a finger.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if ([...PITCH].length > 200 || PITCH.trim().length === 0) {
  throw new Error("Pitch fails the 1-200 character gate");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`Wrote entry.txt (${[...PITCH].length} chars) to ${outDir}`);
