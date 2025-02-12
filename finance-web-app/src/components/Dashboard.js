import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <h1>App de Finanzas</h1>
      <h2>Bienvenido, Cristopher</h2>
      <button>
        <Link to="/financial-form">Configurar Perfil Financiero</Link>
      </button>

      <h3>Resumen Financiero</h3>
      <p>Saldo Actual: $5,000</p>
      <p>Ingresos este mes: $3,000</p>
      <p>Gastos este mes: $1,500</p>
      <p>Progreso hacia tu meta: 50%</p>

      <h3>Metas de Ahorro</h3>
      <p>Meta: $10,000</p>
      <p>Ahorro Actual: $5,000</p>
      <p>Faltan: $5,000</p>

      <h3>Transacciones Recientes</h3>
      <ul>
        <li>Comida: -$50</li>
        <li>Transporte: -$30</li>
        <li>Salario: +$3,000</li>
      </ul>
    </div>
  );
}

export default Dashboard;