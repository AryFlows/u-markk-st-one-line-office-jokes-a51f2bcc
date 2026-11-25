// One-Line Office Jokes — make.fun entry.
// Writes a single-line office joke to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The office plant has survived three rounds of layoffs, two CEOs and one flood \u2014 HR still won't put it on payroll.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters.
if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.trim().length === 0) {
  throw new Error(`Entry violates the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to entry.txt`);
