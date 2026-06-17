import { exec } from "node:child_process";
import util from "node:util";
import { generateMessage } from "../services/generateMessage.js";
const execPromise = util.promisify(exec);

export default async function generateCommitMessage() {
	try {
		const { stdout, stderr } = await execPromise("git diff --staged");

		if (stdout == "") {
			return "Coldnt find staged files";
		}

		if (stderr) {
			return `Git error ${stderr}`;
		}
		return await generateMessage(stdout);
	} catch (err) {
		return `Failed to generate message: ${err} `;
	}
}
