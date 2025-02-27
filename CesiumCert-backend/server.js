// Import dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Retrieve API keys from .env
const openaiKey = process.env.OPENAI_API_KEY;
const nrelApiKey = process.env.NREL_API_KEY;
const openWeatherApiKey = process.env.OPENWEATHER_API_KEY;

// Create the Express app instance
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors({ origin: "*" }));

// Parse JSON request bodies
app.use(express.json());

// Define the endpoint to generate LLM text using the OpenAI API
app.post("/api/generateLLMText", async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Use the secret OpenAI key from .env (do not expose this to the client)
                "Authorization": `Bearer ${openaiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are a solar analysis assistant with deep expertise in California solar mandates and incentives.When generating your output, emphasize the community benefits of robust solar generation—such as improved energy independence, reduced municipal energy costs, and enhanced property sustainability—while avoiding generic technical bullet lists.Instead, provide evaluative commentary, for example: 'Being on the 2nd story minimizes potential shading obstructions, further optimizing solar energy capture, which enhances community resilience by reducing reliance on traditional power sources.' Tailor your response specifically for California residents and city planners."
                    },
                    { role: "user", content: prompt }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });
        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
            res.json({ text: data.choices[0].message.content });
        } else {
            console.error("No choices returned from OpenAI:", data);
            res.status(500).json({ error: data.error });
        }
    } catch (err) {
        console.error("LLM API error:", err);
        res.status(500).json({ error: "Error generating text." });
    }
});

// Define a public configuration endpoint to expose safe-to-share keys
app.get("/api/config", (req, res) => {
    res.json({
        NREL_API_KEY: nrelApiKey,
        OPENWEATHER_API_KEY: openWeatherApiKey
    });
});

// Start the server on port 3000 (or process.env.PORT if defined)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
