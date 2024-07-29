import NoteButton from '../NoteButton/NoteButton';
import './NoteAddButton.css';

const NoteAddButton = ({ ...properties }) => {
  return (
    <NoteButton
      {...properties}
      additionalClass="note-add"
    >
      <img
        src="./add.svg"
        alt="add icon"
      />
      New note
    </NoteButton>
  );
};

export default NoteAddButton;
