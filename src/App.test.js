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

  it('should add a card to state when addCard is called', () => {
  
  }); 

  it('should modify a card\'s favorite status when toggleFavorite is called', () => {
  
  }); 
});
