// 의존성
require("dotenv").config();
const express = require("express");
const { GoogleGenAI } = require("@google/genai");
const GroqAI = require("groq-sdk");

// 전역변수
const app = express();
const { GEMINI_API_KEY, GROQ_API_KEY, PORT } = process.env;
const google = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const groq = new GroqAI({ apiKey: GROQ_API_KEY });

app.use(express.json());

app.listen(PORT, () => {
  console.log(`${PORT}에서 실행`);
});
