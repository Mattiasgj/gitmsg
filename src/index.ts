#!/usr/bin/env node
import { Command } from "commander";
import GitMsg from "./GitMsg.js";

// Initalize gitmsg class that holds all features of the cli
const gitMsg = new GitMsg();

// declare progrm
const program = new Command();

// add args to program
program
	.command("commit")
	.description("generate commit message from current git branch")
	.action(() => {
		gitMsg.commit();
	});

// execute program with added args
program.parse(process.argv);
