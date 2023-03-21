import React from 'react'

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro'
import Fragmento from './components/basico/Fragmento'
import Aleatorio from './components/basico/Aleatorio'

export default () => (
  <div id="app">
    <h1>Fundamentos React 2</h1>
    <Aleatorio
      min={2}
      max={7}
    />
    <Fragmento />
    <ComParametro
      titulo="Situação do aluno"
      aluno="Samuel"
      nota={8.7}
    />
    <Primeiro />
  </div>
)
