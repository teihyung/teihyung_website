const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index'); // Renders views/index.ejs
});

app.get('/skill', (req, res) => {
    res.render('skill'); // Renders views/skill.ejs
});

app.get('/project', (req, res) => {
    res.render('project'); // Renders views/project.ejs
});

app.get('/used-in-website', (req, res) => {
    res.render('used-in-website'); // Renders views/used-in-website.ejs
});

// Start the server
app.listen(port, () => {
    console.log(`The app has started on PORT ${port}`);
});

