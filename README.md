# 🚀 create-fs-app

A zero-setup CLI tool to scaffold a fullstack app using Vite (React) + Express + MongoDB in seconds.  
Perfect for building modern fullstack web apps with organized client and server folders.

---

## ✨ Features

- 📦 Instant project structure with `client` and `server` directories
- ⚡️ React + Vite frontend setup
- 🌐 Express backend with MongoDB boilerplate
- 🗂 Includes folders like `models`, `schema`, and `.env` placeholder
- 📁 Copies template files using `fs-extra` for clean bootstrapping
- 🛠 Installs dependencies for both frontend and backend automatically
- 💡 Beginner-friendly and easy to extend

---

## 📦 Installation

### Using `npx` (no installation required):

```bash
npx create-fs-app myapp
```

Or install globally:

```bash
npm install -g create-fs-app
```

---

## 🧰 Usage

```bash
create-fs-app myapp
```

You’ll be prompted to enter a project name (default: `myapp`).

This will:

1. Copy boilerplate files into a new folder called `myapp`
2. Install dependencies in `client/` and `server/`
3. Set you up with a ready-to-code fullstack app

---

## 🚦 Project Structure

```
myapp/
├── client/           # Frontend (Vite + React)
│   ├── src/
│   └── vite.config.js
├── server/           # Backend (Express + MongoDB)
│   ├── index.js
│   ├── models/
│   └── .env
```

---

## 🏃‍♂️ Getting Started

After the scaffold is complete:

```bash
cd myapp

# Start the frontend
cd client
npm run dev

# Start the backend
cd ../server
npm run start
```

---

## 🧑‍💻 Author

Created by **Vaibhav Tiwari**  
📬 LinkedIn: https://www.linkedin.com/in/vaibhav-tiwari-41267a227 | GitHub: https://github.com/Vaibhav-stack31

---

## 📄 License
This project is licensed under the MIT License.