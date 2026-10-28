# Tech2Idea AI Chatbot

## 1. Project Overview
Tech2Idea is an AI-powered conversational engineering assistant that transforms developer skill sets, tech stack preferences, and industry domains into structured, actionable software project specifications. Powered by Google's Gemini LLMs (`gemini-2.0-flash` / `gemini-1.5-pro`), it features prompt engineering templates, multi-turn chat memory, and dual interfaces (Streamlit & Gradio).

## 2. Required Software
- Python 3.10, 3.11, or 3.12
- Google AI Studio API key (free tier available at [aistudio.google.com](https://aistudio.google.com/app/apikey))
- Modern web browser (Chrome, Edge, Firefox, Brave)

## 3. Installation Commands
```bash
# Navigate to the project directory
cd projects_source/tech2idea-chatbot

# Create and activate a Python virtual environment
python -m venv venv
.\venv\Scripts\activate   # Windows
# source venv/bin/activate # Linux/macOS

# Install dependencies
pip install -r requirements.txt
```

## 4. Environment Setup
Create a `.env` file from the provided `.env.example`:
```bash
cp .env.example .env
```
Inside `.env`, configure:
```env
GEMINI_API_KEY=AIzaSyYourGoogleAiStudioKeyHere
PORT=7864
```

## 5. API-Key Setup
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Generate an API Key.
3. Paste the key into `.env` under `GEMINI_API_KEY`.
4. **Security Notice**: Never commit `.env` or commit real API keys to GitHub.

## 6. Exact Run Commands
```bash
# Option A: Run Streamlit Web Application
streamlit run app.py

# Option B: Run Gradio User Interface
python ui_gradio.py
```

## 7. Browser URL & Launch Method
- Streamlit UI will open automatically at: `http://localhost:8501` (or specified `--server.port 7864`)
- Gradio UI launches at: `http://localhost:7860`

## 8. Example Input
In the chat interface, enter:
> "I have experience with Python, OpenCV, and AWS EC2. I want to build a computer vision project related to safety."

## 9. Expected Output
The model returns 3 tailored project ideas structured as:
```text
1. Project Name: Edge Worker Safety PPE Compliance Monitor
2. Required Tools: Python 3.11, OpenCV, MediaPipe, AWS EC2, Boto3, Streamlit
3. Brief Description: Real-time video processing pipeline identifying helmet/vest compliance with automated snapshot logging to AWS S3.
4. Difficulty Level: Intermediate
5. Estimated Time to Complete: 3 weeks
```

## 10. Troubleshooting
- **`ValueError: GEMINI_API_KEY environment variable is required`**: Ensure `.env` exists in the current directory and contains a valid key, or export it in your shell: `export GEMINI_API_KEY=AIzaSy...`.
- **`ResourceExhausted (429 Quota Exceeded)`**: You have reached Google's free-tier requests-per-minute limit. Wait 60 seconds before retrying.
- **Port Conflicts**: Run with custom port: `streamlit run app.py --server.port 8505`.

## 11. Limitations & Security
- Requires an active internet connection to communicate with Google's Gemini API endpoints.
- In the hosted portfolio version, visitor-provided keys stay in browser session memory and are never persisted to disk or server databases.
