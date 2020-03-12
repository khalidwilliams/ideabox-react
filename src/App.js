import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaCard from './IdeaCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }
  render() {
    <div className="App">
      <IdeaCard 
        id={1}
        title="Dogs Should Vote"
        description="Give them rights"
        deleteCard={(id) => {}}
      />
    </div>
  };
}

export default App;
