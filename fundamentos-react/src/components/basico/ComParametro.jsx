import React from 'react'

export default function ComParametro(props) {
  const { aluno, nota } = props;
  const status = nota >= 7 ? 'Aprovado' : 'Recuperação'

  return (
    <div>
        <h3>{ props.titulo }</h3>
        <p>
          <strong>{ aluno } </strong>
          tem nota
          <strong> { nota } </strong>
          e está
          <strong> { status }</strong>!
        </p>
    </div>
  )
}
