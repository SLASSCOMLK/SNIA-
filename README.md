# SLASSCOM National Ingenuity Awards (SNIA) 2026 Website

Welcome to the official website repository for the **SLASSCOM National Ingenuity Awards (SNIA) 2026**. This project serves as the digital front door for Sri Lanka's premier platform that celebrates and recognizes technological innovation across various sectors, including corporates, startups, universities, and schools.

## 🚀 Project Overview

The SNIA 2026 website is designed to provide comprehensive information about the awards, guide applicants through the submission process, and showcase the prestige of the event. It features a modern, responsive design with interactive elements and dynamic animations to engage visitors.

### Key Features
- **Hero Section**: Highlights event details (Date: 16 June 2026, Venue: ITC Ratnadipa, Colombo) with call-to-action buttons for ticket purchasing and sponsorship.
- **About SNIA**: Details the mission, eligibility criteria, and evaluation process.
- **What SNIA Does**: Explains the core objectives, such as discovering innovations, evaluating them, amplifying success, building IP, and attracting investments.
- **Award Categories**: An interactive grid showcasing the 16 different award categories (School, University, Corporate, Startups) with associated entry fees.
- **Application Guide**: A step-by-step walkthrough of the application process.
- **Event Highlights & Testimonials**: Showcases past moments and endorsements from previous winners and stakeholders.
- **Partners Section**: Acknowledges the main organizers, corporate sponsors, process partners, and ecosystem partners.

## 📁 Repository Structure

This is a static web application built using HTML, CSS, and vanilla JavaScript. 

- `index.html`: The main landing page containing all the primary sections (Hero, About, Categories, Apply, etc.).
- `past-winners.html`: A dedicated page to showcase previous award winners.
- `National Winners .html`: A page highlighting the national-level winners.
- `sponsorship.html`: Information and proposal details for potential event sponsors.
- `styles.css`: The main stylesheet containing the design system, layout rules, animations, and responsive styles.
- `script.js`: Contains the interactive logic for the website (e.g., custom cursor, mobile menu toggle, category expansion, step-by-step application tabs, and carousels).
- `images/`: Directory containing all graphical assets, logos, and photographs used across the site.

## 🛠️ Technologies Used

- **HTML5**: For semantic page structure.
- **CSS3**: For styling, layout (Flexbox/Grid), and complex animations/transitions.
- **JavaScript (Vanilla)**: For frontend interactivity.
- **FontAwesome**: For scalable vector icons.

## 💻 How to Run Locally

Since this is a static website, no complex build process or server backend is required to view it.

1. **Clone or Download the Repository:**
   Ensure you have all the files downloaded to your local machine.
   
2. **Open in Browser:**
   Simply double-click the `index.html` file to open it in your default web browser.

3. **Use a Local Server (Recommended):**
   To fully experience all features (and avoid any CORS issues if you later fetch local resources), it's best to serve the files using a local development server. 
   - If using **VS Code**, you can install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click "Go Live".
   - Or, using Python via terminal:
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000` in your browser.

## 🤝 Contributing

When making updates to the website:
- Maintain the existing color palette (dark themes, gold accents) defined in `styles.css`.
- Ensure new sections are fully responsive on mobile, tablet, and desktop views.
- Compress new images added to the `images/` directory to maintain fast page load speeds.

## 📞 Contact

For inquiries regarding the awards, ticket sales, or sponsorship, please refer to the contact section at the bottom of the `index.html` page or the `sponsorship.html` page.
