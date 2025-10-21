import React from 'react';
// 1. Importa 'Link' desde react-router-dom
import { Link } from 'react-router-dom'; 

import iconoJM from '../img/IconoJM.png'
import '../css/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    // ¡Ojo! En JSX se usa 'className' en lugar de 'class'
    <nav id="navPrincipal" className="navbar navbar-expand-lg">
      <div className="container">
        {/* 2. Cambia <a> por <Link> y href por to="/" para la página principal */}
        <Link className="navbar-brand" to="/"><img id="logoNav" src={iconoJM} alt="JobMatch" width="200" height="50"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Este puede seguir siendo <a> porque es un ancla a una sección (#) */}
              <a className="nav-link" href="#empresas">Empresas Aliadas</a>
            </li>
            <li className="nav-item">
              {/* 3. Cambia <a> por <Link> y href por to="/trabajos" */}
              <Link className="nav-link" to="/trabajos">Trabajos</Link>
            </li>
            <li className="nav-item">
              {/* 4. Cambia <a> por <Link> y href por to="/formulario" */}
              <Link className="nav-link" to="/formulario">Formulario</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;