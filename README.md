# 🛒 E-commerce Website (React + JSON Server)

A simple and responsive E-commerce web application built using **React** for the frontend and **JSON Server** as a mock backend to simulate real-world REST APIs.

---

## 🚀 Features

- Product listing
- Fetch products from API
- Global state management using Context API
- Loading state handling
- Responsive UI
- Mock backend using JSON Server

---

## 🧠 Project Description

This E-commerce website demonstrates how modern frontend applications interact with backend APIs.  
The application fetches product data from a mock REST API and displays it in a clean and user-friendly interface.

JSON Server is used to simulate a real backend, allowing frontend development without a real database.

---

## 👨‍💻 Contribution

This project is built individually.  
Key responsibilities include:

- React component development
- API integration using Axios
- Global state management using Context API
- Handling loading and error states
- JSON Server setup and API configuration
- Debugging API and port-related issues

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML
- CSS

### State Management
- React Context API

### Backend (Mock)
- JSON Server

### Tools
- Axios
- VS Code
- npm

---

## 📂 Project Structure

Ecommerce-Website/
│
├── src/
│ ├── Api/
│ │ └── ProductApi.js
│ ├── Context/
│ │ └── ProductsContext.jsx
│ ├── Components/
│ ├── Pages/
│ ├── App.jsx
│ └── main.jsx
│
├── db.json
├── package.json
├── README.md
└── vite.config.js



---

## ▶️ Getting Started

### Prerequisites

- Node.js (v14+)
- npm

---

### Installation

1. Clone the repository:

git clone https://github.com/your-username/ecommerce-website.git
cd ecommerce-website

2.Install dependencies:
npm install

3.Start JSON Server:
npx json-server db.json

4.Run the React application:
npm run dev

5.Open in browser:
http://localhost:5173


🔄 Application Flow

-React app loads
-ProductsContext is initialized
-API request is made to JSON Server
-Product data is stored in Context
-Components consume data and render UI
-Loading state is shown until data is fetched

⚠️ Limitations

-No real authentication
-Uses mock backend instead of real database
-Cart and payment features not implemented
-Not deployed for production use



