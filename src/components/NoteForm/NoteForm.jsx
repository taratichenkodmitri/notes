import Button from '../Button/Button';

import './NoteForm.css';

const NoteForm = ({ onAddNote }) => {
  const addNote = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProperties = Object.fromEntries(formData);
    onAddNote(formProperties);
  };

  return (
    <form
      className={'note-form'}
      onSubmit={addNote}
    >
      <input
        type="text"
        name="title"
      />
      <input
        type="date"
        name="date"
      />
      <input
        type="text"
        name="tag"
      />
      <textarea
        name="post"
        cols={30}
        rows={10}
      ></textarea>
      <Button text={'Save'} />
    </form>
  );
};

export default NoteForm;
