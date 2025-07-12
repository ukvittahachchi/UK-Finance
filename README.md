# 🔗 URL Shortener App

A full-stack URL Shortener web application where users can shorten long URLs, view their history, and manage links through a modern interface.

## 🛠 Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT Authentication
- Express Validator

## 📁 Project Structure

URL-Shortener-App/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── controllers/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
└── README.md


## 🚀 Features

- 🔐 User Authentication (Register/Login with JWT)
- 🔗 URL shortening with random short codes
- 📜 View user-specific URL history
- 🌐 Responsive and modern UI
- 🧪 Form validation
- 🗑️ Delete shortened URLs (optional)
- ✨ Protected routes (only logged-in users can shorten/view URLs)

## ⚙️ Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Environment Variables

Create a `.env` file in the `backend` directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


