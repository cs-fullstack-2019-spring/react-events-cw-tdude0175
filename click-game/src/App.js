import React, { Component } from 'react';
import './App.css';
import Player from './Player'


class App extends Component {
    constructor(props){
        super(props);
        this.state={score:1}
    }

    setState1 = (e) =>
    {
        this.setState({score:1})
    };

    setState2 = (e) =>
    {
        this.setState({score:5})
    };

    setState3 = (e) =>
    {
        this.setState({score:10})
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/*For Changing the amount of score one button gives*/}
            <p className="top">
                <button onClick={this.setState1}>1pt</button>
                <button onClick={this.setState2}>5pt</button>
                <button onClick={this.setState3}>10pt</button>
            </p>
            {/*Allocates each players score and buttons*/}
            <Player state={this.state.score}>1</Player>
            <Player state={this.state.score}>2</Player>
            <Player state={this.state.score}>3</Player>
        </header>
      </div>
    );
  }
}

export default App;
