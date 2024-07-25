import { useContext, useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import cn from 'classnames';
import styles from './NoteForm.module.css';
import { INITIAL_STATE, formReducer } from './NoteForm.state';
import { WorkspaceContext } from '../../context/workspace.context';

const NoteForm = ({ onAddNote }) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, values, isFormReadyToSubmit } = formState;
  const { workspaceId } = useContext(WorkspaceContext);
  const titleReference = useRef();
  const dateReference = useRef();
  const textReference = useRef();

  const focusError = () => {
    switch (true) {
      case !isValid.title: {
        titleReference.current.focus();
        break;
      }
      case !isValid.date: {
        dateReference.current.focus();
        break;
      }
      case !isValid.text: {
        textReference.current.focus();
        break;
      }
    }
  };

  useEffect(() => {
    let timerId;

    if (Object.values(isValid).some((item) => !item)) {
      focusError();
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
      dispatchForm({ type: 'RESET_VALUES' });
    }
  }, [isFormReadyToSubmit, values, onAddNote]);

  useEffect(() => {
    dispatchForm({ type: 'SET_VALUE', payload: { workspaceId } });
  }, [workspaceId]);

  const addNote = (event) => {
    event.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  const onInputChange = (event) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: {
        [event.target.name]: event.target.value,
      },
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
          ref={textReference}
          onChange={onInputChange}
          value={values.title}
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
          ref={dateReference}
          className={cn(styles['input'], {
            [styles['invalid']]: !isValid.date,
          })}
          onChange={onInputChange}
          value={values.date}
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
          onChange={onInputChange}
          value={values.tag}
        />
      </div>

      <textarea
        name="text"
        cols={30}
        rows={10}
        className={cn(styles['input'], {
          [styles['invalid']]: !isValid.text,
        })}
        ref={textReference}
        onChange={onInputChange}
        value={values.text}
      ></textarea>
      <Button text={'Save'} />
    </form>
  );
};

export default NoteForm;
