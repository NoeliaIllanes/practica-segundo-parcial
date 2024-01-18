// Componente.js
import React, { useState } from 'react';
import '../style/Componente1.css';

const Componente = () => {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const toggleTexto = () => {
    setMostrarTexto(!mostrarTexto);
  };

  return (
    <div className="componente">
      <button className="boton" onClick={toggleTexto}>
        Show/Hide
      </button>
      <h1 className={`texto ${mostrarTexto ? 'mostrar' : ''}`}> ¡Welcome to React Challenges!  </h1>
    </div>
  );
};

export default Componente;
