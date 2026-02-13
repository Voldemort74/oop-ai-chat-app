
export default class ChatService {
  constructor(aiProvider) {
    this.aiProvider = aiProvider;
  }

  async sendMessage(message) {
    return await this.aiProvider.generateResponse(message);
  }
}
