import React from 'react';
import { shallow } from 'enzyme';
import Ideas from './Ideas.js';
import IdeaCard from './IdeaCard.js'

describe('Ideas Component', () => {
  describe('Rendering tests', () => {
    
    it('should be able to render with no ideas', () => {
      const deleteCardMock = jest.fn();
      let ideas = [
        {
          title:"Thought",
          id:1,
          description:"A Thought",
          deleteCard:deleteCardMock
        },
        {
          title:"Idea",
          id:2,
          description:"An Idea...",
          deleteCard:deleteCardMock
        }
      ];

      let shallowIdeas = shallow(<Ideas 
        ideas={ideas}  
      />); 
     expect(shallowIdeas).toBeDefined(); 
    });

    it('should be able to render with ideas', () => {
      const deleteCardMock = jest.fn();
      let ideas = [
        {
          title:"Thought",
          id:1,
          description:"A Thought",
          deleteCard:deleteCardMock
        },
        {
          title:"Idea",
          id:2,
          description:"An Idea...",
          deleteCard:deleteCardMock
        }
      ];

      let shallowIdeas = shallow(<Ideas 
        ideas={ideas}  
      />); 

      expect(shallowIdeas).toBeDefined();
    });
    it('will match the old snapshot', () =>{
      const deleteCardMock = jest.fn();
      let ideas = [
        {
          title:"Thought",
          id:1,
          description:"A Thought",
          deleteCard:deleteCardMock
        },
        {
          title:"Idea",
          id:2,
          description:"An Idea...",
          deleteCard:deleteCardMock
        }
      ];

      let shallowIdeas = shallow(<Ideas 
        ideas={ideas}  
      />); 
      expect(shallowIdeas).toMatchSnapshot();
    });
  });
  
});
