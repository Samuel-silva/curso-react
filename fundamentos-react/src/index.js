// versão mais recente react
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<h1>Hello, World!!</h1>);

import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'

// const el = document.getElementById('root')
// ReactDOM.render('Olá React!', el)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
