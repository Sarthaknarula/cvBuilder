window.resumeTemplates.push({
    id: 'tpl-professional',
    title: 'Professional ATS',
    desc: 'Clean, minimalist format optimized for software engineering applicant tracking systems.',
    
    previewHtml: `
        <div class="resume-paper t2-paper">
            <div class="t2-name">Alex Johnson</div>
            <div class="t2-contact">+1 234 567 8900 &nbsp;|&nbsp; alex.johnson@email.com &nbsp;|&nbsp; linkedin.com/in/alexj</div>
            <div class="t2-sec-head">Education</div>
            <div class="t2-subhead"><span>University of Technology</span> <span>2019 - 2023</span></div>
            <div class="t2-subhead-role"><span>B.S. Computer Science</span> <span>3.90 GPA</span></div>
            <div class="t2-subhead" style="margin-top: 6px;"><span>Springfield High School</span> <span>2015 - 2019</span></div>
            <div class="t2-subhead-role"><span>High School Diploma</span> <span>98%</span></div>
            <div class="t2-sec-head">Experience</div>
            <div class="t2-subhead"><span>Tech Solutions Inc.</span> <span>2023 - Present</span></div>
            <div class="t2-subhead-role"><span>Software Engineer</span> <span>June 2023 - Present</span></div>
            <ul class="t2-bullets">
                <li>• Developed and maintained scalable web applications using React and Node.js.</li>
            </ul>
            <div class="t2-sec-head">Projects</div>
            <div class="t2-subhead"><span>E-Commerce Platform</span> <span>React, Firebase</span></div>
            <ul class="t2-bullets">
                <li>• Architected a full-stack e-commerce solution.</li>
            </ul>
            <div class="t2-sec-head">Achievements</div>
            <ul class="t2-bullets">
                <li>• First place winner at the National Collegiate Hackathon 2022.</li>
            </ul>
            <div class="t2-sec-head">Skills</div>
            <div style="font-size: 14px; margin-top: 6px; line-height: 1.4;">
                <b>Languages/Tools:</b> Python, Java, C++, JavaScript<br>
                <b>Frameworks:</b> React, Node.js, Express, Django<br>
                <b>Other:</b> Git, Docker, AWS, SQL
            </div>
        </div>
    `,
    
    latexCode: String.raw`\documentclass{article}
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\setlength{\footskip}{30.60004pt}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\usepackage[T1]{fontenc}
\usepackage[scaled]{helvet}
\renewcommand\familydefault{\sfdefault}

\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-0.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

\titleformat{\section}{\Large\bfseries\raggedright}{}{0em}{}[\titlerule]
\pdfgentounicode=1

\newcommand{\resumeItem}[1]{\item[\textbullet]\small{#1}}

\newcommand{\resumeItemListStart}{%
  \begin{itemize}[leftmargin=0.20in,itemsep=0pt,topsep=3pt,parsep=0pt,partopsep=0pt,label=\textbullet]}
\newcommand{\resumeItemListEnd}{\end{itemize}}

\newcommand{\resumeSubheading}[4]{%
  \vspace{-1pt}\item[]
  \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
    \textbf{#1} & #2 \\
    \textit{\small#3} & \textit{\small #4} \\
  \end{tabular*}\vspace{-6pt}}

\newcommand{\resumeSubheadingRole}[2]{%
  \vspace{-10pt}\item[]
  \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
    \textit{\small#1} & \textit{\small #2} \\
  \end{tabular*}\vspace{-6pt}}

\newcommand{\resumeSubheadingCompany}[3]{%
  \vspace{-1pt}\item[]
  \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
    \textbf{#1} & #2 \\
    \multicolumn{2}{r}{\textit{\small #3}} \\
  \end{tabular*}\vspace{-6pt}}

\newcommand{\resumeSubHeadingList}{\begin{itemize}[leftmargin=0in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}

\begin{document}

{{RESUME_BODY}}

\end{document}`
});