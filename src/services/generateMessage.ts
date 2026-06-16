import ollama from "ollama";

export async function generateMessage(gitDiff: string) {
	const response = await ollama.chat({
		model: "git-gen",
		messages: [
			{
				role: "user",
				content:
					"Write a git commit message for the following git diff, please respond only with the commit message. git diff: \n" +
					gitDiff,
			},
		],
	});
	return response.message.content;
}
