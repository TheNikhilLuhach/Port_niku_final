# StudySync Learning Hub

## 1. Project Overview
A real-time collaborative educational hub integrating an interactive HTML5 canvas whiteboard, browser-native WebRTC audio/video and screen-sharing controls, group study room messaging via Flask-SocketIO, and an AI study tutor assistant.

## 2. Required Software
- Python 3.10, 3.11, or 3.12
- Web browser with WebRTC and Canvas support (Chrome, Edge, Firefox, Safari)
- Optional: OpenAI API Key (for live GPT tutoring responses)

## 3. Installation Commands
```bash
# Navigate to project directory
cd projects_source/studysync-learning

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate   # Windows
# source venv/bin/activate # Linux/macOS

# Install backend dependencies
pip install -r requirements.txt
```

## 4. Environment Setup
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Configure `.env`:
```env
SECRET_KEY=generate_a_secure_jwt_token_key
OPENAI_API_KEY=your_optional_openai_key_here
PORT=5000
```

## 5. API-Key Setup
- For the AI tutor feature, supply an OpenAI key (`OPENAI_API_KEY=sk-...`) in `.env`.
- If no key is configured, the system provides pre-calculated, verified study flashcard answers.

## 6. Exact Run Command
```bash
python backend/app.py
```

## 7. Browser URL & Launch Method
Open:
```text
http://localhost:5000
```

## 8. Example Input & Interaction Flow
1. **Interactive Whiteboard**: Select the Pen tool, pick a color, adjust brush stroke width, and sketch diagrams on the canvas. Click **"Save PNG"** to export the drawing.
2. **Local Video Feed**: Click **"Start Video"** to activate your webcam stream locally. Click **"Share Screen"** to present diagrams.
3. **Room Messaging**: Type in the room chat to exchange messages across the WebSocket room.
4. **AI Concept Explainer**: Ask: `"Explain binary search trees and their average lookup complexity."`

## 9. Expected Output
- Live HTML5 Canvas rendering smooth strokes at 60 FPS.
- Immediate PNG download containing whiteboard drawings.
- Instant AI concept breakdowns.

## 10. Troubleshooting
- **WebRTC Permission Denied**: Grant camera and microphone permissions when prompted by your browser.
- **WebSocket connection failure**: Ensure port 5000 is open and not blocked by local Windows Defender firewall rules.

## 11. Limitations & Multi-Peer Signaling
- P2P video across different internet networks requires a public STUN/TURN server (e.g. coturn). The local application serves signaling via Flask-SocketIO on localhost.
