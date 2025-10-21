import React from 'react';
import iconoNestle from '../img/Nestle.png'
import iconoHooters from '../img/Hooters.png'
import iconoDunkin from '../img/Dunkin.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Nav.css';



function Empresas() {
  return (
      <div id="empresas">
    <h2>Tenemos empresas aliadas ayudandote a encontrar el trabajo que mas se adapte a tus necesidades</h2>
    <div id="imagenEmpresas">
      <img src={iconoDunkin} alt="dunkin"/>
      <img src={iconoHooters} alt="hooters"/>
      <img src={iconoNestle} alt="nestle"/>
    </div>
  </div>

  );
}

export default Empresas;