// One Word for the Boss — entry program.
// Writes exactly one word describing a boss to /output/entry.txt.
// The word is the whole entry: single word, no spaces, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

// "Blackhole": requests, emails and ideas go in, nothing ever comes back.
const WORD = "Blackhole";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
