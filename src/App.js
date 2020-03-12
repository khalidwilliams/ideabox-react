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

  addCard(cardObject) {
    const newCard = Object.assign({}, cardObject)
    let ideaWithId = this.state.ideas.find(idea => {
    return idea.id === newCard.id;
    });
    if (ideaWithId) {
      throw new Error(`Idea with id ${newCard.id} already exists`);
    } else {
      let newState = this.state.ideas.concat([newCard]);
      this.setState({ideas: newState});
    }
  }

  deleteCard(idToDelete) {
    const ideaToDelete = this.state.ideas.find((idea, index) => {
      return idea.id === idToDelete;
    });

    if (!ideaToDelete) {
      throw new Error(`No idea with id ${id} found`);
    } else {
      const remainingIdeas = this.state.ideas.filter(idea => {
        return idea.id !== idToDelete;
      }); 
      this.setState({ideas: remainingIdeas});
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
