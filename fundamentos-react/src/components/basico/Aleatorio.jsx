import React from 'react'

export default function Aleatorio(props) {
  const {min, max} = props
  const numAleatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <React.Fragment>
      <h2>Valor aleatório</h2>
      <p><strong>Valor mínimo:</strong> { min }</p>
      <p><strong>Valor máximo:</strong> { max }</p>
      <p><strong>Valor gerado:</strong> { numAleatorio }</p>
    </React.Fragment>
  )
}
