# Hand Gesture Control System

## 1. Project Overview
A real-time computer vision system that captures webcam video, detects 21 3D hand landmarks via Google MediaPipe, and maps finger combinations to automated operating system commands using PyAutoGUI. It enables touchless computer navigation and shortcut launching with a built-in 2-second debounce cooldown.

## 2. Required Software
- Python 3.10, 3.11, or 3.12
- Operating System: Windows 10/11 (for native win32 process shortcuts: Notepad, CMD, PyAutoGUI keys)
- Hardware: USB or built-in webcam

## 3. Installation Commands
```bash
# Navigate to the project directory
cd projects_source/hand-gesture-control

# Create and activate a Python virtual environment
python -m venv venv

# On Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# On Windows (Command Prompt):
.\venv\Scripts\activate.bat
# On Linux / macOS:
source venv/bin/activate

# Install required dependencies
pip install -r requirements.txt
```

## 4. Environment Setup
No external environment variables or third-party API keys are required. Hand landmark detection runs 100% locally on your machine CPU.

## 5. API-Key Setup
None required. The project operates completely offline.

## 6. Exact Run Command
```bash
python hand_gesture_control.py
```

## 7. Launch Method & Controls
- Press **Q** in the OpenCV webcam window to exit the application safely.
- Cooldown: The system enforces a 2-second cooldown between consecutive actions to prevent duplicate command triggers.

## 8. Gesture Mappings & Example Inputs
| Gesture | Finger State | Mapped OS Command | Expected Result |
| :--- | :--- | :--- | :--- |
| **One Finger** | Index extended; others folded | `subprocess.Popen(['notepad.exe'])` | Launches Windows Notepad |
| **Two Fingers** | Index & Middle extended | `subprocess.Popen(['cmd.exe', '/k', 'python'])` | Opens CMD with Python REPL |
| **Three Fingers** | Index, Middle & Ring extended | `subprocess.Popen(['cmd.exe', '/k', 'jupyter notebook'])` | Launches Jupyter Notebook |
| **Closed Fist (Punch)** | All fingers folded | `pyautogui.hotkey('win', 'd')` | Minimizes all desktop windows |

## 9. Expected Output
A video window titled "Hand Gesture Control" will open displaying your webcam feed with green hand landmark skeletons. When a gesture is recognized, console output confirms the command (e.g., `Opened Notepad`, `Minimized all windows`).

## 10. Troubleshooting
- **Webcam failed to open (`cv2.VideoCapture(0)`)**: Verify your webcam is plugged in and permissions are granted under *Windows Settings > Privacy & Security > Camera*. If another application (Zoom, Teams) is using the camera, close it first.
- **PyAutoGUI fails on Linux**: PyAutoGUI on Linux requires `python3-xlib` or an active X11 display session (Wayland restricts synthetic keypresses). Windows 10/11 is the primary tested OS.
- **MediaPipe detection jitter**: Ensure adequate ambient room lighting and position your hand 1.5–3 feet from the lens.

## 11. Limitations & Security
- The browser portfolio demo runs inside a client-side sandbox and cannot launch native host executables for your security.
- To execute actual Windows shortcuts, run this script locally.
