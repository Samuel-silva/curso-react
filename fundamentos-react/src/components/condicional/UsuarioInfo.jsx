import React from "react"
import { If, Else } from './If'

export default function UsuarioInfo(props) {
  const usuario = props.usuario || {}

  return (
    <div>
      <If test={ usuario?.nome }>
        Seja bem vindo <strong>{usuario.nome}</strong>

        <Else>
          Seja bem vindo <strong>pessoa</strong>
        </Else>
      </If>
    </div>
  )
}
