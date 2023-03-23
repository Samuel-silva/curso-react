import './Mega.css'
import React, { Component } from "react";

class Mega extends Component {
  state = {
    qtdNumeros: 6,
    listaNumeros: ''
  }

  setQtdNumeros = (novoNum) => {
    this.setState({
      qtdNumeros: novoNum
    })
  }

  comparaNumeros(a, b) {
    return a - b;
  }

  gerarNumAleatorios = () => parseInt(Math.random() * (60)) + 1

  checkNumRepetido = (array, num) => {
    return !!array.find(e => e === num);
  }

  gerarNumeros = () => {
    const numeros = []

    for (let index = 0; index < this.state.qtdNumeros; index++) {
      let numero = this.gerarNumAleatorios()
      let numeroRepetido = this.checkNumRepetido(numeros, numero);

      while (numeroRepetido) {
        numero = this.gerarNumAleatorios()
        numeroRepetido = this.checkNumRepetido(numeros, numero);
      }

      numeros.push(numero)
      numeros.sort(this.comparaNumeros);
    }

    return numeros
  }

  gerarLista = () => {
    const numeros = this.gerarNumeros()
    const lista = numeros.map(numero => {
      return (
        <li key={numero} className="lista__item">{numero}</li>
      )
    })

    this.setState({
      listaNumeros: lista
    })
  }

  render() {
    return (
      <div>
        <p className="ta-c">Quantidade de numeros</p>
        <div className="ta-c">
          <label htmlFor="qtdNumeros">
            <input
              className='input mb'
              id="qtdNumeros"
              min="6"
              max="15"
              type="number"
              value={this.state.qtdNumeros}
              onChange={e => this.setQtdNumeros(+e.target.value)}
            />
          </label>
        </div>
        <div className="ta-c mt">
          <button className="btn btn-success" onClick={this.gerarLista}>Gerar numeros</button>
        </div>
        <ul className='lista'>
          {this.state.listaNumeros}
        </ul>
      </div>
    )
  }
}

export default Mega
