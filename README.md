🍬 Sweet Shop Management System

A full-stack Sweet Shop Management System built using Node.js, TypeScript, MongoDB, and React.
The application supports user authentication, inventory management, role-based admin actions, and a modern, responsive UI.

This project was developed as part of a TDD Kata assignment to demonstrate backend API design, frontend implementation, testing practices, and responsible AI usage.

🚀 Features
👤 Authentication

User registration

User login with JWT authentication

Secure, token-based access to protected APIs

🍭 Sweets Management

View all available sweets

Search sweets by name

Purchase sweets (quantity decreases automatically)

Purchase button disabled when stock is zero

🛠️ Admin Features

(Admin users only)

Add new sweets

Update sweet details (price, quantity, category)

Delete sweets

Role-based authorization (403 Forbidden for non-admins)

🎨 Frontend UI

Modern, responsive design

Clean card-based layout

Gradient backgrounds for authentication pages

User-friendly dashboard and admin panel

🧱 Tech Stack
Backend

Node.js

TypeScript

Express.js

MongoDB + Mongoose

JWT Authentication

Jest (testing)

Frontend

React (Vite)

JavaScript

Axios

CSS (custom styling, responsive layout)

📂 Project Structure
sweet-shop/
├── backend/
│   ├── src/
│   ├── tests/
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md

⚙️ Setup Instructions
🔧 Backend Setup
cd backend
npm install
npm run dev


Backend will run on:

http://localhost:5000

🎨 Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

🔐 API Endpoints
Auth

POST /api/auth/register

POST /api/auth/login

Sweets (Protected)

GET /api/sweets

GET /api/sweets/search

POST /api/sweets (Admin)

PUT /api/sweets/:id (Admin)

DELETE /api/sweets/:id (Admin)

Inventory

POST /api/sweets/:id/purchase

POST /api/sweets/:id/restock (Admin)

🧪 Testing

Jest used for backend testing

Authentication APIs tested

Tests validate correct behavior and error handling

Run tests:

cd backend
npm test
🤖 My AI Usage
AI Tools Used

ChatGPT (OpenAI)

GitHub Copilot

How I Used AI Tools

I used AI tools as development assistants to support my workflow:

ChatGPT

Helped brainstorm the overall backend and frontend architecture.

Assisted in structuring RESTful API endpoints.

Helped debug issues related to JWT authentication, role-based authorization, and frontend-backend integration.

Assisted in improving UI/UX design consistency and layout polish.

GitHub Copilot

Used for generating boilerplate code and speeding up repetitive tasks.

Assisted with form handling, basic React component structure, and syntax suggestions.

All AI-generated suggestions were reviewed, modified, and integrated manually.
Final implementation decisions, logic, and testing were done by me.

Reflection on AI Impact

AI tools significantly improved my development speed and confidence, especially while debugging and refining UI components.
They helped me focus more on clean architecture, correctness, and user experience rather than getting stuck on syntax or repetitive tasks.

AI acted as a pair programmer and learning aid, but the ownership of the code, design decisions, and final output remains entirely mine.

Screenshots
🔐 Authentication

Login Page:
<img width="1358" height="624" alt="loginpage" src="https://github.com/user-attachments/assets/cd5ad9f3-6bcd-482b-a18d-3b950ea1b0d7" />

User login screen with email and password fields.

Register Page:
<img width="1336" height="602" alt="Register" src="https://github.com/user-attachments/assets/46fd7f37-6251-4eac-83f4-1fd8bf8c9700" />

New user registration screen.
🍬 Sweets Dashboard

Dashboard – View All Sweets
Displays all available sweets with price and quantity.
<img width="1347" height="614" alt="Dashboard" src="https://github.com/user-attachments/assets/f8a2820a-d3f8-4d92-bd99-5419a359d34e" />
.

🛒 Purchase Flow

Purchase Sweet (Quantity Available)
Purchase button enabled when stock is available.

Out of Stock State
Purchase button disabled when quantity is zero.
Search Functionality
Search sweets by name using the search bar.

🛠️ Admin Panel (Admin Users Only)
<img width="1347" height="605" alt="AdminPanel" src="https://github.com/user-attachments/assets/579bc7c3-cfa6-4ae2-b2f6-c5041b22aec4" />

Add New Sweet
Admin form to add a new sweet.

Update Sweet
Admin editing existing sweet details.

Delete Sweet
Admin deleting a sweet from inventory.
📌 Notes

Non-admin users correctly receive 403 Forbidden for admin-only actions.

Inventory is shared across all users, reflecting a real-world sweet shop scenario.

🏁 Conclusion

This project demonstrates a complete, secure, and user-friendly full-stack application built with modern tools and best practices.
It fulfills all requirements of the TDD Kata Sweet Shop Management System assignment.

