import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "vitest";
import { getPackageInfo, loadWordList, sample } from "../src/lib.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

describe("getPackageInfo", () => {
  test("should return package info", async () => {
    const packageInfo = await getPackageInfo();
    expect(packageInfo).toHaveProperty("name", "project-name");
    expect(packageInfo).toHaveProperty("version");
    expect(packageInfo).toHaveProperty("description");
    expect(typeof packageInfo.version).toBe("string");
    expect(typeof packageInfo.description).toBe("string");
  });
});

describe("loadWordList", () => {
  test("should return an array of adjectives", async () => {
    const words = await loadWordList(join(__dirname, "../src/adjectives.txt"));
    expect(Array.isArray(words)).toBe(true);
    expect(words.length).toBeGreaterThan(0);
  });

  test("should return an array of nouns", async () => {
    const words = await loadWordList(join(__dirname, "../src/nouns.txt"));
    expect(Array.isArray(words)).toBe(true);
    expect(words.length).toBeGreaterThan(0);
  });
});

describe("sample", () => {
  test("should return a random element from the array", () => {
    const array = ["foo", "bar", "baz"];
    const randomElement = sample(array);
    expect(array.includes(randomElement)).toBe(true);
  });
});
