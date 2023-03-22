import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos(props) {
  const listaFormatada = alunos.map(aluno => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} -&gt; {aluno.nota}
      </li>
    )
  })
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        { listaFormatada }
      </ul>
    </div>
  )
}
