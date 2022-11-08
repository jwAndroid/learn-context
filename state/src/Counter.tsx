import React, {memo, useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import reducer from './slice';

const styles = StyleSheet.create({
  block: {justifyContent: 'center', alignItems: 'center'},
});

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => dispatch({type: 'INCREASE'});

  const onDecrease = () => dispatch({type: 'DECREASE'});

  return (
    <View style={styles.block}>
      <Text>{count}</Text>

      <Text onPress={onIncrease}>inscrease</Text>

      <Text onPress={onDecrease}>descrease</Text>
    </View>
  );
}

export default memo(Counter);
