import React from 'react';
import { shallow } from 'enzyme';
import IdeaCard from './IdeaCard.js';

describe('IdeaCard Card Component', () => {
  it('should render' , () => {
    const idea = shallow(<IdeaCard/>)
    expect(idea).toBeDefined();
  });

   describe('IdeaCard Card Snapshots', () => {
     it('should render correctly based on required properties ', () => {
       const deleteCardMock = jest.fn();
       const idea = shallow(<IdeaCard
           id={1}
           title="Dogs should vote"
           description="Give them rights"
           deleteCard={deleteCardMock}
         />);
       expect(idea).toMatchSnapshot();
     });
   });

  it('should render with a title', () => {
    const idea = shallow(<IdeaCard id={1} title="Dogs should vote" description="Give them rights" />)
    const ideaTitle = <h3>Dogs should vote</h3>;

    expect(idea.contains(ideaTitle)).toEqual(true);
  });

  it('should render with a description', () => {
    const idea = shallow(<IdeaCard id={1} title="Dogs should vote" description="Give them rights" />)
    const ideaBody = <p>Give them rights</p>;

    expect(idea.contains(ideaBody)).toEqual(true);
  })

  it('should not be favorited by default', () => {
    const idea = shallow(<IdeaCard id={1} title="Dogs should vote" description="Give them rights" />)

    expect(idea.hasClass('favorited')).toEqual(false);
  })

  it('should be able to be instantiated with a favorite', () => {
    const idea = shallow(<IdeaCard id={1} title="Dogs should vote" description="Give them rights" isFavorite={true} />)

    expect(idea.hasClass('favorited')).toEqual(true);
  });

   it('should be able to be favorited', () => {
     const toggleFavoriteMock = jest.fn();
     const idea = shallow(<IdeaCard
         id={1}
         title="Dogs should vote"
         description="Give them rights"
         toggleFavorite={toggleFavoriteMock}
       />);
  
  
     idea.find('.favorite-btn').simulate('click');
     expect(toggleFavoriteMock).toHaveBeenCalledWith(1);
   });

  it('should be able to be deleted', () => {
    const deleteCardMock = jest.fn();
    const idea = shallow(<IdeaCard
        id={1}
        title="Dogs should vote"
        description="Give them rights"
        deleteCard={deleteCardMock}
      />);

    idea.find('.delete-btn').simulate('click');

    expect(deleteCardMock).toHaveBeenCalledWith(1);
  });
})
