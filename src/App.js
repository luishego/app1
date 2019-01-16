import React, { Component } from 'react';
import './App.css';
import  Bio from './components/Bio';
import Avatar from './components/Avatar'
import UserName from './components/UserName';

class App extends Component {
  state={

    names : [
        {name: "Luids"},
        {name: "Daftboy04"},
        {name: "Luidddssss"}
          ]

  }
  swichNameHandler = () => {
    this.setState({names:[
      {name: "Luidsss"},
      {name: "Daftboy03"},
      {name: "Negraa"}
        ] })
    console.log("was clicked");

  }
  render() {
    return (
      <div>
        <ul>
          <li>
          <UserName name={this.state.names[0].name}/>
          </li>
          <li>
          <UserName name={this.state.names[1].name}/>
          </li>
          <li>
          <UserName name={this.state.names[2].name}/>
          </li>      
          <Avatar />
          <li><button onClick={this.swichNameHandler} >Swich name </button>
          </li>
          <li>
          <Bio />
          </li>
        </ul>      
      </div>
    );
  }
}

export default App;
