import { describe, expect, test } from "vitest";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cliPath = join(__dirname, "..", "src", "cli.js");

describe("CLI", () => {
  test("should generate a project name", () => {
    const output = execSync(`node ${cliPath} generate`).toString().trim();
    expect(output).toBeDefined();
    expect(typeof output).toBe("string");
    expect(output.split(" ").length).toBe(2);
  });

  test("should display version when --version flag is used", () => {
    const output = execSync(`node ${cliPath} --version`).toString().trim();
    expect(output).toMatch(/^\d+\.\d+\.\d+$/);
  });

  test("should display help information when --help flag is used", () => {
    const output = execSync(`node ${cliPath} --help`).toString().trim();
    expect(output).toContain("Usage:");
    expect(output).toContain("Options:");
  });
});
