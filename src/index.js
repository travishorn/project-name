import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadWordList, sample } from "./lib.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const adjectivesPath = join(__dirname, "adjectives.txt");
const nounsPath = join(__dirname, "nouns.txt");

export async function generate() {
  const adjectives = await loadWordList(adjectivesPath);
  const nouns = await loadWordList(nounsPath);

  if (adjectives.length === 0) {
    throw new Error("No adjectives available.");
  }

  if (nouns.length === 0) {
    throw new Error("No nouns available.");
  }

  const randomAdjective = sample(adjectives);
  const randomNoun = sample(nouns);
  return `${randomAdjective} ${randomNoun}`;
}
