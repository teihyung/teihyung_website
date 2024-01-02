const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Send the HTML file in response to a request to the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

app.get('/skill', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'skill.html'));
});

app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'project.html'));
});

app.get('/used-in-website', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'used-in-website.html'));
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
