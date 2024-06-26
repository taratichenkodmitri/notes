import './NotesList.css';
import Note from '../Note/Note';

const NotesList = ({ notes }) => {
  if (notes.length === 0) return <p>Empty</p>;

  const sortNotes = (a, b) => {
    return a.date > b.date ? -1 : b.date > a.date ? 1 : 0;
  };

  return (
    <div className={'notes-list'}>
      {notes.sort(sortNotes).map((note) => (
        <Note
          key={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
        />
      ))}
    </div>
  );
};

export default NotesList;
