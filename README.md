# 🚀 Rishil Shakya — Software Engineer Portfolio

A premium, modern, fully responsive personal portfolio website designed for software engineering internship recruitment. Built with a minimal and elegant dark theme with blue and purple accents, glassmorphic card elements, glowing hover states, and smooth spring-based animations.

Designed with inspiration from **Stripe, Vercel, Linear, and Framer**.

---

## 🎨 Preview & Aesthetics

* **Interactive Grids & Orbs**: Sleek dark background overlayed with a custom grid mesh pattern and ambient blur decorations.
* **3D Mouse Tilt Cards**: Custom coordinates-based vanilla React card hover tilt animations on featured projects.
* **Dynamic Typewriter**: Smooth custom loop typist highlighting core roles.
* **Scroll-Spy Navbar**: Sticky glass header tracking active viewport sections and rendering a spring-driven scroll progress bar.
* **5-Column Profiles Lineup**: Aligned badges tracking LeetCode, Codeforces, GitHub, GeeksforGeeks, and LinkedIn metrics.

---

## 🛠️ Tech Stack & Libraries

* **Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (Client Environment)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (Spring physics, fade reveals, scale interactions)
* **Icons**: [Lucide React](https://lucide.dev/) (Lightweight vector utility icons)
* **API Delivery**: [@emailjs/browser](https://www.emailjs.com/) (Direct frontend email delivery client)

---

## 📂 Project Architecture

```bash
├── public/              # Static assets and icons
├── src/
│   ├── assets/          # Generated mockup images and laptop graphics
│   ├── components/      # Reusable UI sections
│   │   ├── BrandIcons.jsx      # Custom SVG brand logos (Codeforces, GFG, LeetCode)
│   │   ├── Navbar.jsx          # ScrollSpy header with scroll progress
│   │   ├── Hero.jsx            # Typer effect and float laptop
│   │   ├── About.jsx           # Journey details, Education & Achievements
│   │   ├── Skills.jsx          # Categorized skill nodes with glows
│   │   ├── Projects.jsx        # 3D Tilt project cards
│   │   ├── CodingProfiles.jsx  # Compact statistic profile cards
│   │   ├── Contact.jsx         # Form validations and EmailJS simulation
│   │   └── Footer.jsx          # Bottom bar & scroll-to-top button
│   ├── data/
│   │   └── portfolioData.js    # Decoupled portfolio details (change content here)
│   ├── App.jsx          # Layout assembler
│   ├── index.css        # Tailwind v4 engine & custom glassmorphism styles
│   └── main.jsx         # Render mount point
├── index.html           # Meta tags and title configuration
├── vite.config.js       # Vite build chain configuration
└── package.json         # Libraries and dev commands
```

---

## 🚀 Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/RishilShakya001/<your-repository-name>.git
cd <your-repository-name>
npm install
```

### 3. Run Locally
Start the development server:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the site.

### 4. Build for Production
Bundle and optimize the codebase:
```bash
npm run build
```
Vite will compile the code and generate the production files in the `/dist` directory.

---

## ⚙️ Configuration & Customization

### Content Updates
All content (skills, stats, achievements, links, project descriptions) is decoupled from the UI. To update anything, simply edit **[src/data/portfolioData.js](src/data/portfolioData.js)**.

### EmailJS Setup
To connect the contact form to your own email address:
1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an email service and create an email template.
3. Create a `.env` file in your project root and add your keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
*(Note: If these env variables are missing, the website will run in **Demo Mode**, automatically simulating a successful form submission).*

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
