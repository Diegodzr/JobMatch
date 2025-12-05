import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css'; // Usaremos los mismos estilos del Login
import 'bootstrap/dist/css/bootstrap.min.css';

function Registro() {
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
    role: 'POSTULANTE' // Valor por defecto
  });
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Petición al endpoint de REGISTRO que creaste en Spring Boot
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        alert("¡Cuenta creada con éxito! Ahora puedes iniciar sesión.");
        navigate('/login'); // Redirigir al Login para que entre
      } else {
        setError("Error al registrarse. Puede que el correo ya exista.");
      }

    } catch (error) {
      console.error("Error:", error);
      setError("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center w-100">
        <div className="col-md-4 col-sm-8">
          <div className="card card-login">
            <h2 className="login-header">Crear Cuenta</h2>
            
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              
              {/* Campo Email */}
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={usuario.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              {/* Campo Contraseña */}
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input 
                  type="password" 
                  className="form-control" 
                  name="password"
                  value={usuario.password}
                  onChange={handleChange}
                  required 
                />
              </div>

              {/* Campo Rol (Selector) */}
              <div className="mb-3">
                <label className="form-label">¿Qué eres?</label>
                <select 
                  className="form-select" 
                  name="role" 
                  value={usuario.role} 
                  onChange={handleChange}
                >
                  <option value="POSTULANTE">Busco Trabajo (Postulante)</option>
                  <option value="EMPRESA">Ofrezco Trabajo (Empresa)</option>
                </select>
              </div>

              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-orange btn-lg">
                  Registrarse
                </button>
              </div>
            </form>

            <div className="text-center mt-3">
              <small>¿Ya tienes cuenta? <Link to="/login" style={{color: '#ff9f43'}}>Inicia Sesión aquí</Link></small>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;