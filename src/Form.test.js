import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.js';

describe('Form Component', () => {
  let addCardMock;
  beforeEach(() => {
    addCardMock = jest.fn();
  });

  it('should render a form', () => {
    const shallowForm = shallow(<Form 
        addCard={addCardMock}
      />);

    expect(shallowForm).toMatchSnapshot();
  });

  it('should add a card', () => {
    const shallowForm = shallow(<Form 
        addCard={addCardMock}
      />);
    shallowForm.find('.add-card-btn').simulate('click');
    expect(addCardMock).toHaveBeenCalledTimes(1);
  });
  
  
});
