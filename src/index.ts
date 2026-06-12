#!/usr/bin/env node
import { Command } from "commander";

// declare progrm
const program = new Command();

// add args to program
program
	.argument("<string>", "string to log")
	.action((message: string) => {
	console.log(message);
});

// execute program with added args
program.parse(process.argv);
