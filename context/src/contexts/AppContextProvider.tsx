import React, {memo, useState} from 'react';

import AppContext from './AppContext';

interface IAppContextProvider {
  children: React.ReactNode;
}

function AppContextProvider({children}: IAppContextProvider) {
  const [text, setText] = useState('');

  return (
    <AppContext.Provider value={{text, setText}}>
      {children}
    </AppContext.Provider>
  );
}

export default memo(AppContextProvider);
