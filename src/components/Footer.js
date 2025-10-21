import React from 'react';
import '../css/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
  <footer class="bg-dark text-white pt-4">
  <div class="container text-center text-md-start">
    <div class="row">

      <div class="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold">JobMatch</h6>
        <p>
          En JobMatch nos dedicamos a conectar a los mejores talentos con las oportunidades laborales ideales. 
          Nuestra misión es ayudarte a encontrar el trabajo de tus sueños.
        </p>
      </div>

      <div class="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
        <h6 class="text-uppercase fw-bold">Síguenos</h6>
        <a href="facebook.com" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="x.com" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="linkedin.com" class="text-white me-4">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="instagram.com" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
      </div>

    </div>
  </div>

  <div class="text-center p-3" id="reservado">
    © 2025 JobMatch. Todos los derechos reservados.
  </div>
</footer>
  );
}

export default Footer;