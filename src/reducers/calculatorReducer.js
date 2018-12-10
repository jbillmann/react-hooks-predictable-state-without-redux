const types = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT'
};

export const initialState = {
  value: 0
};

export const actions = {
  add: () => ({ type: types.ADD }),
  subtract: () => ({ type: types.SUBTRACT })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD:
      return { value: state.value + 1 };

    case types.SUBTRACT:
      return { value: state.value - 1 };

    default:
      return state;
  }
};

export const register = (globalState, globalActions) => {
  globalState.calculator = initialState;
  globalActions.calculator = actions;
};