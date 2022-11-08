/**
 * @format
 */

import React, {memo} from 'react';

import {SampleProvider} from './src/contexts/SampleContext';
import Screen from './src/screens/Screen';

/**
 * 1. state 를 위한 context.
 * 2. dispatch 를 위한 context.
 * 3. 커스텀 hook
 */

function App() {
  return (
    <SampleProvider>
      <Screen />
    </SampleProvider>
  );
}

export default memo(App);
