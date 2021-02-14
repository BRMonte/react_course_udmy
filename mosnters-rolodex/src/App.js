import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor(){ //constructor runs first before everything. It allows us to have a STATE
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this); //this line allows the this.setState inside handleChange function to work
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //primeiro faz a busca dos dados de users
    .then(response => response.json()) //depois transforma num JSON para que assuma o formato q precisamos
    .then(users => this.setState({ monsters: users })); //depois passa a key/value pair monsters: users como parametros da funcao setState, que e responsavel por atualizar o state. Antes de setState (monsters era array vazio; Depois (monsters: users)
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
