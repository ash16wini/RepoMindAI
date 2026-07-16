# 🤖 RepoMindAI

<p align="center">
  <h3 align="center">AI-Powered Repository Intelligence Platform</h3>
  <p align="center">
    Understand any GitHub repository using AI, RAG, and semantic search.
  </p>
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-green?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.12-yellow?logo=python)
![ChromaDB](https://img.shields.io/badge/ChromaDB-VectorDB-purple)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-blue)
![RAG](https://img.shields.io/badge/RAG-AI-red)

</p>

---

# 📖 Overview

RepoMindAI is an AI-powered platform that helps developers understand any public GitHub repository without manually exploring hundreds of files.

It combines **Retrieval-Augmented Generation (RAG)**, **Sentence Transformers**, **ChromaDB**, and **Google Gemini** to provide repository intelligence.

---

# ✨ Features

- 📂 Load any public GitHub repository
- 📊 Repository Analytics Dashboard
- 🧠 AI Repository Summary
- ❤️ Repository Health Score
- 🤖 AI Code Review
- 💬 Repository-Aware AI Chat
- 🔍 Semantic Search using Vector Embeddings
- 📚 Markdown & Code Rendering
- ⚡ Fast Repository Indexing

---

# 🏗 System Architecture

```text
                    React Frontend
                           │
                           ▼
                  FastAPI Backend
                           │
             ┌─────────────┴─────────────┐
             │                           │
 Sentence Transformers            Google Gemini
             │                           │
             └─────────────┬─────────────┘
                           │
                      ChromaDB
                           │
                  Indexed Repository
```

---

# 📊 Workflow

```text
GitHub Repository URL
          │
          ▼
Clone Repository
          │
          ▼
Load Files
          │
          ▼
Chunk Documents
          │
          ▼
Generate Embeddings
          │
          ▼
Store in ChromaDB
          │
          ▼
Semantic Retrieval
          │
          ▼
Google Gemini
          │
          ▼
Repository Summary
Health Score
AI Review
Repository Chat
```

---

# 🛠 Tech Stack

## Frontend

- React
- Tailwind CSS
- Axios
- React Markdown
- React Syntax Highlighter

## Backend

- FastAPI
- ChromaDB
- Sentence Transformers
- Google Gemini API
- GitPython

---

# 📂 Project Structure

```text
RepoMindAI
│
├── app
│   ├── api
│   ├── services
│   ├── repository
│   ├── rag
│   ├── embeddings
│   ├── vectorstore
│   ├── graph
│   └── models
│
├── frontend
│   ├── components
│   ├── pages
│   └── services
│
└── README.md
```

---

# 📊 Dashboard Features

### 📂 Repository Loader

Load any public repository

Example

```
https://github.com/psf/requests
```

---

### 📊 Repository Dashboard

Displays

- Repository Name
- Total Files
- Indexed Chunks
- Python Files
- Markdown Files
- Config Files

---

### 🧠 AI Repository Summary

Automatically generates

- Repository Purpose
- Main Language
- Framework
- Key Features
- Important Files
- Suggested Starting File

---

### ❤️ Health Score

Evaluates

- Documentation
- Testing
- Dependencies
- CI/CD
- Code Quality

---

### 🤖 AI Repository Review

Provides

- Strengths
- Weaknesses
- Suggestions
- Best Practices

---

### 💬 AI Chat

Example Questions

```
Explain architecture

Where is authentication implemented?

Explain dependency injection.

Where is routing handled?

Explain app/main.py
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /load-repository | Clone and index repository |
| POST | /repository-summary | Generate repository summary |
| POST | /health-score | Repository health analysis |
| POST | /review | AI repository review |
| POST | /chat | Repository-aware AI chat |

---

# 📦 Installation

Clone repository

```bash
git clone https://github.com/yourusername/RepoMindAI.git
```

Backend

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📸 Screenshots

## Landing Page

(Add Screenshot)

---

## Dashboard

(Add Screenshot)

---

## AI Summary

(Add Screenshot)

---

## Health Score

(Add Screenshot)

---

## AI Review

(Add Screenshot)

---

## AI Chat

(Add Screenshot)

---

# 🚀 Future Improvements

- Docker Support
- GitHub OAuth Login
- Authentication
- Multi Repository Analysis
- Security Scanner
- Commit Analytics
- Dependency Visualization
- Repository Comparison
- Team Collaboration
- PDF Report Generation

---

# 👩‍💻 Author

**Ashwini S**

AI & Software Developer

GitHub: https://github.com/ash16wini

LinkedIn: https://www.linkedin.com/in/iamashwini16/

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!