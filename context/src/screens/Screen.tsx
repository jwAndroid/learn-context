import React, {memo, useCallback, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ActionButton from '../components/ActionButton';
import AppContext from '../contexts/AppContext';

const styles = StyleSheet.create({
  block: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {fontSize: 30},
});

function Screen() {
  const value = useContext(AppContext);

  const onPressLeft = useCallback(() => {
    console.log('left');
  }, []);

  const onPressRight = useCallback(() => {
    console.log('right');
  }, []);

  return (
    <View style={styles.block}>
      <Text>{value}</Text>

      <ActionButton onPressLeft={onPressLeft} onPressRight={onPressRight} />
    </View>
  );
}

export default memo(Screen);
