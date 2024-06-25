import './App.css';
import Header from './components/Header/Header';
import Note from './components/Note/Note';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteForm from './components/NoteForm/NoteForm';
import NotesList from './components/NotesList/NotesList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';

function App() {
  const notes = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Сегодня провёл весь день за...',
      date: new Date(),
    },
    {
      title: 'Поход в годы',
      text: 'Думал, что очень много време...',
      date: new Date(),
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <NoteAddButton />
        <NotesList>
          <Note
            title={notes[0].title}
            text={notes[0].text}
            date={notes[0].date}
          />
          <Note
            title={notes[1].title}
            text={notes[1].text}
            date={notes[1].date}
          />
        </NotesList>
      </LeftPanel>
      <Body>
        <NoteForm></NoteForm>
      </Body>
    </div>
  );
}

export default App;
