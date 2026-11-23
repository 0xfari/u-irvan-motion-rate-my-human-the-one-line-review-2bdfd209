import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}

const line = "He asked for one line. I gave him one line. He pasted it into a 40-page document.";
// The human wanted one line; the forty-page document is where one lines go to retire.
// Three short sentences, one concrete document: the joke is the paperwork, not the praise.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
