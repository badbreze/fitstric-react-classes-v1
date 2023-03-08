import React, { Component } from 'react'

export default class Blocco extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            numeroRighe: 6,

        };

        this.alClickScatenateLinferno = this.alClickScatenateLinferno.bind(this);
    }

    alClickScatenateLinferno() {
        this.setState({
            numeroRighe: this.state.numeroRighe + 1
        });

        alert("Corri Forest! " + this.state.numeroRighe);
    }

    render() {
        const {nome, cognome, style, children} = this.props.persona;
        
        return (
            <div>
                <div onClick={this.alClickScatenateLinferno} style={style}>{nome} {cognome}</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
