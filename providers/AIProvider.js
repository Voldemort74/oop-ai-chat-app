
export default class AIProvider {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async generateResponse(prompt) {
    throw new Error("Method generateResponse() harus diimplementasikan");
  }
}
