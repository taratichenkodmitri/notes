import SelectWorkspace from '../SelectWorkspace/SelectWorkspace';
import './Header.css';

const Header = () => {
  return (
   <>
    <img
      src="./logo.svg"
      alt="logo"
      className={'header'}
    />
    <SelectWorkspace/>
   </>
  );
};

export default Header;
