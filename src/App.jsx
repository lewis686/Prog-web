import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './Navbar'; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About'; 
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} /> {/* Ruta nouă! */}
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      
    </BrowserRouter>
  );
}
export default App;
