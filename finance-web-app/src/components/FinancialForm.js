import React from "react";
import { Link } from "react-router-dom";

function FinancialForm() {
  return (
    <div className="container">
      <h2>Ingresar Datos Financieros</h2>

      <h3>Ingresos</h3>
      <input type="number" placeholder="Ingrese su salario mensual" />
      <input type="number" placeholder="Otros ingresos" />

      <h3>Gastos</h3>
      <input type="number" placeholder="Gastos en alimentación" />
      <input type="number" placeholder="Gastos en transporte" />
      <input type="number" placeholder="Otros gastos mensuales" />

      <h3>Metas de Ahorro</h3>
      <input type="number" placeholder="¿Cuánto desea ahorrar?" />
      <input type="number" placeholder="¿En cuántos meses?" />

      <button>Guardar Datos</button>
      <br />
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}

export default FinancialForm;