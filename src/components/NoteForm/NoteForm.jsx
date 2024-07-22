import { useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import cn from 'classnames';
import styles from './NoteForm.module.css';
import { INITIAL_STATE, formReducer } from './NoteForm.state';

const NoteForm = ({ onAddNote }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, values, isFormReadyToSubmit } = formState;

  useEffect(() => {
    let timerId;

    if (Object.values(isValid).some((item) => !item)) {
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onAddNote(values);
    }
  }, [isFormReadyToSubmit]);

  const addNote = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProperties = Object.fromEntries(formData);
    dispatchForm({
      type: 'SUBMIT',
      payload: formProperties,
    });
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
          className={cn(styles['input-title'], styles['input-title'], {
            [styles['invalid']]: !isValid.title,
          })}
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
            [styles['invalid']]: !isValid.date,
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
          [styles['invalid']]: !isValid.text,
        })}
      ></textarea>
      <Button text={'Save'} />
    </form>
  );
};

export default NoteForm;
