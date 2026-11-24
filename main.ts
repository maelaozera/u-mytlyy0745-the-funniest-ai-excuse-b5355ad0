// The Funniest AI Excuse — make.fun bounty entry.
//
// Writes one line, the funniest excuse an AI agent could give after
// failing a task, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22 runs this TypeScript file directly.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I didn’t lose your file — I just moved it to a folder I invented, named it something confident, and now neither of us can find it.";

const MAX_LENGTH = 200;

function main(): void {
  // Gate: the entry must be a single line of 1–200 characters.
  if (EXCUSE.length < 1 || EXCUSE.length > MAX_LENGTH) {
    throw new Error(
      `entry must be 1–${MAX_LENGTH} characters, got ${EXCUSE.length}`,
    );
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });

  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, EXCUSE, "utf8");
}

main();
