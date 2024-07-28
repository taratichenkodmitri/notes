import './NoteButton.css';

const NoteButton = ({ children, additionalClass, ...properties }) => {
  const cl = 'note-button' + (additionalClass ? ` ${additionalClass}` : '');
  return (
    <div
      className={cl}
      {...properties}
    >
      {children}
    </div>
  );
};

export default NoteButton;
