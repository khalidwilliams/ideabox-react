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

  it('should remove a card from state when deleteCard is called', () => {
    
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

  it('should modify a card\'s favorite status when toggleFavorite is called', () => {
  
  }); 
});
