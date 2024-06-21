import NoteButton from '../NoteButton/NoteButton';
import './Note.css';

const Note = ({ title, date, text }) => {
  const formattedDate = new Intl.DateTimeFormat('ru-Ru').format(date);

  return (
    <NoteButton>
      <div className="note__header">{title}</div>
      <div className="note__body">
        <div className="note__date">{formattedDate}</div>
        <div className="note__text">{text}</div>
      </div>
    </NoteButton>
  );
};

export default Note;
