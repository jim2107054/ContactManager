# Contact Manager

A full-stack Contact Manager app built with **React** for the frontend and **Node.js/Express** for the backend, focusing on practicing frontend-backend connection and CRUD operations.

## 📋 Project Description

**Contact Manager** is a simple full-stack web application that allows users to:
- Add new contacts
- View the list of saved contacts
- Edit existing contact information
- Delete contacts

This project is mainly built to practice:
- Connecting React frontend to a Node.js backend
- Setting up APIs
- Performing CRUD operations
- Managing form data, state, and API calls in React

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** (Optional) In-memory (like an array) or MongoDB (for extra practice)

## ⚙️ Features

- Create a new contact (Name, Phone, Email, etc.)
- Display all contacts
- Update a contact’s information
- Delete a contact
- Proper error handling

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/jim2107054/ContactManager.git
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
The backend server will start (e.g., on `http://localhost:5000`).

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The React frontend will run (e.g., on `http://localhost:3000`).

### 4. Usage
- Open the React app.
- Use the form to add new contacts.
- View, edit, and delete contacts from the list.

## 📦 API Endpoints

| Method | Endpoint         | Description             |
|:------:|:-----------------|:-------------------------|
| POST   | `/create`       | Create a new contact     |
| GET    | `/contacts`       | Retrieve all contacts    |
| PUT    | `/contacts/:nid`   | Update a contact by NID   |
| DELETE | `/contacts/:nid`   | Delete a contact by NID   |

## 📝 Future Improvements (Optional)

- Add search and filter functionality
- Add contact profile pictures
- Implement user authentication
- Deploy the app (e.g., Vercel + Render)
