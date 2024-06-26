import { useState } from 'react';
import Button from '../Button/Button';
import cn from 'classnames';

import './NoteForm.css';

const NoteForm = ({ onAddNote }) => {
  const [formValidState, setFromValidState] = useState({
    title: true,
    text: true,
    date: true,
  });

  const isFormValid = (formProperties) => {
    let isFormValidResult = true;
    for (let key in formProperties) {
      if (!(key in formValidState)) continue;
      if (formProperties[key]?.trim().length === 0) {
        setFromValidState((state) => ({ ...state, [key]: false }));
        isFormValidResult = false;
      } else {
        setFromValidState((state) => ({ ...state, [key]: true }));
      }
    }
    return isFormValidResult;
  };

  const addNote = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProperties = Object.fromEntries(formData);
    if (isFormValid(formProperties)) onAddNote(formProperties);
  };

  return (
    <form
      className={'note-form'}
      onSubmit={addNote}
    >
      <input
        type="text"
        name="title"
        className={cn({ ['invalid']: !formValidState.title })}
      />
      <input
        type="date"
        name="date"
        className={cn({ ['invalid']: !formValidState.date })}
      />
      <input
        type="text"
        name="tag"
      />
      <textarea
        name="text"
        cols={30}
        rows={10}
        className={cn({ ['invalid']: !formValidState.text })}
      ></textarea>
      <Button text={'Save'} />
    </form>
  );
};

export default NoteForm;
