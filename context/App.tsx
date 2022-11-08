/**
 * @format
 */

import React, {memo} from 'react';

import AppContext from './src/contexts/AppContext';
import Screen from './src/screens/Screen';

function App() {
  return (
    <AppContext.Provider value="안녕하세요!!!">
      <Screen />
    </AppContext.Provider>
  );
}

export default memo(App);
