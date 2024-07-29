import './Button.css';

const Button = ({ children, ...properties }) => <button {...properties} className="button accent">{children}</button>;

export default Button;
