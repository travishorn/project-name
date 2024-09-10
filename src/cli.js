#!/usr/bin/env node

import { Command } from "commander";
import { getPackageInfo } from "./lib.js";
import { generate } from "./index.js";

const { name, version, description } = await getPackageInfo();

const program = new Command()
  .name(name.split("/")[1])
  .description(description)
  .version(version);

program
  .command("generate")
  .description("Generate a random project name")
  .action(async () => {
    try {
      console.log(await generate());
    } catch (error) {
      console.error(error.message);
    }
  });

program.parse(process.argv);
