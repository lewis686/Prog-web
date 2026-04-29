import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar'; // Sau unde ai tu Navbar-ul
import Footer from './Footer'; // Aici am importat Footer-ul
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About'; // Am importat pagina About
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* Apare pe TOATE paginile, sus */}
      <Navbar />
      
      {/* Se schimbă în funcție de URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} /> {/* Ruta nouă! */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Catch-all trebuie să rămână la final! */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Apare pe TOATE paginile, jos */}
      <Footer />
    </BrowserRouter>
  );
}
export default App;
