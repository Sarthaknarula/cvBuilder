# Visual LaTeX Resume Builder 📄⚙️

A lightweight, purely client-side web application that bridges the gap between easy-to-use visual resume builders and professional LaTeX formatting. 

Instead of struggling with complex LaTeX syntax and compilation errors, users can fill out a dynamic, drag-and-drop GUI form. The application instantly compiles this data into clean, ATS-optimized LaTeX code ready to be pasted into Overleaf or compiled into a PDF. Designed with software engineering recruiting in mind, the output is perfectly formatted to pass through automated resume parsers.

**[🌐 View Live Application](https://cv-builder-sarthak.vercel.app/)**

## ✨ Core Features

* **Visual GUI to LaTeX:** Provides a standard web form interface that maps directly to complex LaTeX macros and environments.
* **Drag & Drop Reordering:** Fully functional drag-and-drop architecture to easily reorder core resume sections (Education, Experience, Projects, etc.) on the fly.
* **Dynamic Content Engine:** * Add/remove roles under a single company.
  * Dynamically add, remove, and format description points (Bullets, Numbers, or Paragraphs).
  * Create entirely custom resume sections from scratch.
* **ATS-Optimized Templates:** Includes pre-built, highly professional LaTeX templates tailored for technical applicant tracking systems.
* **Zero Dependencies:** Built completely with Vanilla JavaScript, HTML5, and CSS3. No heavy frontend frameworks required.
* **Client-Side Execution:** 100% of the logic and compilation currently happens locally in the browser, ensuring rapid generation and user data privacy.

## 🛠️ Technical Implementation

* **Frontend:** HTML5, CSS3
* **Logic & State Management:** Vanilla JavaScript (ES6+)
* **Architecture Highlights:**
  * Modular template system that injects raw LaTeX strings (`\resumeSubheading`, `\resumeItemListStart`, etc.).
  * Custom string escaping function to handle LaTeX special characters (`%`, `&`, `$`, `#`).
  * Dynamic DOM manipulation for collapsible sections and repeating fields.

## 🗺️ Roadmap & Future Scope

This application is currently in its initial client-side phase. The next major milestone is transforming it into a persistent, full-stack platform:

* **User Authentication:** Implement a secure login and registration system to allow users to manage their personal accounts.
* **Relational Database (SQL):** Integrate an SQL database (e.g., PostgreSQL or MySQL) to persistently store user profiles, save resume progress, and maintain multiple versions of a CV.
* **Robust Backend Server:** Build out a backend API using **Node.js** or **Python** to handle data routing, authentication, and logic.
* **Native PDF Export:** Move the LaTeX compilation engine to the backend. This will allow the server to directly execute the LaTeX code and return a downloadable, print-ready PDF to the user, bypassing the need for third-party editors like Overleaf.

## 🚀 Getting Started

Since the current version requires no backend or build steps, running it locally is instantaneous.

### Prerequisites
* A modern web browser (Chrome, Firefox, Safari, Edge).
* An [Overleaf](https://www.overleaf.com/) account (or a local TeX environment) to render the final output.

### Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Sarthaknarula/cvBuilder.git](https://github.com/Sarthaknarula/cvBuilder.git)
