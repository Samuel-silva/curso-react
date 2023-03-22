import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default function TabelaProdutos(props) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2
  });

  function getLista() {
    return produtos.map(produto => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ { formatter.format(produto.preco) }</td>
        </tr>
      )
    })
  }

  return (
    <table className='table-product'>
      <thead>
        <tr>
          <th>#Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        { getLista() }
      </tbody>
    </table>
  )
}
