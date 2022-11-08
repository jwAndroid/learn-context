/**
 * @format
 */

import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import ActionButton from './src/components/ActionButton';

const styles = StyleSheet.create({
  block: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {fontSize: 30},
});

function App() {
  const onPressLeft = useCallback(() => {
    console.log('left');
  }, []);

  const onPressRight = useCallback(() => {
    console.log('right');
  }, []);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>30</Text>

      <ActionButton onPressLeft={onPressLeft} onPressRight={onPressRight} />
    </View>
  );
}

export default memo(App);
