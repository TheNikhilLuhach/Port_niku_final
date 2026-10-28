import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const ALLOWED_GEMINI_MODELS = ['gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-1.5-flash'];
const ALLOWED_OPENAI_MODELS = ['gpt-3.5-turbo', 'gpt-4o-mini', 'gpt-4o'];

// Regex patterns for key validation
const GEMINI_KEY_PATTERN = /^AIzaSy[0-9A-Za-z_-]{33}$/;
const OPENAI_KEY_PATTERN = /^sk-(proj-)?[a-zA-Z0-9_-]{20,}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON request payload' }, { status: 400 });
    }

    const { provider, apiKey, model, action, prompt, messages, systemPrompt } = body;

    // Validate provider
    if (provider !== 'gemini' && provider !== 'openai') {
      return NextResponse.json(
        { error: 'Invalid provider. Supported providers are "gemini" and "openai".' },
        { status: 400 }
      );
    }

    // Validate API key presence
    if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length === 0) {
      return NextResponse.json(
        { error: 'Missing API key. Please provide your API key in the configuration panel.' },
        { status: 400 }
      );
    }

    const trimmedKey = apiKey.trim();

    // Format validation
    if (provider === 'gemini') {
      if (!GEMINI_KEY_PATTERN.test(trimmedKey)) {
        return NextResponse.json(
          { error: 'Invalid Google Gemini API key format. Keys typically start with "AIzaSy" and are 39 characters long.' },
          { status: 400 }
        );
      }
    } else if (provider === 'openai') {
      if (!OPENAI_KEY_PATTERN.test(trimmedKey)) {
        return NextResponse.json(
          { error: 'Invalid OpenAI API key format. Keys typically start with "sk-" or "sk-proj-".' },
          { status: 400 }
        );
      }
    }

    // Connectivity Test
    if (action === 'test') {
      if (provider === 'gemini') {
        const testRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${trimmedKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: 'Respond with the word "pong" only.' }] }],
              generationConfig: { maxOutputTokens: 10 }
            })
          }
        );

        if (!testRes.ok) {
          const errData = await testRes.json().catch(() => ({}));
          const msg = errData?.error?.message || 'Failed to authenticate with Google Gemini API';
          return NextResponse.json({ error: `Connection failed: ${msg}` }, { status: testRes.status });
        }

        return NextResponse.json({ success: true, message: 'Google Gemini API key verified successfully!' });
      } else {
        const testRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${trimmedKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: 'Respond with "pong"' }],
            max_tokens: 5
          })
        });

        if (!testRes.ok) {
          const errData = await testRes.json().catch(() => ({}));
          const msg = errData?.error?.message || 'Failed to authenticate with OpenAI API';
          return NextResponse.json({ error: `Connection failed: ${msg}` }, { status: testRes.status });
        }

        return NextResponse.json({ success: true, message: 'OpenAI API key verified successfully!' });
      }
    }

    // Generation Action
    if (provider === 'gemini') {
      const selectedModel = ALLOWED_GEMINI_MODELS.includes(model) ? model : 'gemini-2.0-flash';
      const promptText = typeof prompt === 'string' ? prompt.slice(0, 4000) : 'Generate project ideas';

      const contents = [];
      if (systemPrompt && typeof systemPrompt === 'string') {
        contents.push({ role: 'user', parts: [{ text: `System Instructions: ${systemPrompt}` }] });
        contents.push({ role: 'model', parts: [{ text: 'Understood. I will follow these instructions.' }] });
      }
      contents.push({ role: 'user', parts: [{ text: promptText }] });

      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${trimmedKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1500
            }
          })
        }
      );

      if (!geminiRes.ok) {
        const errData = await geminiRes.json().catch(() => ({}));
        const errorMsg = errData?.error?.message || `Google Gemini API returned status ${geminiRes.status}`;
        return NextResponse.json({ error: errorMsg }, { status: geminiRes.status });
      }

      const data = await geminiRes.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
      return NextResponse.json({ success: true, text });
    } else {
      const selectedModel = ALLOWED_OPENAI_MODELS.includes(model) ? model : 'gpt-3.5-turbo';
      const userMessages = Array.isArray(messages)
        ? messages.slice(-10)
        : [{ role: 'user', content: typeof prompt === 'string' ? prompt.slice(0, 4000) : 'Hello' }];

      const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${trimmedKey}`
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            ...(systemPrompt ? [{ role: 'system', content: String(systemPrompt).slice(0, 1000) }] : []),
            ...userMessages
          ],
          max_tokens: 1500,
          temperature: 0.7
        })
      });

      if (!openaiRes.ok) {
        const errData = await openaiRes.json().catch(() => ({}));
        const errorMsg = errData?.error?.message || `OpenAI API returned status ${openaiRes.status}`;
        return NextResponse.json({ error: errorMsg }, { status: openaiRes.status });
      }

      const data = await openaiRes.json();
      const text = data?.choices?.[0]?.message?.content || 'No response generated.';
      return NextResponse.json({ success: true, text });
    }
  } catch (error) {
    // Note: Do not log request bodies or keys to keep sensitive tokens out of logs
    console.error('AI Proxy Error occurred during upstream fetch');
    return NextResponse.json(
      { error: 'An unexpected error occurred while communicating with the AI service. Please verify network connectivity.' },
      { status: 500 }
    );
  }
}
