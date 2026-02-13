# Cara Menjalankan Program

1. Pastikan Node.js sudah terinstall  
   Cek dengan perintah:
   node -v

2. Install dependency:
   npm install

3. Masukkan API Key Gemini ke file index.js:
   const ai = new GeminiAI("API_KEY");

4. Jalankan program:
   node index.js

5. Program akan menampilkan jawaban AI di terminal.

---

# Cara Mengganti AI Provider

1. Buat class AI baru yang extends AIProvider
2. Implementasikan method generateResponse(prompt)
3. Ganti AI Provider di file index.js

Contoh:
const ai = new GeminiAI("API_KEY");

Atau:
const ai = new OpenAIProvider("API_KEY");