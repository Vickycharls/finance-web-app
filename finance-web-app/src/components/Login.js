import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <h2>Bienvenido</h2>
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button>Iniciar Sesión</button>
      <p>
        ¿No tienes una cuenta? <Link to="/register">Crear cuenta nueva</Link>
      </p>
    </div>
  );
}

export default Login;