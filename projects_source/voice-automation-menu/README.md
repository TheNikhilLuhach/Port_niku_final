# Voice-Controlled Automation Menu

## 1. Project Overview
A hands-free desktop voice assistant that captures spoken natural language commands, transcribes them using speech recognition models, and executes automated operating system workflows (launching applications, controlling window states, performing web searches, and sending WhatsApp messages). Features audio text-to-speech confirmation feedback.

## 2. Required Software
- Python 3.10, 3.11, or 3.12
- Operating System: Windows 10 or 11 (uses `pyautogui`, `win32gui`, `pyttsx3`, and `pywhatkit`)
- Microphone device

## 3. Installation Commands
```bash
# Navigate to the project directory
cd projects_source/voice-automation-menu

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt
```

*Note on PyAudio on Windows: If `pip install pyaudio` fails, install via wheel from Christoph Gohlke's archive or `pip install pipwin && pipwin install pyaudio`.*

## 4. Environment Setup
No external secret keys required. Configuration is stored locally in `voice_menu.log`.

## 5. API-Key Setup
None required. The project uses Google's free speech recognition engine via the `SpeechRecognition` library and local SAPI5 speech synthesis.

## 6. Exact Run Commands
```bash
# Terminal Voice Menu
python voice_menu.py

# Streamlit Interactive Dashboard
streamlit run streamlit_voice_menu.py
```

## 7. Launch Method & Commands
Say `"Alexa"` (or the configured wake phrase) followed by any supported command:
- `"open notepad"` -> Launches Notepad.
- `"open calculator"` -> Launches Windows Calculator.
- `"google search [topic]"` -> Launches default browser and navigates to Google results.
- `"open cmd"` -> Launches Command Prompt.
- `"open jupyter"` -> Launches Jupyter Notebook in CMD.
- `"minimize all"` -> Minimizes all windows (Win+D).
- `"close window"` -> Closes the active window.
- `"help"` -> Speaks the available voice commands.

## 8. Expected Output
1. PyTTSx3 voice synthesizes: *"Listening for command..."*
2. Speech audio is recognized and printed to the terminal with timestamp logging.
3. Voice synthesizes: *"Opening Notepad"*, followed by the process launching.

## 9. Troubleshooting
- **`PyAudio ImportError: Could not find PyAudio`**: Run `pip install pyaudio` or verify your microphone is configured as the default recording device in Windows Sound Settings.
- **`Speech recognition timed out`**: Ensure your microphone input volume is at least 70% and speak clearly within 1–2 feet of the mic.

## 10. Security Boundary
- Anonymous public web visitors are never permitted to execute arbitrary shell commands on your personal computer. The hosted portfolio demo uses the browser-native Web Speech API with sandboxed virtual desktop apps.
