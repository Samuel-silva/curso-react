import './App.css'
import React from 'react'

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro'
import Fragmento from './components/basico/Fragmento'
import Aleatorio from './components/basico/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basico/Familia'
import FamiliaMembro from './components/basico/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

export default () => (
  <div className="app">
    <h1>Fundamentos React 2</h1>

    <div className="card-conteiner">
    <Card titulo="#07 - Desafio repetição">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componentes com filhos">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card
        color="#C70039"
        titulo="#04 - Desafio aleatório"
      >
        <Aleatorio
          min={2}
          max={7}
        />
      </Card>

      <Card
        color=" #0e9aa7"
        titulo="#03 - Fragmento"
      >
        <Fragmento />
      </Card>

      <Card
        color="#ffcc5c"
        titulo="#02 - Com parâmetro"
      >
        <ComParametro
          titulo="Situação do aluno"
          aluno="Samuel"
          nota={8.7}
        />
      </Card>

      <Card titulo="#01 - Primeiro componente">
        <Primeiro />
      </Card>
    </div>
  </div>
)
