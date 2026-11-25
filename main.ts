// Pigeon Pitch, One Line — make.fun bounty
// https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf
// One line, up to 200 characters: the elevator pitch a city pigeon gives
// investors for its startup.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Forget drones: my startup delivers your lunch by pigeon, same-day, zero emissions, and the courier eats the packaging, the receipt, and occasionally the lunch.";

// The gate is strict: one line, 1-200 characters, not only whitespace.
// Anything outside that range scores 0, so validate before writing.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`ENTRY must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
