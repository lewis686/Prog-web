import { Link, NavLink } from 'react-router';

function Navbar() {
  return (
    <nav>
      {/* Presupun că ai deja restul link-urilor aici */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/about">About</NavLink> 
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;