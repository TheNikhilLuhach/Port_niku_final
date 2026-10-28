# Streamlit Resume Builder & ATS Analyzer

## 1. Project Overview
A Streamlit web application that extracts text streams from uploaded PDF resumes using PyPDF2, performs regex tokenization against industry technology dictionaries, and visualizes an ATS compatibility score with color-coded High/Medium/Low tags.

## 2. Required Software
- Python 3.10+
- Dependencies: `streamlit>=1.32.0`, `PyPDF2>=3.0.1`

## 3. Installation & Run
```bash
cd projects_source/resume-builder-analyzer
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
streamlit run app.py
```
Opens in browser at `http://localhost:8501`.

## 4. Key Capabilities
- PDF binary parsing via PyPDF2 `PdfReader`.
- Automatic skill tagging across programming languages, web frameworks, and cloud tools.
- Real-time ATS scorecard breakdown with formatting recommendations.
