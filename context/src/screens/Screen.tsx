import React, {memo, useCallback, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ActionButton from '../components/ActionButton';
import AppContext from '../contexts/AppContext';

const styles = StyleSheet.create({
  block: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {fontSize: 30},
});

function Screen() {
  const {text, setText} = useContext(AppContext);

  const onPressLeft = useCallback(() => {
    setText('left');
  }, [setText]);

  const onPressRight = useCallback(() => {
    setText('right');
  }, [setText]);

  return (
    <View style={styles.block}>
      <Text>{text}</Text>

      <ActionButton onPressLeft={onPressLeft} onPressRight={onPressRight} />
    </View>
  );
}

export default memo(Screen);
