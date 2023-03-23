import './Input.css'
import React, { useState } from "react"

export default function Input(props) {
  const [valor, setValor] = useState('Inicial')
  function quandoDigitar(e) {
    setValor(e.target.value)
  }

  return (
    <div className="input">
      <h2>{valor}</h2>
      <input className='input' value={valor} onChange={quandoDigitar} />
      <br /><br />
      <input className='input' value={valor} readOnly />
      <br /><br />
      <input className='input' value={undefined} />
    </div>
  )
}
