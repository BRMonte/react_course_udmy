import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //primeiro faz a busca dos dados de users
    .then(response => response.json()) //depois transforma num JSON para que assuma o formato q precisamos
    .then(users => this.setState({ monsters: users })); //depois passa a key/value pair monsters: users como parametros da funcao setState, que e responsavel por atualizar o state. Antes de setState (monsters era array vazio; Depois (monsters: users)
  }


  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
