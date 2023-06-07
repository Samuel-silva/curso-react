import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

function Sorteio(props) {
  const {numeros: {min, max}} = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;

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

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  }
}

export default connect(mapStateToProps)(Sorteio);
