// providers/GeminiAI.js
import AIProvider from "./AIProvider.js";

export default class GeminiAI extends AIProvider {
  constructor(apiKey) {
    super(apiKey);
  }

  async generateResponse(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }]
            }
          ]
        })
      });

      const data = await response.json();

      if (
        data.candidates &&
        data.candidates.length > 0 &&
        data.candidates[0].content?.parts?.length > 0
      ) {
        return data.candidates[0].content.parts[0].text;
      }

      return "AI gak bisa jawab (response kosong)";
    } catch (err) {
      return `Error AI: ${err.message}`;
    }
  }
}
