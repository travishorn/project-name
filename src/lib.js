import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const packageJsonPath = join(__dirname, "..", "package.json");

export async function getPackageInfo() {
  try {
    const data = await readFile(packageJsonPath, "utf8");
    const packageJson = JSON.parse(data);
    return {
      name: packageJson.name,
      version: packageJson.version,
      description: packageJson.description,
    };
  } catch (error) {
    console.error("Error reading package.json:", error);
    return { name: "Unknown", version: "0.0.0", description: "Unknown" };
  }
}

export async function loadWordList(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    const words = data
      .split("\n")
      .map((word) => word.trim())
      .filter((word) => word !== "");
    return words;
  } catch (error) {
    console.error("Error loading words:", error);
    return [];
  }
}

export function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}
