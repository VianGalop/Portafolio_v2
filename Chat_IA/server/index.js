import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
/* console.log("API KEY:", process.env.PASS); */

const app = express();

app.use(cors());
app.use(express.json());

/* const openai = new OpenAI({
  apiKey: process.env.PASS,
});
 */
app.post("/chat", async (req, res) => {
  try {
    const response = await openai.responses.create({
      model: "gpt-5",
      input: "Hola en que puedo ayudarte",
    });

    res.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

/* app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await openai.responses.create({
      model: "gpt-5",
      instructions: `
      Eres el asistente personal de Vianey.

      Información:
      - Full Stack Developer.
      - Experiencia con React, Express.js, Node.js y Python.
      - Especialista en desarrollo web moderno.
      - Responde únicamente preguntas relacionadas con el portafolio.
      `,
      input: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    res.json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error generando respuesta",
    });
  }
}); */

app.listen(3001, () => {
  console.log("Servidor IA activo");
});
