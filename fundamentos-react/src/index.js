// versão mais recente react
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<h1>Hello, World!!</h1>);

import './index.css'
import ReactDom from 'react-dom'
import React from 'react'

// const el = document.getElementById('root')
// ReactDom.render('Olá React!', el)

const tag = <h1>Hello, World!</h1>
ReactDom.render(
  <div>{ tag }</div>,
  document.getElementById('root')
)
