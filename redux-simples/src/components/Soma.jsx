import React from 'react'
import { connect } from "react-redux";

import Card from './Card'

function Soma(props) {
  const {numeros: {min, max}} = props;

  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  }
}

export default connect(mapStateToProps)(Soma);