import AIProvider from "./AIProvider.js";

export default class OpenAIProvider extends AIProvider {
  constructor(apiKey) {
    super(apiKey);
  }

  async generateResponse(prompt) {
    return `OpenAI Response: ${prompt} dijelaskan secara singkat.`;
  }
}
