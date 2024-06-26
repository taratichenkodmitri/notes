import { useState } from 'react';
import Button from '../Button/Button';
import cn from 'classnames';
import styles from './NoteForm.module.css';

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
        setFromValidState((state) => ({
          ...state,
          [key]: false,
        }));
        isFormValidResult = false;
      } else {
        setFromValidState((state) => ({
          ...state,
          [key]: true,
        }));
      }
    }
    return isFormValidResult;
  };

  const addNote = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProperties = Object.fromEntries(formData);
    if (isFormValid(formProperties))
      onAddNote(formProperties);
  };

  return (
    <form
      className={styles['note-form']}
      onSubmit={addNote}
    >
      <div>
        <input
          type="text"
          name="title"
          className={cn(
            styles['input-title'],
            styles['input-title'],
            {
              [styles['invalid']]: !formValidState.title,
            },
          )}
        />
      </div>

      <div className={styles['form-row']}>
        <label
          htmlFor="date"
          className={styles['form-label']}
        >
          <img
            src="./calendar.svg"
            alt="Calendar icon"
          />
          <span>Date</span>
        </label>
        <input
          id="date"
          type="date"
          name="date"
          className={cn(styles['input'], {
            [styles['invalid']]: !formValidState.date,
          })}
        />
      </div>

      <div className={styles['form-row']}>
        <label
          htmlFor="tag"
          className={styles['form-label']}
        >
          <img
            src="./folder.svg"
            alt="Folder icon"
          />
          <span>Tag</span>
        </label>
        <input
          id="tag"
          type="text"
          name="tag"
          className={styles['input']}
        />
      </div>

      <textarea
        name="text"
        cols={30}
        rows={10}
        className={cn(styles['input'], {
          [styles['invalid']]: !formValidState.text,
        })}
      ></textarea>
      <Button text={'Save'} />
    </form>
  );
};

export default NoteForm;
