import './Note.css';

const Note = ({ title, date, text }) => {
  const formattedDate = new Intl.DateTimeFormat('ru-Ru').format(date);

  return (
    <div className="note">
      <div className="note__header">{title}</div>
      <div className="note__body">
        <div className="note__date">{formattedDate}</div>
        <div className="note__text">{text}</div>
      </div>
    </div>
  );
};

export default Note;
