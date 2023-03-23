import React from "react"

export default function PassoForm(props) {
  const {passo, setPasso} = props
  return (
    <div className="ta-c mt">
      <label htmlFor="passoInput">
        <input
          className='input mb'
          id="passoInput"
          min="0"
          max="10"
          type="number"
          value={passo}
          onChange={e => setPasso(+e.target.value)}
        />
      </label>
    </div>
  )
}