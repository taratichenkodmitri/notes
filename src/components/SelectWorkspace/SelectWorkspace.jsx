import { useContext } from 'react';
import styles from './SelectWorkspace.module.css';
import { WorkspaceContext } from '../../context/workspace.context';

const SelectWorkspace = () => {
  const { workspaceId, setWorkspaceId } = useContext(WorkspaceContext);

  const changeWorkspace = (event) => {
    setWorkspaceId(Number(event.target.value));
  };

  return (
    <select
      className={styles['select-workspace']}
      value={workspaceId}
      onChange={changeWorkspace}
    >
      <option value="1">Workspace 1</option>
      <option value="2">Workspace 2</option>
    </select>
  );
};

export default SelectWorkspace;
