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
    const formElement = <form></form>;

    expect(shallowForm.contains(formElement)).toEqual(true);
  });
});
