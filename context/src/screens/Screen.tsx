import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useSampleDispatch, useSampleState} from '../contexts/SampleContext';

const styles = StyleSheet.create({
  block: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {fontSize: 30},
});

function Screen() {
  const state = useSampleState(); // dispatch 하여 얻은 값.
  const dispatch = useSampleDispatch(); // dispatch

  const setCount = () => dispatch({type: 'SET_COUNT', count: 5}); // count 를 넣지 않으면 에러발생
  const setText = () => dispatch({type: 'SET_TEXT', text: 'bye'});
  const setColor = () => dispatch({type: 'SET_COLOR', color: 'orange'});
  const toggleGood = () => dispatch({type: 'TOGGLE_GOOD'});

  return (
    <View style={styles.block}>
      <Text>{state.text}</Text>
      <Text>{state.color}</Text>
      <Text>{String(state.isGood)}</Text>
      <Text>{state.count}</Text>

      <View style={{marginTop: 30}}>
        <Text onPress={setCount}>setCount</Text>
        <Text onPress={setText}>setText</Text>
        <Text onPress={setColor}>setColor</Text>
        <Text onPress={toggleGood}>toggleGood</Text>
      </View>
    </View>
  );
}

export default memo(Screen);
