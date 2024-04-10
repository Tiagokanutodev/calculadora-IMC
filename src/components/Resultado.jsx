import React from 'react';

function Resultado({ resultado }) {
  return (
    <div>
      {resultado && (
        <div>
          <h2>Seu IMC é: {resultado.toFixed(2)}</h2>
          <h2>Sua classificação é: {resultado < 18.5 ? 'Abaixo do peso' : resultado < 24.9 ? 'Peso normal' : 'Acima do peso'}</h2>
        </div>
      )}
    </div>
  );
}

export default Resultado;