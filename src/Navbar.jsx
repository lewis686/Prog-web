import { Link, NavLink } from 'react-router';

function Navbar() {
  return (
<nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '15px', fontSize: '1.2rem' }}>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
</nav>
  );
}

export default Navbar;