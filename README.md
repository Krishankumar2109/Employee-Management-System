# credentials :
admin:
email:admin@example.com
password : admin123
Employee 1 : [check local storage for all employee details]
email: john.doe@example.com
password:123

# 🧑‍💼 Employee Management System

A simple Employee Management System built using **React**, **Context API**, and **localStorage**. It allows an admin to assign tasks to employees and track their status — New, Active, Completed, or Failed.

## ✨ Features

- Admin login and session management.
- Create, assign, and manage tasks for each employee.
- Task status updates: Accept, Complete, or Fail.
- Task count overview by status (New, Active, Completed, Failed).
- Data persistence using `localStorage`.
- Responsive UI with contextual actions.

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **State Management:** Context API
- **Styling:** Tailwind CSS
- **Persistence:** localStorage

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── NewTask.jsx         // Task UI + status update
│   ├── TaskListNumbers.jsx // Dashboard counts
│   └── AllTask.jsx         // Admin overview of employee tasks
│
├── context/
│   └── AuthProvider.jsx    // Global state management for auth and employees
│
├── utils/
│   └── localStorage.js     // Helper functions for localStorage
│
└── App.jsx / index.js      // Root files
```

---

## 🧩 Key Components

### ✅ `NewTask.jsx`

- Displays task data per employee.
- Allows updating task status (Accept, Complete, Fail).
- Updates state and localStorage using context.

### 📊 `TaskListNumbers.jsx`

- Shows a summary of task counts for a particular employee.

### 📋 `AllTask.jsx`

- Displays a list of all employees and their task status counts.
- Admin overview screen.

### 🔐 `AuthProvider.jsx`

- Manages global state (`userData`, `setUserData`) using Context API.
- Includes helper function `updateEmployeesInContext()` to sync localStorage and state.

---

## 📦 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/Krishankumar2109/Employee-Management-System.git
cd Employee-Management-System
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the App**

```bash
npm start
```

4. **Open in Browser**

```text
http://localhost:3000
```

---

## 🔐 Admin Usage Guide

1. Log in as Admin.
2. Assign tasks to employees.
3. View and manage tasks per employee.
4. View all employee task summaries on the dashboard.

---

## 🧠 Data Flow

- Tasks are stored inside each `employee` object.
- Changes made by the admin or employee update:
  - Context API state (`userData`)
  - localStorage (via `updateEmployeesInContext()`)

---

## 💾 Persistence

All employee and task data is saved to `localStorage` so it survives page reloads and relogins.

---

## ⚙️ Future Enhancements

- Add Firebase/Auth0 for real user authentication.
- Backend integration (Node.js + MongoDB).
- Task deadline reminders and notifications.
- Pagination for large task lists.

---

## 👨‍💻 Author

**Krishan Kumar**  
[GitHub Profile](https://github.com/Krishankumar2109)

---



