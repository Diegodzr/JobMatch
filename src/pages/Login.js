import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importar hook de navegación
import '../css/Login.css';
import '../css/form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [credenciales, setCredenciales] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState(""); // Estado para mostrar errores en pantalla
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenciales({ ...credenciales, [name]: value });
  };

  const handleSubmit = async (e) => { // Función asíncrona
    e.preventDefault();
    setError(""); // Limpiar errores previos

    try {
      // 2. Petición POST al Backend
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credenciales),
      });

      if (response.ok) {
        // 3. Si el login es correcto:
        const data = await response.json();
        
        // A) Guardamos el Token en el navegador (localStorage)
        localStorage.setItem('token', data.token);
        console.log("Token guardado:", data.token);

        // B) Redirigimos al usuario a la página principal (o a un panel)
        alert("¡Bienvenido! Sesión iniciada correctamente.");
        navigate('/'); 

      } else {
        // Si las credenciales están mal (Error 403/401)
        setError("Correo o contraseña incorrectos.");
      }

    } catch (error) {
      console.error("Error:", error);
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="login-container">
      <div className="row justify-content-center w-100">
        <div className="col-md-4 col-sm-8">
          <div className="card card-login">
            <h2 className="login-header">Iniciar Sesión</h2>
            
            {/* Mostrar mensaje de error si existe */}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email"
                  value={credenciales.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  name="password"
                  value={credenciales.password}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-orange btn-lg">
                  Ingresar
                </button>
              </div>
            </form>

            <div className="text-center mt-3">
              <small>¿No tienes cuenta? <a href="/registro" className="text-decoration-none" style={{color: '#ff9f43'}}>Regístrate aquí</a></small>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;