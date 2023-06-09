import React, { Component } from "react"

import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"

class Contador extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     numero: props.numeroInicial
  //   }

  //   this.inc = this.inc.bind(this)
  // }

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dec() {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div>
        <h2 className="ta-c">Contador</h2>
        <Display numero={this.state.numero} />

        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />

        <Botoes setInc={this.inc} setDec={_ => this.dec()} />
      </div>
    )
  }
}

export default Contador
