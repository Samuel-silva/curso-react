import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default function IndiretaPai(props) {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [trabalha, setTrabalha] = useState(false)

  function fornecerInformacoes(nome, idade, trabalha) {
    setNome(nome)
    setIdade(idade)
    setTrabalha(trabalha)
  }

  return (
    <div>
      <p>
        <span>Pai: { nome },</span>
        <strong> { idade }, </strong>
        <span> { trabalha ? 'Verdadeiro' : 'Falso' }. </span>
      </p>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  )
}
