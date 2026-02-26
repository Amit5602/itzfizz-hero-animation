# 🚀 Itzfizz Web Development Internship Assignment

A premium scroll-driven hero section animation built using modern frontend technologies.  
This project demonstrates smooth UI motion, scroll-based interactions, and performance-optimized animation using GSAP ScrollTrigger.

---

## 🌐 Live Demo

🔗 **Live Website:**  
https://amit5602.github.io/itzfizz-hero-animation/

🔗 **GitHub Repository:**  
https://github.com/Amit5602/itzfizz-hero-animation

---

## 📌 Project Overview

This project was developed as part of the **Web Development Internship Assignment for Itzfizz Digital**.

The objective was to recreate a high-quality hero section animation with:

- Smooth entry animations
- Scroll-based interactions
- Performance-optimized motion
- Clean and maintainable code structure

The focus was on animation quality, responsiveness, and modern frontend best practices.

---

## ✨ Features

### 🎬 Initial Load Animation
- Letter-by-letter animated headline
- Smooth fade + translate reveal
- Staggered statistics animation
- Premium easing transitions

### 🖱 Scroll-Based Animation (Core Feature)
- Scroll-driven car movement
- Smooth zoom-in effect
- Subtle rotation for depth
- Hero section pinned during scroll
- Scroll progress tied to animation using `scrub`
- No autoplay — fully scroll-controlled interaction

### 🎨 UI & Visual Design
- Modern dark theme
- Cinematic gradient background
- Glow shadow effects on hero image
- Clean letter-spacing typography
- Responsive layout for multiple screen sizes

---

## ⚙️ Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **GSAP (GreenSock Animation Platform)**
- **GSAP ScrollTrigger Plugin**
- **GitHub Pages (Deployment)**

---

## 🧠 Animation Strategy & Best Practices

To ensure performance and smooth interaction:

- Used GPU-accelerated `transform` properties (translate, scale, rotate)
- Avoided layout-triggering properties (top, left, width changes)
- Implemented `scrub` for scroll-linked interpolation
- Used `pin` for immersive hero interaction
- Cleaned GSAP context to prevent memory leaks
- Avoided heavy manual scroll listeners

This ensures smooth performance across devices.

---

## 📱 Responsive Design

- Fully responsive layout
- Adaptive image scaling
- Flexible typography
- Proper spacing across screen sizes
- Mobile-friendly structure

---

## 📁 Project Structure

```
itzfizz-hero-animation/
│
├── public/
│   └── hero-object.png
│
├── src/
│   ├── components/
│   │   └── Hero.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🛠 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Amit5602/itzfizz-hero-animation.git
```

Navigate into the project:

```bash
cd itzfizz-hero-animation
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

---

## 🚀 Deployment

The project is deployed using **GitHub Pages** via the `gh-pages` branch.

Live URL:

https://amit5602.github.io/itzfizz-hero-animation/

---

## 🎯 Key Learning Outcomes

- Advanced GSAP ScrollTrigger implementation
- Scroll-driven animation logic
- Performance-first animation design
- Component-based React structure
- Tailwind utility-first styling
- GitHub Pages deployment workflow

---

## 👨‍💻 Author

**Amit Kumar**  
Frontend Developer | React Enthusiast  

GitHub: https://github.com/Amit5602  

---

## 📜 License

This project was created for educational and internship evaluation purposes as part of the Itzfizz Digital Web Development Internship assignment.