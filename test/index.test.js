import { describe, expect, test } from "vitest";
import { generate } from "../src/index.js";

describe("generate", () => {
  test("should return a random project name", async () => {
    const projectName = await generate();
    expect(projectName).toBeDefined();
    expect(typeof projectName).toBe("string");
    expect(projectName.split(" ").length).toBe(2);
  });
});
