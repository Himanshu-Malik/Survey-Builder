# InsightBoard – React Analytics Dashboard

InsightBoard is a production-style React dashboard for managing and analyzing surveys.  
It demonstrates modern frontend architecture, real-time data handling, and professional UI patterns used in SaaS products.

This project was built as a portfolio project to showcase **React engineering practices used in real-world applications**.

---

## 🚀 Live Demo

https://insightboard-five.vercel.app/

---

## 📸 Screenshots

### Dashboard

![Dashboard Screenshot](./screenshots/dashboard.png)

### Surveys Management

![Surveys Screenshot](./screenshots/surveys.png)

### Dark Mode

![Dark Mode Screenshot](./screenshots/darkmode.png)

---

## ✨ Features

### Dashboard Analytics
- Survey response trend charts
- Survey status distribution
- KPI metrics overview

### Survey Management
- Create surveys
- Edit surveys
- Delete surveys
- Search surveys
- Status filtering
- Pagination

### UX Features
- Toast notifications
- Loading skeletons
- Empty states
- Dark mode support
- Optimistic UI updates
- URL-based filters

---

## 🧠 Advanced React Concepts Used

- React Hooks
- React Query (Server State Management)
- Optimistic UI Updates
- Feature-Based Architecture
- Component Reusability
- URL State Management
- Lazy Rendering
- Responsive UI

---

## 🏗 Project Architecture

src
│
├── api
│ └── surveysApi.ts
│
├── components
│ ├── layout
│ │ ├── Sidebar.tsx
│ │ └── DashboardLayout.tsx
│ │
│ └── ui
│ ├── Button.tsx
│ └── Input.tsx
│
├── features
│ └── surveys
│ ├── Surveys.tsx
│ ├── SurveyTable.tsx
│ └── CreateSurveyModal.tsx
│
├── pages
│ └── Dashboard.tsx
│
├── types
│ └── survey.ts
│
└── main.tsx


---

## 🛠 Tech Stack

Frontend

- React
- TypeScript
- TailwindCSS
- React Query
- Recharts
- React Router

Backend (Mock)

- JSON Server

---

## ⚙️ Installation

Clone repository


git clone https://github.com/yourusername/insightboard.git


Go into project


cd insightboard


Install dependencies


npm install


Start frontend


npm run dev


Start mock API server


npm run server


---

## 📊 API Example

Example Survey Object


{
"id": 1,
"title": "Customer Satisfaction Survey",
"status": "Active",
"responses": 124,
"createdAt": "2026-03-10"
}


---

## 🎯 Learning Goals

This project demonstrates:

- Building a production-style React dashboard
- Handling server state using React Query
- Implementing CRUD operations with API integration
- Designing reusable UI components
- Managing UI state and URL state
- Implementing responsive dashboards

---

## 👨‍💻 Author

Himanshu Malik

Frontend Developer

Skills

React • JavaScript • TypeScript • HTML • CSS • SQL • PHP

---

## ⭐ Future Improvements

- Authentication system
- Real backend integration
- Role-based access control
- Survey builder with drag-and-drop questions
- Export survey responses to CSV
