const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve frontend files (HTML, CSS, JS)
app.use(express.static(__dirname));

// PDF Compilation Endpoint
app.post('/api/compile-pdf', (req, res) => {
    const latexString = req.body.latex;

    if (!latexString) {
        return res.status(400).json({ error: 'No LaTeX code provided' });
    }

    const uniqueId = crypto.randomUUID();
    const tempDir = path.join(__dirname, 'temp', uniqueId);
    
    fs.mkdirSync(tempDir, { recursive: true });

    const texFilePath = path.join(tempDir, 'resume.tex');
    const pdfFilePath = path.join(tempDir, 'resume.pdf');

    fs.writeFileSync(texFilePath, latexString);

    // Run pdflatex compiler
    const command = `pdflatex -interaction=nonstopmode -halt-on-error resume.tex`;

    exec(command, { cwd: tempDir }, (error, stdout, stderr) => {
        if (fs.existsSync(pdfFilePath)) {
            res.download(pdfFilePath, 'Resume.pdf', (err) => {
                if (err) console.error('Error sending file:', err);
                fs.rmSync(tempDir, { recursive: true, force: true }); // Cleanup
            });
        } else {
            console.error('LaTeX Compilation Error:', stdout);
            fs.rmSync(tempDir, { recursive: true, force: true }); // Cleanup
            res.status(500).json({ error: 'LaTeX compilation failed.', details: stdout });
        }
    });
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
    console.log(`=========================================`);
});