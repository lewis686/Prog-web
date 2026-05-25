import { useState, useEffect } from 'react';

function Home() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/stats')
            .then(res => {
                if (!res.ok) throw new Error('Eroare la conectare');
                return res.json();
            })
            .then(data => {
                setStats(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Prima Pagina</h2>
            <p>Salut!</p>
            
            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '8px', color: 'black' }}>
                <h3>Statistici Live:</h3>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>Eroare: {error}</p>}
                {stats && (
                    <ul>
                        <li><strong>Total Proiecte:</strong> {stats.total}</li>
                        <li><strong>Proiecte Finalizate:</strong> {stats.done}</li>
                        <li><strong>Proiecte in lucru:</strong> {stats.inProgress}</li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Home;