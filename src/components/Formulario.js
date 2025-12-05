// src/pages/Formulario.js (o donde lo tengas)
import React, { useState } from "react";
import "../css/form.css";
import "../css/style.css";

const FormularioEmpresa = () => {
  // 1. ESTADO PARA LOS DATOS DEL FORMULARIO (como ya lo tenías)
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    direccion: "",
    correo: "",
    telefono: "",
    descripcion: "",
  });

  // 2. NUEVO ESTADO PARA GUARDAR LOS MENSAJES DE ERROR
  const [errors, setErrors] = useState({});

  // 3. ESTADO PARA MOSTRAR EL MENSAJE DE AGRADECIMIENTO
  const [submitted, setSubmitted] = useState(false);

  // FUNCIÓN PARA VALIDAR CADA CAMPO INDIVIDUALMENTE
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "nombreEmpresa":
        if (value.trim().length < 3) {
          error = "El nombre debe tener al menos 3 caracteres.";
        }
        break;
      case "correo":
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value.trim())) {
          error = "Ingrese un correo válido.";
        }
        break;
      case "descripcion":
        if (value.trim().length < 10) {
          error = "La descripción debe tener al menos 10 caracteres.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  // MANEJADOR DE CAMBIOS: ACTUALIZA EL VALOR Y VALIDA EN TIEMPO REAL
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado del formulario
    setFormData({ ...formData, [name]: value });
    // Valida el campo que se está modificando y actualiza el error
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };


// MANEJADOR DEL ENVÍO DEL FORMULARIO
  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    // 1. Validar campos 
    const newErrors = {};
    Object.keys(formData).forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) {
            newErrors[key] = error;
        }
    });

    setErrors(newErrors);

    // 2. Si no hay errores de validación, enviamos al Backend
    if (Object.keys(newErrors).length === 0) {
      
      try {
        // Hacemos la petición POST
        const response = await fetch('http://localhost:8080/api/empresas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), // Convertimos los datos a JSON
        });

        if (response.ok) {
          // Si el servidor responde OK (200)
          console.log("¡Datos guardados en MySQL!");
          setSubmitted(true); // Mostramos el mensaje de agradecimiento
        } else {
          // Si hubo un error en el servidor
          console.error("Error al guardar en el servidor");
          alert("Hubo un problema al conectar con el servidor.");
        }

      } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el Backend. Asegúrate de que Spring Boot esté corriendo.");
      }

    } else {
      console.log("El formulario contiene errores de validación.");
    }
  };

  // Muestra el mensaje de agradecimiento si el formulario ya se envió
  if (submitted) {
    return (
      <div id="containerForm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '5vh' }}>
        <div className="card-agradecimiento">
          <h1>
            Gracias por tu interés<br />
            Miles de trabajadores están interesados en trabajar contigo.<br />
            Nos contactaremos a la brevedad.
          </h1>
        </div>
      </div>
    );
  }

  // Muestra el formulario
  return (
    <div id="containerForm">
      <div id="formulario" className="card p-4">
        <h2>Inscripción de Empresa</h2>
        {/* El onSubmit llama a nuestra función handleSubmit */}
        <form onSubmit={handleSubmit} noValidate>
          {/* CAMPO NOMBRE EMPRESA */}
          <label htmlFor="nombreEmpresa">Nombre de la Empresa:</label>
          <input
            type="text"
            id="nombreEmpresa"
            name="nombreEmpresa"
            value={formData.nombreEmpresa}
            onChange={handleChange}
          />
          {/* Aquí se muestra el error si existe */}
          {errors.nombreEmpresa && <span className="error-mensaje">{errors.nombreEmpresa}</span>}

          {/* CAMPO DIRECCIÓN */}
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
          {/* No hay validación para dirección, pero se podría agregar */}

          {/* CAMPO CORREO */}
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errors.correo && <span className="error-mensaje">{errors.correo}</span>}
          
          {/* CAMPO TELÉFONO */}
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />

          {/* CAMPO DESCRIPCIÓN */}
          <label htmlFor="descripcion">Descripción del Puesto:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            rows="4"
            value={formData.descripcion}
            onChange={handleChange}
          />
          {errors.descripcion && <span className="error-mensaje">{errors.descripcion}</span>}

          <input type="submit" value="Inscribirse" className="btn btn-primary mt-3" />
        </form>
      </div>
    </div>
  );
};

export default FormularioEmpresa;