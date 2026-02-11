# 🖥 macOS Minor – React macOS Simulation with Custom Spotlight Engine

An interactive macOS-style desktop simulation built using **React** that replicates key UI behaviors of macOS and includes a fully custom-built Spotlight command engine.

🔗 **Live Demo:**  
https://mac-os-minor.vercel.app

---

## 🚀 Overview

This project simulates a macOS desktop environment inside the browser.

It includes:
- A custom Spotlight system
- Command interpreter
- Camera integration
- Dynamic routing using React Router

### 🎯 Goals

- Replicate OS-level UI behavior
- Implement a command-based interaction system
- Demonstrate advanced frontend architecture
- Simulate application-level routing inside a SPA

---

## 🔎 Custom Spotlight Engine (Cmd / Ctrl + K)

The core feature of this project is a fully custom-built Spotlight engine.

### ⌨ Activation

- `Cmd + K` (Mac)
- `Ctrl + K` (Windows)

This opens a dynamic command palette.

---

## 🧠 Command Parsing System

The Spotlight system includes:

- Text-based command parsing
- Keyword detection
- Expression extraction
- Dynamic routing
- External URL navigation
- Browser API integration

### ⚙ How It Works

1. Splits the first keyword  
2. Extracts the remaining input  
3. Matches command categories  
4. Executes conditional logic  

---

## 💻 Supported Commands

### 🌍 Open Websites

- `open google`
- `open youtube`
- `open github`
- `open instagram`
- `open spotify`
- `open amazon`
- `open netflix`

---

### 📷 Open Internal Applications

- `open camera`  

Uses React Router to navigate internally:

```js
navigate("/camera")
### 📚 Wikipedia Search

- `wiki javascript`
- `wikipedia react`

Redirects to:  
`https://en.wikipedia.org/wiki/<query>`

---

### ▶ YouTube Search

- `yt react tutorial`
- `youtube javascript`

---

### 🌦 Weather Lookup

- `weather delhi`
- `weather mumbai`

---

### 🗺 Map Search

- `map new york`
- `maps jhansi`

---

### ➗ Built-in Calculator

- `calc 2+2`
- `calculate 5*6`

---

## 🏗 Architecture

### 🔹 React Router Layout System

- `MainLayout` wrapper
- Nested routing using `<Outlet />`
- Dynamic navigation with `useNavigate()`

---

### 🔹 Component Structure

```bash
src/
│
├── components/
│   ├── MainLayout/
│   ├── Header/
│   ├── app/
│   ├── functionality/
│   │   ├── Camera/
│   │   └── Pallete (Spotlight Engine)/
│
├── assets/
```

---

## ⚡ Technical Concepts Used

- React Hooks (`useState`, `useNavigate`)
- Global keyboard event handling
- Command interpreter logic
- Conditional rendering
- Browser Media API (Camera)
- Dynamic URL generation
- Expression parsing & evaluation
- Component-based UI architecture

---

## 🎯 What This Project Demonstrates

- Advanced React architecture
- Event-driven UI design
- Command-based interaction systems
- Routing-based app simulation
- Browser API integration
- State management
- Frontend system design thinking

> This is not just a UI clone — it includes functional OS-like behavior.

---

## 🛠 Tech Stack

- React.js
- React Router
- JavaScript (ES6+)
- CSS3
- Browser APIs
- Vercel (Deployment)

---

## ⚙ Installation

```bash
git clone https://github.com/swyamshukla/mac-os-minor.git
cd mac-os-minor
npm install
npm run dev
```

---

## 👨‍💻 Author

**Swyam Shukla**  
CSE Student | MERN Developer | Learning Java Backend  

GitHub: https://github.com/swyamshukla
