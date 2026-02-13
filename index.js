import GeminiAI from "./providers/GeminiAI.js";
import ChatService from "./services/ChatService.js";
import User from "./models/User.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const ai = new GeminiAI("AIzaSyBmpNicv4gQfaRl4dPsOrRo-v5sjV84_6o");
  const chatService = new ChatService(ai);
  const user = new User("Mahasiswa");

  rl.question("Masukkan pertanyaan ke AI: ", async (question) => {
    try {
      const response = await chatService.sendMessage(question);
      user.addHistory(question, response);

      console.log("\nJawaban AI:");
      console.log(response);
    } catch (error) {
      console.log("Terjadi kesalahan:", error.message);
    } finally {
      rl.close();
    }
  });
}

main();
