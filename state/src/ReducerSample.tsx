import React, {memo, useReducer} from 'react';
import {View, Text, Pressable} from 'react-native';

type State = {
  count: number;
  text: string;
  color: string;
  isGood: boolean;
};

type Action =
  | {type: 'SET_COUNT'; count: number}
  | {type: 'SET_TEXT'; text: string}
  | {type: 'SET_COLOR'; color: string}
  | {type: 'TOGGLE_GOOD'};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('unhandled error ');
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'string',
    color: 'red',
    isGood: true,
  });

  const setCount = () => dispatch({type: 'SET_COUNT', count: 5});
  const setText = () => dispatch({type: 'SET_TEXT', text: 'bye'});
  const setColor = () => dispatch({type: 'SET_COLOR', color: 'orange'});
  const toggleGood = () => dispatch({type: 'TOGGLE_GOOD'});

  return (
    <View>
      <Pressable onPress={setCount}>
        <Text>{state.count}</Text>
      </Pressable>

      <Pressable onPress={setText}>
        <Text>{state.text}</Text>
      </Pressable>

      <Pressable onPress={setColor}>
        <Text>{state.color}</Text>
      </Pressable>

      <Pressable onPress={toggleGood}>
        <Text>{String(state.isGood)}</Text>
      </Pressable>
    </View>
  );
}

export default memo(ReducerSample);
