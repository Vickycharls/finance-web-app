import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <h2>Crear Cuenta</h2>
      <input type="text" placeholder="Nombre completo" />
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button>Registrarse</button>
      <p>
        ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
      </p>
    </div>
  );
}

export default Register;