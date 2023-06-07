import "./Intervalo.css";
import React from "react";

import Card from "./Card";

function Intervalo(props) {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input type="number" value={1} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
}

export default Intervalo;
