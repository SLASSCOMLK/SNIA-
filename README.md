# SLASSCOM National Ingenuity Awards (SNIA) 2026 Website (React Migration)

Welcome to the official repository for the **SLASSCOM National Ingenuity Awards (SNIA) 2026**. The codebase has been migrated from a legacy static site to a modern, performant, and responsive single-page application built on **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Project Overview

The website highlights Sri Lanka's premier technology innovation awards. It features interactive components, high-quality media sliders, dynamic filtering for winners, and sponsorship proposal pages.

### Key Features
- **Hero & Navbar**: Modern, responsive navigation with dark-mode aesthetic, gold accents, and direct call-to-actions.
- **Interactive About & What We Do**: Visually stunning grid lists and animation highlights.
- **Award Categories Grid**: Clean showcase of the 16 award categories grouped dynamically.
- **Dynamic Winners Portal**: Filter past winners by categories and levels (National / Provincial) instantly.
- **Sponsorship Hub**: Dedicated portal displaying sponsorship benefits, sponsor packages, and tiers.
- **Partners Slider**: Dynamic logo showcase of sponsors, ecosystem partners, and organizers.

---

## 📁 Repository Structure

```
.
├── legacy-backup/             # Original static HTML/CSS/JS codebase (Archived)
├── snia-react/                # Active React + TSX codebase
│   ├── public/                # Static assets (images, logos, slideshow images)
│   ├── src/
│   │   ├── assets/            # App-wide visual assets
│   │   ├── components/        # Reusable React components (Navbar, Footer, Hero, Stats, highlights, etc.)
│   │   │   └── ui/            # UI components and micro-animations (e.g. gallery-animation)
│   │   ├── data/              # Static dataset (winners data)
│   │   ├── pages/             # Page layouts (Home, WinnersPage, SponsorshipPage)
│   │   ├── App.css            # Styles specific to the React application
│   │   ├── App.tsx            # Root application layout and routing
│   │   ├── index.css          # Tailwind CSS directives and theme utilities
│   │   └── main.tsx           # Entry point
│   ├── package.json           # Scripts and dependencies
│   ├── vite.config.ts         # Vite build configuration
│   └── tailwind.config.js     # Tailwind CSS theme customization
├── netlify.toml               # Netlify automatic build configuration and SPA redirects
└── National Winners SNIA.xlsx # Spreadsheet database of national winners
```

---

## 🛠️ Technologies Used

* **React 19 & TypeScript**: For scalable component-based architecture and type safety.
* **Vite**: Ultra-fast bundler and development server.
* **Tailwind CSS**: Modern utility-first CSS framework for custom layout, micro-animations, and styling.
* **Lucide React**: Premium icon pack.

---

## 💻 How to Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### Setup Instructions

1. **Navigate to the React application folder:**
   ```bash
   cd snia-react
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will be served at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This generates the optimized bundle in `snia-react/dist`.

---

## 🌐 Deployment Configuration

The site is configured to auto-deploy to **Netlify** via git pushes using the root [netlify.toml](file:///d:/SNIA%20WEB%20kavindra/netlify.toml) configuration.

* **Base directory**: `snia-react`
* **Build command**: `npm run build`
* **Publish directory**: `dist` (resolves to `snia-react/dist`)
* **SPA Routing redirects**: All fallback paths are redirected to `index.html` with a `200` status to ensure React Router works correctly on page refreshes.

---

## 🤝 Contributing

When contributing to this repository:
1. Ensure all your changes are made inside the `snia-react/` directory.
2. Run `npm run build` locally to verify that there are no type-check or syntax errors prior to committing.
3. Optimize all images placed in `snia-react/public/` to maintain fast page load times.
