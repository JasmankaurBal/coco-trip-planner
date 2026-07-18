# 🐶 Coco – The Trip Planner

<p align="center">
  <h3 align="center">Plan Less. Explore More. Travel with Coco.</h3>
  <p align="center">
    An AI-powered travel companion that creates personalized itineraries, discovers nearby attractions, and helps you explore the world with confidence.
  </p>
</p>

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange)
![Maps](https://img.shields.io/badge/Maps-OpenStreetMap-blue)
![Routing](https://img.shields.io/badge/Routing-OSRM-purple)
![Authentication](https://img.shields.io/badge/Auth-JWT-red)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🌍 About Coco

**Coco – The Trip Planner** is a modern AI-powered travel planning platform built using the MERN stack. It helps travelers generate personalized travel itineraries, discover nearby attractions, estimate budgets, and navigate destinations using free and open-source mapping services.

Unlike traditional trip planners, Coco focuses on delivering an interactive and personalized planning experience by combining **Google Gemini AI**, **OpenStreetMap**, and intelligent travel recommendations into one seamless platform.

Whether you're planning a weekend getaway or a long vacation, Coco acts as your digital travel companion from start to finish.

---

# 🚀 TL;DR

Coco combines the power of **Google Gemini AI**, **OpenStreetMap**, **OSRM**, and the **MERN Stack** to generate intelligent travel itineraries, discover nearby places, optimize routes, and provide a secure, responsive travel planning experience—all while relying primarily on free and open-source services.

---

# 🔗 Project Links

| Resource | Status |
|----------|--------|
| 🌐 Live Demo | Coming Soon |
| 🎥 Demo Video | Coming Soon |
| 💼 Portfolio | Coming Soon |
| 📂 GitHub Repository | https://github.com/JasmankaurBal/coco-trip-planner |

---

# ❓ Why Coco?

Planning a trip usually requires switching between multiple applications for itinerary planning, maps, navigation, weather, budgeting, and location discovery.

This often leads to:

- Manual trip planning
- Generic travel recommendations
- Time-consuming route management
- Poor trip organization
- Limited personalization
- Scattered travel information across different platforms

Coco aims to simplify this entire process by bringing everything together into one intelligent travel assistant.

---

# 💡 Solution

Coco provides a centralized AI-powered travel planning experience by combining intelligent itinerary generation with interactive maps and secure user management.

The platform enables users to:

- 🤖 Generate personalized travel itineraries using Google Gemini AI.
- 🗺 Discover nearby attractions using OpenStreetMap services.
- 📍 Search locations with Nominatim.
- 🚗 Find optimized travel routes using OSRM.
- ❤️ Save favorite trips and destinations.
- 🔐 Manage trips securely using JWT Authentication.
- 📊 Organize travel history from a personal dashboard.
- 📱 Access the application seamlessly across desktop and mobile devices.

Coco is designed with scalability, performance, and user experience in mind while minimizing dependency on paid third-party APIs.

---

# ✨ Core Features

## 🤖 AI Travel Planning

- AI-generated personalized travel itineraries
- Smart destination recommendations
- Day-wise activity planning
- Budget estimation
- Travel preference customization
- Multi-day itinerary generation
- Intelligent schedule optimization

---

## 🗺 Maps & Navigation

- Interactive OpenStreetMap integration
- Live destination search
- Nearby attractions discovery
- Route optimization using OSRM
- Geocoding and reverse geocoding
- Saved favorite locations
- Interactive map experience

---

## 👤 User Management

- Secure JWT Authentication
- Google Sign-In
- User Registration & Login
- Protected Routes
- Persistent Sessions
- Password Encryption
- Personal Dashboard
- Saved Trips
- User Profile Management

---

## 🎨 Modern User Experience

- Responsive MERN application
- Beautiful animations using Framer Motion
- Interactive travel dashboard
- Mobile-first responsive design
- Modern Tailwind CSS interface
- Smooth navigation experience
- Clean and minimal UI
- Fast loading performance

## 👤 User Authentication & Security

Coco prioritizes user privacy and account security by implementing modern authentication practices.

### Authentication Features

- 🔐 Secure JWT-based Authentication
- 🌐 Google Sign-In Integration
- 👤 User Registration & Login
- 🔄 Access & Refresh Token System
- 💾 Persistent Login ("Remember Me")
- 🔑 Password Encryption using bcrypt
- 🛡️ Protected Routes & API Endpoints
- 🚫 Rate Limiting against brute-force attacks
- ⚠️ Account Lockout after multiple failed login attempts
- 🍪 Secure HTTP-only Refresh Tokens

### User Dashboard

Each registered user gets a personalized dashboard to:

- ❤️ Save favorite trips
- 🧳 View travel history
- ⚙️ Manage profile information
- 📍 Store preferred destinations
- 📅 Access previously generated itineraries

---

# 🎨 User Experience

Coco is designed with a modern, responsive, and interactive interface to provide an enjoyable travel planning experience across all devices.

### Highlights

- 📱 Fully Responsive Design
- ✨ Smooth Page Transitions
- 🎭 Beautiful Animations using Framer Motion
- 🌈 Modern UI built with Tailwind CSS
- ⚡ Fast Loading Components
- 🔔 Interactive Alerts & Notifications
- 🗺️ Interactive Maps
- 🎯 Clean and User-Friendly Navigation

---

# 🏗️ System Architecture

## Frontend

```text
React Application
│
├── React 18
├── React Router
├── Tailwind CSS
├── Framer Motion
├── React Query
├── React Hook Form
├── Axios
├── Context API
└── Leaflet Maps
```

## Backend

```text
Node.js + Express API
│
├── REST APIs
├── MongoDB Atlas
├── Mongoose ODM
├── JWT Authentication
├── Google Gemini Integration
├── OpenStreetMap Services
├── Rate Limiting
├── Helmet Security
├── Winston Logging
└── Socket.IO
```

---

# 💻 Tech Stack

## Frontend

| Technology | Usage |
|------------|---------------------------|
| React 18 | User Interface |
| React Router | Client-side Routing |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Query | Data Fetching & Caching |
| React Hook Form | Form Validation |
| Axios | API Communication |
| React Leaflet | Interactive Maps |
| React Icons | Icons |
| Chart.js | Analytics & Visualizations |

---

## Backend

| Technology | Usage |
|------------|---------------------------|
| Node.js | Runtime Environment |
| Express.js | REST API Development |
| MongoDB Atlas | Cloud Database |
| Mongoose | Database ODM |
| JWT | Authentication |
| bcrypt | Password Encryption |
| Helmet | Security Middleware |
| Express Validator | Request Validation |
| Winston | Logging |
| Socket.IO | Real-time Communication |
| Compression | Performance Optimization |

---

## 🤖 AI & External Services

Coco integrates powerful AI models and free open-source mapping services to provide intelligent trip planning without relying on expensive third-party APIs.

| Service | Purpose |
|----------|---------|
| 🤖 Google Gemini AI | Personalized itinerary generation & travel recommendations |
| 🗺️ OpenStreetMap | Interactive maps and location data |
| 📍 Nominatim API | Geocoding & reverse geocoding |
| 🏞️ Overpass API | Nearby attractions, restaurants & points of interest |
| 🚗 OSRM | Route planning & navigation |

> 💡 **Why these services?**
>
> Coco is designed around free and open technologies, making it affordable, scalable, and developer-friendly.

---

# 📂 Project Structure

```text
coco-trip-planner/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── maps/
│   │   │   └── trip/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
├── package.json
└── .gitignore
```

---

# ⚙️ Installation

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or later recommended)
- MongoDB (Local or MongoDB Atlas)
- Git
- npm

---

## Clone Repository

```bash
git clone https://github.com/JasmankaurBal/coco-trip-planner.git

cd coco-trip-planner
```

---

## Install Dependencies

### Install Root Packages

```bash
npm install
```

### Install Frontend

```bash
cd client
npm install
```

### Install Backend

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Client URL
CLIENT_URL=http://localhost:3000

# CORS
ALLOWED_ORIGINS=http://localhost:3000

# Security
BCRYPT_ROUNDS=14
MAX_LOGIN_ATTEMPTS=5
LOCKOUT_DURATION=900000
```

---

## Environment Variables (Client)

Create a `.env` file inside **client**.

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

---

## Getting API Keys

### 🤖 Google Gemini AI

1. Visit Google AI Studio.
2. Create a new API key.
3. Copy the generated key.
4. Add it to:

```env
GEMINI_API_KEY=your_api_key
```

---

### 🍃 MongoDB Atlas

1. Create a free cluster.
2. Create a database user.
3. Whitelist your IP.
4. Copy the connection string.
5. Add it to:

```env
MONGODB_URI=your_connection_string
```

# Google Gemini AI (Required - FREE)
GEMINI_API_KEY=your_gemini_api_key_here

# CORS Configuration
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
CLIENT_URL=http://localhost:3000

# Security
BCRYPT_ROUNDS=14
MAX_LOGIN_ATTEMPTS=5
LOCKOUT_DURATION=900000

# Optional: Custom User-Agent for OSM services
MAPS_USER_AGENT=AI-TripPlanner/1.0 (Educational Project)
```

Create `client/.env` (optional):

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚀 Running the Application

### Start the Development Server

Run both frontend and backend simultaneously:

```bash
npm run dev
```

Or start them separately:

```bash
# Backend
cd server
npm run dev

# Frontend
cd client
npm start
```

### Local URLs

| Service | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000/api |

---

# 📡 API Overview

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/google` | Google Authentication |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Get current user |

---

## AI Services

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ai/generate-itinerary` | Generate AI itinerary |
| POST | `/api/ai/travel-suggestions` | Travel recommendations |
| POST | `/api/ai/optimize-itinerary` | Optimize existing itinerary |

---

## Trip Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/trips` | Fetch user trips |
| POST | `/api/trips` | Create new trip |
| GET | `/api/trips/:id` | View trip |
| PUT | `/api/trips/:id` | Update trip |
| DELETE | `/api/trips/:id` | Delete trip |

---

## Maps

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/maps/search` | Search locations |
| GET | `/api/maps/nearby` | Nearby attractions |
| GET | `/api/maps/directions` | Route planning |

---

# 🔒 Security

Coco follows modern web security practices to protect user accounts and sensitive information.

### Security Features

- JWT Authentication
- Google OAuth Authentication
- Password Hashing with bcrypt
- Refresh Token Authentication
- Protected API Routes
- Secure HTTP-only Cookies
- Helmet Security Middleware
- Rate Limiting
- Input Validation
- MongoDB Injection Protection
- CORS Protection

---

# ☁️ Deployment

The application can be deployed using any modern cloud platform.

### Frontend

- Vercel
- Netlify

### Backend

- Render
- Railway
- VPS (Ubuntu)

### Database

- MongoDB Atlas

After deployment, update:

```env
CLIENT_URL=https://your-domain.com
REACT_APP_API_URL=https://your-api-url.com/api
```

---

# 📚 What I Learned

Building Coco helped me gain practical experience in:

- Building scalable MERN applications
- Integrating Google Gemini AI
- Google OAuth Authentication
- MongoDB Atlas
- REST API Development
- JWT Authentication
- OpenStreetMap Integration
- Route Planning using OSRM
- Secure Backend Development
- Responsive UI Design
- State Management in React
- Full Stack Deployment

---

# 🚧 Current Limitations

- Flight booking is not available yet.
- Hotel booking integration is planned.
- Offline mode is under development.
- Voice assistant is planned for future releases.
- Some AI responses depend on prompt quality.

---

# 🚀 Future Roadmap

- 🐶 Coco AI Voice Assistant
- 🎙️ Voice-Based Trip Planning
- 🌦️ Live Weather Forecast Integration
- 💸 Expense & Budget Tracker
- ✈️ Flight Price Comparison
- 🏨 Hotel Recommendation Engine
- 👥 Collaborative Group Trips
- 📱 React Native Mobile Application
- 🌍 Multi-language Support
- 📶 Offline Travel Mode
- 🧳 AI Packing Assistant
- 📍 Real-Time Trip Tracking
- 🐾 Interactive Coco Mascot Across the Website

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👩‍💻 Author

## Jasmankaur Bal

Frontend & Full Stack Developer

Passionate about building AI-powered applications, modern web experiences, and intelligent travel solutions.

**GitHub**

https://github.com/JasmankaurBal

**LinkedIn**

https://linkedin.com/in/jasmankaurbal

**Portfolio**

Coming Soon

---

# 🙏 Acknowledgments

Special thanks to **Harsh Lad** for open-sourcing the original AI Trip Planner project that inspired the foundation of this work.

**Coco – The Trip Planner** has been significantly redesigned and extended with new branding, UI/UX improvements, Google Authentication, enhanced architecture, additional features, and continuous development by **Jasmankaur Bal**.

The project also makes use of:

- Google Gemini AI
- OpenStreetMap
- Nominatim API
- Overpass API
- OSRM
- React Community
- Node.js Community
- MongoDB Atlas

---

# 🤝 Contributing

Contributions, feature requests, and suggestions are always welcome.

If you find a bug or have an idea to improve Coco, feel free to fork the repository and submit a Pull Request.

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It helps the project reach more developers and motivates future improvements.

---
## 🙏 Acknowledgments

This project was initially inspired by the open-source **AI Trip Planner** project created by **Harsh Lad** one of my classmate.

**Coco – The Trip Planner** has since been significantly redesigned and extended by **Jasmankaur Bal**, including new branding, UI/UX improvements, Google Authentication, feature enhancements, architecture refinements, and ongoing development.

Special thanks to Harsh Lad for making the original project publicly available.

<p align="center">

### 🐶 Coco – The Trip Planner

*"Every journey becomes memorable when you have the right companion."*

Built with ❤️ and 🐾 by **Jasmankaur Bal**

</p>

**AI Trip Planner** — Practical AI-assisted travel planning with real-world, free data.

Made with ❤️ by Harsh Lad
