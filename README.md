# Git Commit Message Generator
This project is a Git commit message generator that uses the llama3.2 model to generate commit message based on the changes made in the current branch. The generator takes the diff of the changes and generates a commit message that summarizes the changes.

## Installation
This project uses a LLM (Language Model) to generate commit messages, and it requires Ollama to be installed and running on your machine. This project uses the model llama3.2 witch works on graphics cards with up to 3gb vram, if you have a graphics card with more vram, you can use a larger model for better performance. 

To use a different model, modify the following line in the `setup.js` file:
```
await ollama.pull({ model: "llama3.2" });
```
Replace "llama3.2" with the name of the model you want to use.

Also make sure to update the first line in the modelfile located in the `models` directory to match the name of the model you are using. For example, if you are using the llama3.2 model, the first line of the modelfile should be:
```
FROM llama3.2
```

To install the project, follow these steps:
1. Clone the repository:
   ```bash
   git clone
   ```
2. Navigate to the project directory:
   ```bash
   cd gitmsg
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. In order to use the generator, ollama needs to be installed and running on your machine. You can download ollama from [here](https://ollama.com/).
5. If ollama is installed and running, run the following command to pull the llama3.2 model and configure it for use with the generator:
   ```bash
   node setup.js
   ```
6. Compile the generator:
   ```bash
   tsc
   ```
7. Adding the generator to your system PATH:
   ```bash
   npm link
   ```
## Usage
To use the generator, navigate to your git repository and run the following command:
```bash
gitmsg commit 
```	
The generator will analyze the staged changes and generate a commit message based on the diff. The message will be printed to the console, and you can copy it to use as your commit message.