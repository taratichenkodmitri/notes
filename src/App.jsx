import './App.css';
import Button from './components/Button/Button';
import Note from './components/Note/Note';

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
    <>
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
      <Button></Button>
    </>
  );
}

export default App;
