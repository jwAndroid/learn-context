type Action = {type: 'INCREASE'} | {type: 'DECREASE'};

export default function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;

    case 'DECREASE':
      return state - 1;

    default:
      throw new Error('unhandled action type');
  }
}
