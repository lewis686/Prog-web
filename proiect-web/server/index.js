const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard')
 .then(function() {
 console.log('Conectat la MongoDB!');
 })
 .catch(function(err) {
 console.error('Eroare conectare MongoDB:', err);
 });

app.use(express.json());
const projects = [
  { id: 1, title: "Pagina Personala", tech: "HTML, CSS", done: true },
  { id: 2, title: "Calculator Buget", tech: "JS", done: true },
  { id: 3, title: "Dashboard React", tech: "React", done: false },
  { id: 4, title: "API Meteo", tech: "React, API", done: false },
];

// Prima ruta: raspunde la GET /
app.get('/', function(req, res) {
  res.json({ message: 'Serverul functioneaza!' });
});

// GET /api/projects - returneaza toate proiectele
app.get('/api/projects', function(req, res) {
  res.json(projects);
});

// ex 3 
app.get('/api/stats', function(req, res) {
  const total = projects.length;
  const finalizate = projects.filter(p => p.done === true).length;
  const inLucru = projects.filter(p => p.done === false).length;
  
  res.json({ total, finalizate, inLucru });
});

// ex 3
app.get('/api/projects/:id', function(req, res) {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(project);
});

// ex 4
app.post('/api/projects', function(req, res) {
  const newProject = {
    id: projects.length + 1,
    title: req.body.title,
    tech: req.body.tech,
    done: req.body.done || false,
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

//ex 5
app.delete('/api/projects/:id', function(req, res) {
  const projectId = parseInt(req.params.id);
  const index = projects.findIndex(p => p.id === projectId);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  
  projects.splice(index, 1);
  res.json({ message: 'Deleted' });
});

// Porneste serverul 
app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});