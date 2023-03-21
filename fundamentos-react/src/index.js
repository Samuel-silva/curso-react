// versão mais recente react
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<h1>Hello, World!!</h1>);

import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

import Primeiro from './components/basico/Primeiro'
import ComParametro from './components/basico/ComParametro'

// const el = document.getElementById('root')
// ReactDom.render('Olá React!', el)


ReactDom.render(
  <div>
    <Primeiro />
    <ComParametro
      titulo="Situação do aluno"
      aluno="Samuel"
      nota={8.7}
    />
    <ComParametro
      titulo="Situação do aluno"
      aluno="Maria"
      nota={9.2}
    />
  </div>,
  document.getElementById('root')
)
