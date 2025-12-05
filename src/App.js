import React from 'react';
// 1. Importa los componentes necesarios de React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 2. Importa tus componentes: el Nav y las páginas
import Nav from './components/Nav'; // Asegúrate que la ruta sea correcta
import Principal from './pages/Principal';
import PaginaTrabajos from './pages/PaginaTrabajos';
import Formulario from './pages/Formulario';
import Login from './pages/Login';
import Registro from './components/Registro';

function App() {
  return (
    // 3. Envuelve toda tu aplicación con BrowserRouter
    <BrowserRouter>
      {/* El Nav va aquí, fuera de <Routes>, para que aparezca en todas las páginas */}
      <Nav />
      
      {/* 4. Define las rutas de tu aplicación */}
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/trabajos" element={<PaginaTrabajos />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;