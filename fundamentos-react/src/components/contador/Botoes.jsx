import React from "react"

export default function Botoes(props) {
  const {setInc, setDec } = props

  return (
    <div className="ta-c mt">
      <button className="btn btn-success mr" onClick={ setInc }>+</button>
      <button className="btn btn-danger" onClick={ setDec }>-</button>
    </div>
  )
}