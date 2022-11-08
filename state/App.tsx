/**
 * @format
 */

import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

import Counter from './src/Counter';
import ReducerSample from './src/ReducerSample';

/**
 * useState, useReducer 를 사용한 클라이언트의 상태관리
 */
const styles = StyleSheet.create({
  block: {flex: 1},
  container: {flex: 1, backgroundColor: 'gray'},
});

function App() {
  return (
    <View style={styles.block}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Counter />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ReducerSample />
      </View>
    </View>
  );
}

export default memo(App);
