// Vercel Serverless Function to proxy OpenRouter API calls
// This keeps your API key secure on the server side

export default async function handler(req, res) {
    // Enable CORS for your domain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get API key from environment variable
        const apiKey = process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;

        if (!apiKey) {
            console.error('API key not found in environment variables');
            return res.status(500).json({ error: 'API key not configured' });
        }

        // Call OpenRouter API
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': process.env.VERCEL_URL || 'https://your-portfolio.vercel.app',
                'X-Title': 'Ayesha Portfolio Chatbot'
            },
            body: JSON.stringify({
                model: 'openai/gpt-3.5-turbo',
                messages: req.body.messages,
                temperature: 0.7,
                max_tokens: 800
            })
        });

        // Check if response has content before parsing
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
}
