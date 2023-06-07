import React from "react";

import Card from "./Card";

function Sorteio(props) {
  const aleatorio = parseInt(Math.random() * (10 - 1)) + 1;
  return (
    <Card title="Sorteio de um Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
}

export default Sorteio;
