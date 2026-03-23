window.resumeTemplates.push({
    id: 'tpl-modern',
    title: 'The Original Grid',
    desc: 'Modern format with structured gray headers and defined table grid lines.',
    
    previewHtml: `
        <div class="resume-paper t1-paper">
            <div class="t1-name">Alex Johnson</div>
            <div class="t1-contact">+1 234 567 8900 | alex.johnson@email.com | linkedin.com/in/alexj</div>
            <div class="t1-sec-head">Education</div>
            <table class="t1-table">
                <tr><td class="pv-bold" style="width: 30%;">B.S. Computer Science</td><td style="width: 15%;">2019 - 2023</td><td style="width: 40%;">University of Technology</td><td style="text-align: right;">3.90 GPA</td></tr>
                <tr><td class="pv-bold">High School Diploma</td><td>2015 - 2019</td><td>Springfield High School</td><td style="text-align: right;">98%</td></tr>
            </table>
            <div class="t1-sec-head">Work Experience</div>
            <div class="pv-flex"><span class="pv-bold">Tech Solutions Inc.</span> <span style="color:#666;">2023 - Present</span></div>
            <div class="pv-flex"><span class="pv-bold" style="font-style: italic;">Software Engineer</span> <span style="color:#666; font-size:12px;">June 2023 - Present</span></div>
            <ul class="pv-bullets">
                <li>Developed and maintained scalable web applications using React and Node.js.</li>
            </ul>
            <div class="t1-sec-head">Academic Projects</div>
            <div class="pv-bold">E-Commerce Platform | React, Firebase</div>
            <ul class="pv-bullets">
                <li>Architected a full-stack e-commerce solution with real-time inventory management.</li>
            </ul>
            <div class="t1-sec-head">Achievements</div>
            <ul class="pv-bullets">
                <li>First place winner at the National Collegiate Hackathon 2022.</li>
            </ul>
            <div class="t1-sec-head">Technical Skills</div>
            <table class="t1-table" style="text-align: center;">
                <tr><td style="width: 33%;">Python, Java, C++, JavaScript</td><td style="width: 33%;">React, Node.js, Express, Django</td><td>Git, Docker, AWS, SQL</td></tr>
            </table>
        </div>
    `,
    
    latexCode: String.raw`\documentclass[9pt]{article}
\usepackage[margin=0.6in]{geometry}
\usepackage[sfdefault]{roboto}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage[svgnames]{xcolor}
\definecolor{SectionGray}{gray}{0.8}
\definecolor{BodyGray}{HTML}{333333}
\usepackage[hidelinks]{hyperref}
\usepackage{array,hhline,tabularx}
\usepackage{enumitem}
\setlist[itemize]{noitemsep, topsep=2pt, leftmargin=*}
\setlength\parindent{0pt}
\setlength\parskip{0pt}
\renewcommand{\arraystretch}{1.1}

\newcommand{\Section}[1]{%
  \vspace{4pt}%
  \noindent
  \fcolorbox{black}{SectionGray}{%
    \parbox{\dimexpr\linewidth-2\fboxsep-2\fboxrule}{%
      \color{black}\small\bfseries #1%
    }%
  }%
  \vspace{3pt}%
}

\begin{document}
\color{BodyGray} 
\sffamily

{{RESUME_BODY}}

\end{document}`
});