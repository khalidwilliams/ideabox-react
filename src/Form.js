import React from 'react';

const Form = ({addCard}) => {
  return (
    <form>
      <div className="label-group">
        <label for="title-input">Idea Title</label>
        <input id="title-input" type="text" />
      </div>
      <div className="label-group">
        <label for="description-input">Idea Title</label>
        <input id="description-input" type="text"/>
      </div>
      <button className="add-card-btn" onClick={() => addCard()}>Add Idea</button>
    </form>
  );
};

export default Form;
