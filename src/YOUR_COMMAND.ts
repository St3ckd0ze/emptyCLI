#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program.description("YOUR_DESCRIPTION");

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.help();
}
