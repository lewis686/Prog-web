const express = require('express');
const app = express();
const PORT = 3000;

// Exercițiul 4, Pasul 1: Middleware-ul pentru JSON. 
// Acest lucru TREBUIE să fie înaintea rutelor POST/PUT, altfel serverul nu știe să citească corpul cererii!
app.use(express.json());

// Date (temporar in memorie)
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

// Exercițiul 3: GET /api/stats 
// (Atenție! Aceasta ruta trebuie să fie ÎNAINTEA rutei cu :id, altfel Express va crede că "stats" este un ID!)
app.get('/api/stats', function(req, res) {
  const total = projects.length;
  const finalizate = projects.filter(p => p.done === true).length;
  const inLucru = projects.filter(p => p.done === false).length;
  
  res.json({ total, finalizate, inLucru });
});

// Exercițiul 3: GET /api/projects/:id - returnează un singur proiect
app.get('/api/projects/:id', function(req, res) {
  const projectId = parseInt(req.params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.json(project);
});

// Exercițiul 4: POST /api/projects - adauga un proiect nou
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

// Exercițiul 5: DELETE /api/projects/:id - șterge un proiect
app.delete('/api/projects/:id', function(req, res) {
  const projectId = parseInt(req.params.id);
  const index = projects.findIndex(p => p.id === projectId);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  
  projects.splice(index, 1);
  res.json({ message: 'Deleted' });
});

// Porneste serverul (Pune mereu asta la finalul fisierului!)
app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});