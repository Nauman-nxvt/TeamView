import React, { Component } from 'react';
import './App.css';
import TeamView from "./components/TeamView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className={'container'}>
          <TeamView/>
        </main>
      </div>
    );
  }
}

export default App;
