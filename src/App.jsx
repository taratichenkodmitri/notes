import './App.css';
import Header from './components/Header/Header';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteForm from './components/NoteForm/NoteForm';
import NotesList from './components/NotesList/NotesList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import useLocalStorage from './hooks/localStorage.hook';
import { WorkspaceContextProvider } from './context/workspace.context';
import { useState } from 'react';

const formatNotes = (notes) => {
  if (!notes) return [];
  return notes.map((note) => ({
    ...note,
    date: new Date(note.date),
  }));
};

function App() {
  const [notes, setNotes] = useLocalStorage('notes');
  const [selectedNote, setSelectedNote] = useState({});

  const addNote = (createdNote) => {
    if (createdNote.id) {
      setNotes(
        formatNotes(notes).map((note) => {
          if (note.id !== createdNote.id) return note;
          return {
            ...createdNote,
          };
        }),
      );
      return;
    }
    setNotes([
      ...formatNotes(notes),
      {
        id: notes ? Math.max(...notes.map((n) => n.id)) + 1 : 1,
        title: createdNote.title,
        text: createdNote.text,
        date: new Date(createdNote.date),
        workspaceId: createdNote.workspaceId,
      },
    ]);
  };

  return (
    <WorkspaceContextProvider>
      <div className="app">
        <LeftPanel>
          <Header />
          <NoteAddButton />
          <NotesList
            notes={formatNotes(notes)}
            setSelectedNote={setSelectedNote}
          />
        </LeftPanel>
        <Body>
          <NoteForm
            onAddNote={addNote}
            selectedNote={selectedNote}
          ></NoteForm>
        </Body>
      </div>
    </WorkspaceContextProvider>
  );
}

export default App;
