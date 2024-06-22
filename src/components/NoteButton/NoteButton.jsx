import './NoteButton.css';

const NoteButton = ({ children, additionalClass }) => {
  const cl = 'note-button' + (additionalClass ? ` ${additionalClass}` : '');
  return <div className={cl}>{children}</div>;
};

export default NoteButton;
