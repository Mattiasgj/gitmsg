import ollama from "ollama";
import { execSync } from "node:child_process";

export async function isOllamaRunning() {
	try {
		await fetch("http://localhost:11434/api/tags");
		return true;
	} catch (err) {
		console.log("error ollama not installed");
		return false;
	}
}

async function ensureModel() {
	const models = await ollama.list();

	const exists = models.models?.some((m) => m.name === "git-gen-llama");

	if (!exists) {
		await ollama.pull({ model: "llama3.2" });

		execSync(`ollama create git-gen-llama -f "./models/modelfile"`, {
			stdio: "inherit",
		});
	}

	console.log("Model ready");
}

async function main() {
	if (!(await isOllamaRunning())) {
		console.log("Please install and start Ollama first");
		return;
	}

	try {
		await ensureModel();
	} catch (err) {
		console.error("Setup failed:", err);
	}
}

main();
