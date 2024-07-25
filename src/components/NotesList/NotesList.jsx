import './NotesList.css';
import Note from '../Note/Note';
import { useContext } from 'react';
import { WorkspaceContext } from '../../context/workspace.context';

const NotesList = ({ notes }) => {
  const { workspaceId } = useContext(WorkspaceContext);

  if (notes.length === 0) return <p>Empty</p>;

  const sortNotes = (a, b) => {
    return a.date > b.date ? -1 : b.date > a.date ? 1 : 0;
  };

  return (
    <div className={'notes-list'}>
      {notes
        .filter((note) => note.workspaceId === workspaceId)
        .sort(sortNotes)
        .map((note) => (
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
