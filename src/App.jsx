import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import './App.css';

function App() {
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (altura, peso) => {
    if (!altura || !peso) return;
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    setResultado(imc);
  };

  return (
    <div className="App">
      <Formulario calcularIMC={calcularIMC} />
      <Resultado resultado={resultado} />
    </div>
  );
}

export default App;