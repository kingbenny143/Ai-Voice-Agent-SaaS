# 🎙️ AI Voice Agent SaaS

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![OpenAI](https://img.shields.io/badge/OpenAI-AI-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Active_Development-orange)

An AI-powered Voice Agent SaaS platform that enables businesses to automate customer interactions using intelligent voice agents. The platform provides call management, appointment booking, AI customization, and knowledge base integration through a modern dashboard.

---

**Test note for push verification**

---

## 🚀 Overview

AI Voice Agent SaaS helps businesses deploy AI voice assistants capable of:

- Answering customer inquiries
- Scheduling appointments
- Handling inbound and outbound calls
- Providing business information
- Automating customer support
- Improving customer engagement

The platform is designed to be scalable, secure, and easy to customize for different business needs.

---

## ✨ Features

### 🔐 Authentication & Authorization
- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Session Management

### 📊 Dashboard
- Analytics Overview
- Business Insights
- Activity Monitoring
- AI Agent Performance

### 📞 Call Management
- Call History
- Call Status Tracking
- Conversation Logs
- Call Analytics

### 📅 Booking Management
- Appointment Scheduling
- Booking Tracking
- Customer Management
- Calendar Integration

### 📚 Knowledge Base
- Upload Business Information
- Manage AI Knowledge
- Document Storage
- Context Retrieval

### 🤖 AI Agent Configuration
- Agent Customization
- Prompt Management
- Response Configuration
- Business-Specific Instructions

### 💳 Subscription Management
- Subscription Plans
- Usage Tracking
- Billing Management
- Stripe Integration

### 👥 Team Management
- Multi-User Support
- Workspace Management
- Role-Based Permissions

---

## 🏗️ Tech Stack

### Frontend
- React.js
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Axios

### Backend
- FastAPI
- Python
- Pydantic

### Database
- MongoDB
- Motor (Async MongoDB Driver)

### AI & Voice
- OpenAI API
- Vapi AI
- Twilio

### Authentication
- JWT
- Passlib

### Payments
- Stripe

### Deployment
- Vercel
- Railway
- Render
- Docker

---

## 📖 Documentation

Comprehensive documentation is available in the [documentation/](./documentation) folder:

- [API Documentation](./documentation/api) - API specifications and integration guides
- [Architecture](./documentation/architecture) - System design diagrams and technical docs
- [Development](./documentation/development) - Setup guides and coding standards
- [User Guides](./documentation/user-guides) - End-user manuals and feature walkthroughs
- [Changelogs](./documentation/changelogs) - Release notes and version history

---

## 📂 Project Structure

```bash
ai-voice-agent-saas/
│
├── client/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── forms/
│   │   │   ├── dashboard/
│   │   │   └── common/
│   │   │
│   │   ├── layouts/
│   │   │
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   └── SignupPage.tsx
│   │   │   │
│   │   │   └── dashboard/
│   │   │       ├── DashboardPage.tsx
│   │   │       ├── CallsPage.tsx
│   │   │       ├── BookingsPage.tsx
│   │   │       ├── KnowledgeBasePage.tsx
│   │   │       ├── AiSettingsPage.tsx
│   │   │       ├── BillingPage.tsx
│   │   │       └── ProfilePage.tsx
│   │   │
│   │   ├── routes/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── services/
│   │   ├── utils/
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   └── package.json
│
├── backend/
│   │
│   ├── app/
│   │   │
│   │   ├── api/
│   │   │   ├── auth.py
│   │   │   ├── calls.py
│   │   │   ├── bookings.py
│   │   │   ├── knowledge.py
│   │   │   └── ai.py
│   │   │
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   ├── security.py
│   │   │   └── database.py
│   │   │
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   ├── call.py
│   │   │   ├── booking.py
│   │   │   └── knowledge.py
│   │   │
│   │   ├── schemas/
│   │   │
│   │   ├── services/
│   │   │   ├── openai_service.py
│   │   │   ├── vapi_service.py
│   │   │   ├── twilio_service.py
│   │   │   └── stripe_service.py
│   │   │
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── main.py
│   │
│   ├── tests/
│   ├── requirements.txt
│   └── .env
│
├── docs/
│   ├── api.md
│   ├── architecture.md
│   ├── deployment.md
│   └── screenshots/
│
├── .gitignore
├── LICENSE
├── README.md
└── docker-compose.yml
```

---

## 📸 Screenshots

### Dashboard

![Dashboard](./docs/screenshots/dashboard.png)

### Calls Management

![Calls](./docs/screenshots/calls.png)

### Knowledge Base

![Knowledge Base](./docs/screenshots/knowledge-base.png)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/ai-voice-agent-saas.git
cd ai-voice-agent-saas
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux / Mac
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## 🔑 Environment Variables

### Frontend

```env
VITE_API_URL=http://localhost:8000/api
```

### Backend

```env
MONGODB_URI=

DATABASE_NAME=

JWT_SECRET_KEY=

OPENAI_API_KEY=

VAPI_API_KEY=

TWILIO_ACCOUNT_SID=

TWILIO_AUTH_TOKEN=

STRIPE_SECRET_KEY=
```

---

## 📚 API Documentation

FastAPI automatically generates API documentation.

### Swagger UI

```text
http://localhost:8000/docs
```

### ReDoc

```text
http://localhost:8000/redoc
```

---

## 🔒 Security

- JWT Authentication
- Password Hashing with Passlib
- Protected API Routes
- Environment Variable Protection
- Input Validation
- Secure Secret Management
- CORS Protection
- Rate Limiting

---

## 📄 .gitignore

```gitignore
# Node
node_modules/

# Python
venv/
__pycache__/
*.pyc

# Build
dist/
build/

# Environment
.env
.env.local

# IDE
.vscode/
.idea/

# Logs
*.log

# Database
*.db

# OS
.DS_Store
Thumbs.db
```

---

## 🗺️ Roadmap

### Phase 1
- Authentication
- Dashboard
- Call Management
- Booking Management

### Phase 2
- AI Voice Agent Integration
- Knowledge Base System
- Voice Analytics

### Phase 3
- Stripe Billing
- Team Workspaces
- Subscription Plans

### Phase 4
- CRM Integrations
- Workflow Builder
- Multi-Agent Support
- Enterprise Features

---

## 🤝 Contributing

Contributions are welcome.

```bash
# Fork repository

# Create a branch
git checkout -b feature/new-feature

# Commit changes
git commit -m "Add new feature"

# Push branch
git push origin feature/new-feature
```

Then create a Pull Request.

---

## 📜 License

Licensed under the MIT License.

---

## 👨‍💻 Author

**Anand Anish Raj**

AI & ML Student • Full-Stack Developer • AI Agent Builder

Building modern AI-powered SaaS products and intelligent AI agents.

---

⭐ If you find this project useful, consider giving it a star on GitHub.