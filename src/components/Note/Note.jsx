import './Note.css';

const Note = ({ title, date, text }) => {
  return (
    <div className="note">
      <div className="note__header">{title}</div>
      <div className="note__body">
        <div className="note__date">{date}</div>
        <div className="note__text">{text}</div>
      </div>
    </div>
  );
};

export default Note;
