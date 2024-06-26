import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteForm from './components/NoteForm/NoteForm';
import NotesList from './components/NotesList/NotesList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';

const DEFAULT_NOTES = [
  {
    id: 1,
    title: 'Подготовка к обновлению курсов',
    text: 'Сегодня провёл весь день за...',
    date: new Date(),
  },
  {
    id: 2,
    title: 'Поход в годы',
    text: 'Думал, что очень много време...',
    date: new Date(),
  },
];

function App() {
  const [notes, setNotes] = useState(DEFAULT_NOTES);

  const addNote = (createdNote) => {
    setNotes((oldNotes) => [
      ...oldNotes,
      {
        id: Math.max(...oldNotes.map((n) => n.id)) + 1,
        title: createdNote.title,
        text: createdNote.post,
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
