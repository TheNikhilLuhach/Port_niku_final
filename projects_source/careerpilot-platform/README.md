# CareerPilot Platform

## 1. Project Overview
A full-stack career acceleration web platform built with Flask, SQLAlchemy, and Tailwind CSS. Features include user registration and session management (Flask-Login, CSRF protection), an algorithmic ATS resume builder with real-time scoring, a curated job portal with category filtering, and technical evaluation quizzes with persistent scoring records.

## 2. Required Software
- Python 3.10, 3.11, or 3.12
- SQLite3 (standard with Python)
- Modern web browser

## 3. Installation Commands
```bash
# Navigate to the project directory
cd projects_source/careerpilot-platform

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate   # Windows
# source venv/bin/activate # Linux/macOS

# Install dependencies
pip install -r requirements.txt
```

## 4. Environment Setup
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```
Contents of `.env`:
```env
SECRET_KEY=generate_a_random_32_byte_secret_key
API_KEY=your_optional_ai_api_key_here
SQLALCHEMY_DATABASE_URI=sqlite:///careerpilot.db
PORT=5000
```

## 5. API-Key Setup
An API key is optional. The core platform, database, ATS scorer, and quizzes run completely self-contained with SQLite without any third-party paid services.

## 6. Exact Run Command
```bash
python app.py
```
*Note: On first startup, the application automatically initializes the SQLite schema (`careerpilot.db`) and creates tables for Users, Resumes, Jobs, Applications, QuizCategories, and QuizScores.*

## 7. Browser URL & Launch Method
Open your web browser and navigate to:
```text
http://localhost:5000
```

## 8. Example Inputs & User Workflows
1. **User Registration / Login**:
   - Register at `/register` with an email and password.
   - Login at `/login` to access the personalized dashboard.
2. **Resume Builder & ATS Evaluation**:
   - Navigate to `/resume-builder`.
   - Enter your contact details, professional summary, technical skills, and action-verb experience items.
   - Run ATS Analysis to receive keyword optimization recommendations and an ATS readiness score.
3. **Job Search & Applications**:
   - Visit `/jobs` to view software engineering listings.
   - Filter by location, job type (Full-time / Remote / Internship), and submit applications.
4. **Technical Quizzes**:
   - Navigate to `/quizzes` to take technical assessment tests covering Python, Web, SQL, and DevOps.

## 9. Expected Output
- Responsive Tailwind CSS interface with interactive forms.
- Dynamic ATS score dial showing formatting completeness, keyword count, and action verbs.
- Instant feedback and scoring history on technical assessments.

## 10. Troubleshooting
- **Database Lock (`sqlite3.OperationalError: database is locked`)**: Ensure no other background Flask process is holding a transaction lock on `careerpilot.db`.
- **CSRF Token Missing**: If submitting custom AJAX POST requests, ensure the `X-CSRFToken` header is included.
- **Port 5000 in use on Windows**: Run on another port: `flask run --port 5001` or edit the port argument in `app.py`.

## 11. Limitations & Platform Compatibility
- Cross-platform compatible across Windows, Linux, and macOS.
- For production deployment, configure Gunicorn or uWSGI behind an Nginx reverse proxy with HTTPS.
