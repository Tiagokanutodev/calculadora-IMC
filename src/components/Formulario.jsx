import React, { useState } from 'react';

function Formulario({ calcularIMC }) {
const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('');

return (
    <div>
    <h1>Calculadora de IMC</h1>
    <div>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
    </div>
    <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
    </div>
    <button onClick={() => calcularIMC(altura, peso)}>Calcular</button>
    </div>
);
}

export default Formulario;