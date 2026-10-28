'use client';

import React, { useState } from 'react';
import { Key, Eye, EyeOff, CheckCircle2, AlertCircle, Loader2, RefreshCw, ShieldCheck } from 'lucide-react';

interface ApiKeyConfigProps {
  provider: 'gemini' | 'openai';
  apiKey: string;
  onKeyChange: (key: string) => void;
  selectedModel: string;
  onModelChange: (model: string) => void;
  supportedModels: string[];
}

export default function ApiKeyConfig({
  provider,
  apiKey,
  onKeyChange,
  selectedModel,
  onModelChange,
  supportedModels
}: ApiKeyConfigProps) {
  const [showKey, setShowKey] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  const testConnection = async () => {
    if (!apiKey.trim()) {
      setTestResult({ success: false, message: 'Please enter an API key first' });
      return;
    }

    setTesting(true);
    setTestResult(null);

    try {
      const res = await fetch('/api/ai-proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider,
          apiKey: apiKey.trim(),
          action: 'test'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setTestResult({ success: true, message: data.message });
      } else {
        setTestResult({ success: false, message: data.error || 'Connection failed' });
      }
    } catch (err) {
      setTestResult({ success: false, message: 'Network error connecting to API proxy' });
    } finally {
      setTesting(false);
    }
  };

  const clearKey = () => {
    onKeyChange('');
    setTestResult(null);
  };

  return (
    <div className="bg-dark-800/90 border border-dark-600 rounded-xl p-5 my-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Key className="w-5 h-5 text-accent-cyan" />
          <h4 className="text-base font-semibold text-white">
            {provider === 'gemini' ? 'Google Gemini API Configuration' : 'OpenAI API Configuration'}
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>In-Memory Only (Never Persisted)</span>
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-4">
        To test live AI responses, provide your personal API key. Your key remains strictly in browser memory for this session and is never saved to cookies, localStorage, or server databases.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-gray-300 mb-1">
            {provider === 'gemini' ? 'Google AI Studio Key (starts with AIzaSy)' : 'OpenAI Secret Key (starts with sk-)'}
          </label>
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => {
                onKeyChange(e.target.value);
                setTestResult(null);
              }}
              placeholder={provider === 'gemini' ? 'AIzaSy...' : 'sk-...'}
              className="w-full bg-dark-900 border border-dark-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan pr-20"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="p-1 text-gray-400 hover:text-white"
                title={showKey ? 'Hide key' : 'Show key'}
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              {apiKey && (
                <button
                  type="button"
                  onClick={clearKey}
                  className="text-xs text-gray-400 hover:text-red-400 px-1"
                  title="Clear key"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-300 mb-1">Model Selection</label>
          <select
            value={selectedModel}
            onChange={(e) => onModelChange(e.target.value)}
            className="w-full bg-dark-900 border border-dark-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent-cyan"
          >
            {supportedModels.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-dark-700">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={testConnection}
            disabled={testing || !apiKey}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700 hover:bg-dark-600 border border-dark-500 text-xs text-gray-200 disabled:opacity-50 transition-colors"
          >
            {testing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
            Test Connection
          </button>
          <a
            href={provider === 'gemini' ? 'https://aistudio.google.com/app/apikey' : 'https://platform.openai.com/api-keys'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent-cyan hover:underline"
          >
            Get {provider === 'gemini' ? 'free Gemini Key' : 'OpenAI Key'} ↗
          </a>
        </div>

        {testResult && (
          <div
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg ${
              testResult.success
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}
          >
            {testResult.success ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
            <span>{testResult.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
