
import { Injectable } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenAI;

  constructor() {
    // IMPORTANT: The API key is sourced from environment variables for security.
    // This variable MUST be set in the execution environment.
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set.");
    }
    this.genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateDesignIdeas(userInput: string): Promise<string> {
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `Eres un asistente de diseño de moda experto para un taller de costura llamado "El Hilo Dorado". 
    Tu tarea es tomar la descripción de una prenda del cliente y expandirla en una sugerencia de diseño detallada y atractiva.
    Responde en español.
    
    Tu respuesta debe incluir:
    1.  **Nombre del Diseño:** Un nombre creativo y evocador para la prenda.
    2.  **Descripción General:** Un párrafo que describa el estilo y la sensación de la prenda.
    3.  **Sugerencias de Tela:** Recomienda 2-3 tipos de tela adecuados, explicando por qué son una buena elección (ej. "Seda Charmeuse para una caída lujosa y fluida" o "Lino de alta calidad para frescura y una elegancia casual").
    4.  **Detalles Clave:** Enumera 3-5 detalles de diseño específicos que hagan la prenda especial (ej. "Escote en V sutil", "Botones forrados en la misma tela", "Cinturón extraíble para acentuar la silueta", "Mangas obispo con puños ajustados").
    5.  **Ocasión de Uso:** Sugiere para qué tipo de eventos o situaciones sería perfecta la prenda.
    
    Mantén un tono inspirador, profesional y amigable. Formatea tu respuesta de manera clara y fácil de leer.`;

    try {
      const response = await this.genAI.models.generateContent({
        model: model,
        contents: userInput,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 0.9,
        }
      });
      return response.text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw new Error('Failed to generate design ideas from Gemini API.');
    }
  }
}
