# Personal Portfolio Website - HTML/CSS/JavaScript

> **Work in Progress** - A comprehensive multi-page portfolio showcasing my journey as a developer, artist, pilot, and content creator.

![Portfolio Preview](assets/home/love2d_music_player.png)

## 🚀 Live Demo

[View Live Website](https://your-username.github.io/portfolio-html-css-js) <!-- Update with your actual GitHub Pages URL -->

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Pages Overview](#pages-overview)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Learnings](#key-learnings)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

## 🎯 About

This is my foundational web development portfolio built entirely with vanilla HTML, CSS, and JavaScript. It demonstrates my understanding of core web technologies before advancing to modern frameworks like React and TypeScript (see my [React Portfolio](https://github.com/your-username/react-portfolio) for comparison).

The site showcases my diverse background across:
- **Software Development** (SFML, Love2D, Web Development)
- **Digital Art & 3D Modeling**
- **Aviation** (Student Pilot with flight planning tools)
- **Content Creation** (Streaming and game development)

## ✨ Features

### 🎨 Design & UX
- **Multiple Theme System** - 4 distinct themes: Dark (default), Light, Midnight, and Retro
- **Fully Responsive Design** - Works seamlessly across desktop, tablet, and mobile
- **Smooth Theme Transitions** - CSS custom properties with 0.3s ease transitions
- **Interactive Timeline** - Scroll-triggered animations showing my journey
- **Typewriter Effect** - Dynamic text animation on homepage

### 🛠️ Technical Features
- **Multi-Page Architecture** - Clean navigation between 5 main sections
- **Custom CSS Grid & Flexbox** layouts
- **Vanilla JavaScript** - No frameworks or libraries (except Font Awesome icons)
- **Cross-Browser Compatibility** - Tested on Chrome, Firefox, Safari, Edge
- **Optimized Performance** - Efficient CSS and minimal JavaScript
- **Semantic HTML** - Accessible and SEO-friendly structure

### 🧮 Interactive Tools
- **Aviation Calculators** - Cloud base, crosswind, density altitude, fuel planning
- **Real-time Weather Integration** - Live METAR data for flight planning
- **Weight & Balance Calculator** - Cessna 172 performance calculations
- **Interactive Checklists** - Pre-flight procedures with progress tracking
- **Project Filtering** - Dynamic content filtering by technology/category
- **Image Galleries** - Lightbox functionality for artwork showcase

## 🛠️ Tech Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling, Grid, Flexbox, animations
- **Vanilla JavaScript** - DOM manipulation, event handling, localStorage
- **Font Awesome** - Icons and visual elements
- **External APIs** - METAR weather data integration

## 📄 Pages Overview

### 🏠 Home (`index.html`)
- Interactive timeline of my journey (2012-2025)
- Typewriter animation with rotating roles
- Featured projects showcase
- Polaroid-style image stack with hover effects

### 💻 Coding (`coding.html`)
- Comprehensive project portfolio with filtering
- Categories: Web Dev, Game Dev, C++/SFML, Love2D/Lua, Retro/Embedded
- Featured projects: Nero.js Framework, AviationPro, Hopeless Catch
- Technology tags and project status indicators

### 🎨 Art (`art.html`)
- Platform integration links (ArtStation, DeviantArt, Behance, etc.)
- Interactive before/after slider for process showcase
- 3D model viewer integration
- Gallery with lightbox functionality

### ✈️ Aviation (`aviation.html`)
- Flight planning calculators and tools
- Live METAR weather widget
- VFR weather minimums reference table
- Pre-flight checklist with interactive checkboxes
- Weight & balance calculator for Cessna 172

### 📺 Streaming (`streaming.html`)
- YouTube and Twitch integration
- Video thumbnails organized by category
- Direct links to popular content
- Platform-specific styling and branding

## 📸 Screenshots

### Full Page Screenshots
<!-- Add your GoFullPage screenshots here -->
![Homepage](screenshots/homepage-full.png)
![Coding Page](screenshots/coding-full.png)
![Art Page](screenshots/art-full.png)
![Aviation Page](screenshots/aviation-full.png)
![Streaming Page](screenshots/streaming-full.png)

### Mobile Responsive
![Mobile View](screenshots/mobile-responsive.png)

### Theme Showcase
The website features 4 carefully crafted themes, each with its own personality:

![Dark Theme (Default)](screenshots/dark-theme.png)
*Dark Theme - Professional slate colors with orange accents*

![Light Theme](screenshots/light-theme.png)
*Light Theme - Clean neutral greys with deep orange contrast*

![Midnight Theme](screenshots/midnight-theme.png)
*Midnight Theme - Deep blue palette with sky blue accents*

![Retro Theme](screenshots/retro-theme.png)
*Retro Theme - Warm coffee browns with retro red highlights*

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-html-css-js.git
   cd portfolio-html-css-js
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   # or
   python -m http.server 8000  # For local server
   ```

3. **For development**
   - Use Live Server extension in VS Code
   - Or any local development server

## 📁 Project Structure

```
portfolio-html-css-js/
├── index.html              # Homepage
├── coding.html             # Projects showcase
├── art.html               # Art portfolio
├── aviation.html          # Flight planning tools
├── streaming.html         # Content creation
├── profile.jpg            # Profile image
├── assets/                # Project images and media
│   ├── art/              # Artwork and thumbnails
│   ├── coding/           # Project screenshots
│   ├── home/             # Homepage images
│   ├── Portfolio/        # Profile images
│   └── streaming/        # Video thumbnails
├── screenshots/           # Full-page screenshots for README
│   ├── homepage-full.png
│   ├── coding-full.png
│   ├── art-full.png
│   ├── aviation-full.png
│   ├── streaming-full.png
│   ├── mobile-responsive.png
│   ├── dark-theme.png
│   ├── light-theme.png
│   ├── midnight-theme.png
│   └── retro-theme.png
├── src/
│   ├── css/
│   │   ├── global.css    # Shared styles
│   │   └── pages/        # Page-specific styles
│   └── js/
│       ├── global.js     # Shared functionality
│       └── pages/        # Page-specific scripts
└── README.md
```

## 🎓 Key Learnings

This project helped me master:

### CSS Skills
- **CSS Custom Properties** for comprehensive theming system (4 themes)
- **CSS Grid & Flexbox** for complex layouts
- **Responsive Design** principles and mobile-first approach
- **CSS Animations** and transitions for enhanced UX
- **Cross-browser compatibility** techniques
- **Advanced Color Theory** - Each theme uses carefully selected palettes

### JavaScript Skills
- **DOM Manipulation** without jQuery or frameworks
- **Event Handling** and user interactions
- **LocalStorage** for user preferences
- **Async/Await** for API integration
- **Modular Code Organization** across multiple files

### Web Development Best Practices
- **Semantic HTML** for accessibility and SEO
- **Progressive Enhancement** approach
- **Performance Optimization** techniques
- **Code Organization** and maintainability
- **Version Control** with Git

## 🔮 Future Enhancements

- [ ] Add more interactive animations
- [ ] Implement service worker for offline functionality
- [ ] Add contact form with backend integration
- [ ] Create blog section for technical articles
- [ ] Add more aviation tools and calculators
- [ ] Implement lazy loading for images
- [ ] Add unit tests for JavaScript functions

## 🌟 Comparison with React Portfolio

This HTML/CSS/JS portfolio demonstrates my foundational web development skills, while my [React/TypeScript/Tailwind Portfolio](https://github.com/your-username/react-portfolio) showcases modern framework expertise. Together, they show my progression and versatility as a developer.

## 📞 Contact

- **Website**: [robertfernandez.dev](https://your-website.com)
- **GitHub**: [@your-username](https://github.com/your-username)
- **LinkedIn**: [Robert Fernandez](https://linkedin.com/in/your-profile)
- **Email**: your.email@example.com

---

⭐ **Star this repo** if you found it helpful or interesting!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).