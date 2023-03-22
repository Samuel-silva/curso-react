import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default function Familia(props) {
  const { sobrenome } = props

  return (
    <div>
      <FamiliaMembro
        nome="Pedro"
        sobrenome={sobrenome}
      />
      <FamiliaMembro
        nome="Ana"
        {...props}
      />
      <FamiliaMembro
        nome="Gustavo"
        sobrenome="Silva"
      />
    </div>
  )
}
