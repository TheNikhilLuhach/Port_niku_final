# Smart File Management Utility

## 1. Project Overview
A lightweight Gradio-based desktop utility for auditing local directories, computing recursive folder weights, counting nested items, and executing structured file actions (rename, delete, move, copy, make directory) through an intuitive web interface.

## 2. Required Software
- Python 3.10+
- Dependencies: `gradio>=4.0.0`

## 3. Installation Commands
```bash
cd projects_source/file-manager
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

## 4. Run Command
```bash
python file_manager.py
```
Opens in browser at `http://localhost:7860`.

## 5. Key Features
- Recursive folder weight calculation formatted to human-readable units (Bytes, KB, MB, GB).
- Last-modified timestamp formatting.
- File and folder categorization.
- Directory creation and safe file management actions.
