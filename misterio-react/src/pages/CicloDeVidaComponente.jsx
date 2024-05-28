import React, { Component } from 'react';

class CicloDeVidaComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      mostrarComponente: true,
    };
    console.log('Constructor: Componente instanciado');
  }

  componentDidMount() {
    console.log('componentDidMount: Componente montado');
    this.intervalo = setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Componente atualizado');
    console.log('Props anteriores:', prevProps);
    console.log('Estado anterior:', prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Componente será desmontado');
    clearInterval(this.intervalo);
  }

  toggleComponente = () => {
    this.setState({ mostrarComponente: !this.state.mostrarComponente });
  };

  render() {
    return (
      <div>
        <h1>Ciclo de Vida do Componente de Classe</h1>
        <button onClick={this.toggleComponente}>
          {this.state.mostrarComponente ? 'Esconder' : 'Mostrar'} Componente
        </button>
        {this.state.mostrarComponente && (
          <div>
            <p>Contador: {this.state.contador}</p>
          </div>
        )}
      </div>
    );
  }
}

export default CicloDeVidaComponente;