import { createContext, useState } from 'react';

export const WorkspaceContext = createContext({ workspaceId: 2 });

export const WorkspaceContextProvider = ({ children }) => {
  const [workspaceId, setWorkspaceId] = useState(2);

  return <WorkspaceContext.Provider value={{ workspaceId, setWorkspaceId }}>{children}</WorkspaceContext.Provider>;
};
