import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  test('renders application', () => {
    let shallowApp = shallow(<App />);
    expect(shallowApp).toMatchSnapshot();
  });

  it('should have no cards initially', () => {
    let shallowApp = shallow(<App />);
    expect(shallowApp.state('ideas')).toEqual([]);
  });


  describe('addCard fn', () => {
    let shallowApp;
    let mockIdea;
    beforeEach(() => {
      shallowApp = shallow(<App />);
      mockIdea = {
        id:1,
        title: 'Dogs should vote',
        description: 'Give them rights'
      };
    });

    it('should add a card to state when addCard is called', () => {
      shallowApp.instance().addCard(mockIdea);

      expect(shallowApp.state('ideas')).toContainEqual(mockIdea);
    }); 
  
    it('should reject adding a new card if the id already exists', () => {
      shallowApp.instance().addCard(mockIdea);

      expect(() => {
        shallowApp.instance().addCard(mockIdea);
      }).toThrow();
    });
  });

  describe('state modification functions', () => {
    let shallowApp, mockIdeas;
    beforeEach(() => {
      shallowApp = shallow(<App />);
      mockIdeas = [
        {
          id:1,
          title:'Good Idea',
          description: 'Trust me, it\'s a good idea'
        },
        {
          id:2,
          title:'Better Idea',
          description: 'Trust me, it\'s an even better idea',
          isFavorite: true
        }
      ];
      mockIdeas.forEach(idea => {
        shallowApp.instance().addCard(idea);
      });
    });

    it('should modify a card\'s favorite status when toggleFavorite is called', () => {
      shallowApp.instance().toggleFavorite(1);
      shallowApp.instance().toggleFavorite(2);

      let favoriteOne = shallowApp.state('ideas').find(idea => idea.id === 1);
      let favoriteTwo = shallowApp.state('ideas').find(idea => idea.id === 2);

      expect(favoriteOne.isFavorite).toEqual(true);
      expect(favoriteTwo.isFavorite).toEqual(false);
    }); 

    it('should remove a card from state when deleteCard is called', () => {
      shallowApp.instance().deleteCard(1);

      expect(shallowApp.state('ideas')).not.toContainEqual(mockIdeas[0]);
    }); 

    it('should throw if the card does not have a matching id in state', () => {
      expect(() => {
        shallowApp.instance().deleteCard(3);
      }).toThrow();

    }); 
  });
});
