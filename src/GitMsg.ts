import generateCommitMessage from "./features/generateCommitMessage.js";

export default class GitMsg {
	async commit() {
		console.log(await generateCommitMessage());
	}
}
