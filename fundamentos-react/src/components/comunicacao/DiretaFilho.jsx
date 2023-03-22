import React from "react"

export default function DiretaFilho(props) {
  const { nome, idade, estudante } = props

  return (
    <p>
      <span>{ nome } </span>
      <strong> { idade } </strong>
      <span> { estudante ? 'Verdadeiro' : 'Falso' }.</span>
    </p>
  )
}
