import { Link } from 'react-router';

function NotFound() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>404 — Pagina nu există</h1>
      <p>Cum ai reușit să te rătăcești chiar și aici? *Oftează*</p>
      <Link to="/" style={{ color: '#FF7733', fontWeight: 'bold' }}>
        Du-te înapoi la Home
      </Link>
    </div>
  );
}

export default NotFound;