# Visual LaTeX Resume Builder 📄⚙️

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

A lightweight, purely client-side web application that bridges the gap between easy-to-use visual resume builders and professional LaTeX formatting. 

Instead of struggling with complex LaTeX syntax and compilation errors, users can fill out a dynamic, drag-and-drop GUI form. The application instantly compiles this data into clean, ATS-optimized LaTeX code ready to be pasted into Overleaf or compiled into a PDF. Designed with software engineering recruiting in mind, the output is perfectly formatted to pass through automated resume parsers.

**[🌐 View Live Application](https://cv-builder-sarthak.vercel.app/)**

## ✨ Core Features

* **Visual GUI to LaTeX:** Provides a standard web form interface that maps directly to complex LaTeX macros and environments.
* **Modular Template System:** Switch between different resume designs seamlessly. Templates are isolated in a dedicated folder, making it incredibly easy to scale and add new designs.
* **Drag & Drop Reordering:** Fully functional, native HTML5 drag-and-drop architecture to easily reorder core resume sections (Education, Experience, Projects, etc.) on the fly. The generated LaTeX matches the visual top-to-bottom order perfectly.
* **Dynamic Content Engine:** * Add/remove roles under a single company.
  * Dynamically add, remove, and format description points (Bullets, Numbers, or Paragraphs) with smart LaTeX spacing alignment.
  * Create entirely custom resume sections from scratch with optional duration toggles.
* **Collapsible Workspace:** Keep the editing environment clean by folding up completed sections.
* **ATS-Optimized Templates:** Includes pre-built, highly professional LaTeX templates tailored for technical applicant tracking systems.
* **Zero Dependencies:** Built completely with Vanilla JavaScript, HTML5, and CSS3. No heavy frontend frameworks required.
* **Client-Side Execution:** 100% of the logic and compilation currently happens locally in the browser, ensuring rapid generation and user data privacy.

## 🛠️ Technical Implementation

* **Frontend:** HTML5, CSS3
* **Logic & State Management:** Vanilla JavaScript (ES6+)
* **Architecture Highlights:**
  * **Separation of Concerns:** Clean architecture splitting structure (`index.html`), design (`styles.css`), and compilation logic (`script.js`).
  * **Template Registry:** Uses a `templates/` folder and `String.raw` to inject raw LaTeX strings (`\resumeSubheading`, `\resumeItemListStart`, etc.) without escaping nightmares.
  * **Custom String Escaping:** Function to handle LaTeX special characters (`%`, `&`, `$`, `#`).
  * **Dynamic DOM Manipulation:** Manages collapsible sections, repeating fields, and real-time DOM-to-LaTeX translation based on visual node order.

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
   cd cvBuilder
   ```

2. **Open the application:**
   Simply double-click `index.html` to open it in your browser, or serve it via a local live server (e.g., VS Code Live Server extension).

---

## 📝 How to Add a New Template

Adding a new resume design is incredibly easy due to the modular architecture:

**Step 1:** Create a new file in the `templates/` folder (e.g., `creative.js`).

**Step 2:** Register the template by pushing it to the global array. Using `String.raw` allows you to paste standard LaTeX without having to double-slash every line.

```javascript
window.resumeTemplates.push({
    id: 'tpl-creative',
    title: 'Creative Template',
    desc: 'A brief description of your new design.',
    previewHtml: `
        <div class="resume-paper">
            </div>
    `,
    latexCode: String.raw`\documentclass{article}
% Your LaTeX preamble here...

\begin{document}

{{RESUME_BODY}}

\end{document}`
});
```

**Step 3:** Link your new file in the `<head>` of `index.html` right below the others:

```html
<script src="templates/modern.js"></script>
<script src="templates/professional.js"></script>
<script src="templates/creative.js"></script> ```

The application will automatically build the selection card and compile the correct code!
