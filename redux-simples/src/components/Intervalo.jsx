import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

function Intervalo(props) {
  const {numeros: {min, max}} = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínino:</strong>
          <input type="number" value={min} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  }
}

export default connect(mapStateToProps)(Intervalo);
