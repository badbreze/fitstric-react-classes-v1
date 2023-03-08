import React, { Component } from 'react'
import Blocco from './Blocco';

export default class ListaPersone extends Component {
    constructor(props) {
        super(props);

        this.state = {persone: [
            {nome: "Francesco", cognome: "Banzi", style: {color: 'red'}},
            {nome: "Caterina", style: {color: 'blue'}},
            {nome: "Giovanni"},
            {nome: "Marco"}
        ]};
    }

  render() {
    const mappaPersone = this.state.persone.map(elemento => <Blocco persona={elemento}/>);
    return (
        <>
            {mappaPersone}
        </>
    )
  }
}
