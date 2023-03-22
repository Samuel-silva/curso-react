import React from "react"

export default function IndiretaFilho(props) {
  const { quandoClicar } = props
  const gerarIdade = () => parseInt(Math.random() * (30)) + 50
  const gerarBoolean = () => Math.random() > 0.5
  return (
    <div>
      <p>Filho</p>
      <button
        onClick={ _ => quandoClicar('João', gerarIdade, gerarBoolean) }
      >
        Fornecer informações
      </button>
    </div>
  )
}
