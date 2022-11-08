import React, {memo} from 'react';
import {View, Text, StyleSheet, GestureResponderEvent} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    marginTop: 20,
  },
  left_box: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    backgroundColor: 'skyblue',
    color: 'white',
  },
  right_box: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    backgroundColor: 'orange',
    color: 'white',
  },
});

interface IActionButton {
  onPressLeft: ((event: GestureResponderEvent) => void) | undefined;
  onPressRight: ((event: GestureResponderEvent) => void) | undefined;
}
function ActionButton({onPressLeft, onPressRight}: IActionButton) {
  return (
    <View style={styles.block}>
      <Text style={styles.left_box} onPress={onPressLeft}>
        Left
      </Text>

      <Text style={styles.right_box} onPress={onPressRight}>
        Right
      </Text>
    </View>
  );
}

export default memo(ActionButton);
