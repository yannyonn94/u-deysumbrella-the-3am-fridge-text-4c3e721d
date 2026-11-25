import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text — the winning line (concept test 43/50):
// a fridge that has been awake all night, counting snacks like a witness.
// 123 chars, all ASCII, one line, no trailing newline so the file is
// byte-identical to the line itself.
const LINE =
  "3:07 AM - fridge here. I counted your midnight snacks: 4. The yogurt expired Tuesday. The cake is gone. I saw everything.";

if (LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
