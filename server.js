import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/chat', async (req, res) => {
    try {
        const { message, messages } = req.body;

        if (!message && !messages) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const apiKey = process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;

        if (!apiKey) {
            console.error('API key not found in environment variables');
            return res.status(500).json({ error: 'API key not configured' });
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': 'http://localhost:3000',
                'X-Title': 'Ayesha Portfolio Chatbot'
            },
            body: JSON.stringify({
                model: 'openai/gpt-3.5-turbo',
                messages: messages || [{ role: 'user', content: message }],
                temperature: 0.7,
                max_tokens: 800
            })
        });

        const responseText = await response.text();
        
        if (!responseText || responseText.trim() === '') {
            console.error('Empty response from OpenRouter API');
            return res.status(500).json({ 
                error: 'Empty response from AI service',
                message: 'The AI service returned an empty response. Please try again.' 
            });
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse OpenRouter response:', responseText);
            return res.status(500).json({ 
                error: 'Invalid response format',
                message: 'The AI service returned an invalid response. Please try again.' 
            });
        }

        if (!response.ok) {
            console.error('OpenRouter API error:', data);
            return res.status(response.status).json({
                error: data.error || 'API request failed',
                message: data.message || 'An error occurred while processing your request'
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Chatbot API available at http://localhost:${PORT}/api/chat`);
});
