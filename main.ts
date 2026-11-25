// One Line, One Laugh — make.fun entry
// Writes a single 91-character joke line to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line is a one-liner about a smart fridge taking its owner to court
// over the leftovers. The punchline lands on "unfit snacker": the appliance
// judges the human instead of the other way around.

const ENTRY =
  "My smart fridge just filed for custody of the leftovers — apparently I am an unfit snacker.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main() {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
  console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
}

main();
