import { useState, useEffect } from 'react';
import Card from './Card'; 

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('Toate');
    const [title, setTitle] = useState('');
    const [tech, setTech] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editTech, setEditTech] = useState('');

    useEffect(function() {
        fetch('http://localhost:3000/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Eroare la incarcarea datelor');
                setLoading(false);
            });
    }, []);
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, tech, done: false }),
            });
            const newProject = await response.json();
            setProjects([...projects, newProject]);
            setTitle('');
            setTech('');
        } catch (err) {
            console.error('Eroare:', err);
        }
    }
    async function handleDelete(id) {
        if (window.confirm('Sigur doriti sa stergeti acest proiect?')) {
            try {
                await fetch('http://localhost:3000/api/projects/' + id, { method: 'DELETE' });
                setProjects(projects.filter(p => p._id !== id));
            } catch (err) {
                console.error('Eroare la stergere:', err);
            }
        }
    }
    async function handleToggle(id, currentDone) {
        try {
            const response = await fetch('http://localhost:3000/api/projects/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ done: !currentDone })
            });
            const updatedProject = await response.json();
            setProjects(projects.map(p => p._id === id ? updatedProject : p));
        } catch (err) {
            console.error('Eroare la toggle:', err);
        }
    }
    function startEditing(project) {
        setEditingId(project._id);
        setEditTitle(project.title);
        setEditTech(project.tech);
    }
    async function saveEdit(id) {
        try {
            const response = await fetch('http://localhost:3000/api/projects/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: editTitle, tech: editTech })
            });
            const updatedProject = await response.json();
            setProjects(projects.map(p => p._id === id ? updatedProject : p));
            setEditingId(null); 
        } catch (err) {
            console.error('Eroare la salvare editare:', err);
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const filteredProjects = projects.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
        const matchStatus = 
            statusFilter === 'Toate' ? true : 
            statusFilter === 'Finalizate' ? p.done : 
            !p.done; // În lucru
        return matchSearch && matchStatus;
    });

    return (
        <div>
            <h3>Proiecte</h3>

            <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
                <h4>Adaugă un proiect nou</h4>
                <input type="text" placeholder="Titlu proiect..." value={title} onChange={(e) => setTitle(e.target.value)} required style={{ marginRight: '10px' }} />
                <input type="text" placeholder="Tehnologii..." value={tech} onChange={(e) => setTech(e.target.value)} required style={{ marginRight: '10px' }} />
                <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px' }}>Adaugă</button>
            </form>
            <div style={{ marginBottom: '20px' }}>
                <input type="text" placeholder="Cauta proiect..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '10px' }} />
                <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="Toate">Toate</option>
                    <option value="Finalizate">Finalizate</option>
                    <option value="În lucru">În lucru</option>
                </select>
            </div>

            <div>
                {filteredProjects.map((item) => (
                    <div key={item._id} style={{ 
                        border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px',
                        backgroundColor: item.done ? '#e6ffe6' : '#fff' 
                    }}>
                        
                        {editingId === item._id ? (
                            <div>
                                <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} style={{ marginRight: '10px' }} />
                                <input type="text" value={editTech} onChange={(e) => setEditTech(e.target.value)} style={{ marginRight: '10px' }} />
                                <button onClick={() => saveEdit(item._id)} style={{ backgroundColor: '#2196F3', color: 'white', marginRight: '5px', border: 'none', padding: '5px 10px', borderRadius: '3px' }}>Salvează</button>
                                <button onClick={() => setEditingId(null)} style={{ backgroundColor: '#9e9e9e', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px' }}>Anulează</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                                    <Card title={item.title} description={item.tech} />
                                </div>
                                <div>
                                    <button onClick={() => handleToggle(item._id, item.done)} style={{ backgroundColor: item.done ? '#ff9800' : '#4CAF50', color: 'white', marginRight: '5px', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>
                                        {item.done ? 'Marchează în lucru' : 'Finalizează'}
                                    </button>
                                    <button onClick={() => startEditing(item)} style={{ backgroundColor: '#2196F3', color: 'white', marginRight: '5px', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Editează</button>
                                    <button onClick={() => handleDelete(item._id)} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Șterge</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;