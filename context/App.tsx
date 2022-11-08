/**
 * @format
 */

import React, {memo} from 'react';
import AppContextProvider from './src/contexts/AppContextProvider';

import Screen from './src/screens/Screen';

function App() {
  return (
    <AppContextProvider>
      <Screen />
    </AppContextProvider>
  );
}

export default memo(App);
