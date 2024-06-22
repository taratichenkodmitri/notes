import NoteButton from '../NoteButton/NoteButton';
import './NoteAddButton.css';

const NoteAddButton = () => {
  return (
    <NoteButton additionalClass="note-add">
      <img
        src="./add.svg"
        alt="add icon"
      />
      New note
    </NoteButton>
  );
};

export default NoteAddButton;
