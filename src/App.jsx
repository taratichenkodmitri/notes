import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteForm from './components/NoteForm/NoteForm';
import NotesList from './components/NotesList/NotesList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes'),
    );
    if (savedNotes) {
      setNotes(
        savedNotes.map((note) => ({
          ...note,
          date: new Date(note.date),
        })),
      );
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = (createdNote) => {
    setNotes((oldNotes) => [
      ...oldNotes,
      {
        id:
          oldNotes.length > 0
            ? Math.max(...oldNotes.map((n) => n.id)) + 1
            : 1,
        title: createdNote.title,
        text: createdNote.text,
        date: new Date(createdNote.date),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <NoteAddButton />
        <NotesList notes={notes} />
      </LeftPanel>
      <Body>
        <NoteForm onAddNote={addNote}></NoteForm>
      </Body>
    </div>
  );
}

export default App;
