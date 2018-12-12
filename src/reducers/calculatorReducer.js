const types = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE'
};

export const initialState = {
  value: 0
};

export const actions = {
  increase: () => ({ type: types.INCREASE }),
  decrease: () => ({ type: types.DECREASE })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREASE:
      return { value: state.value + 1 };

    case types.DECREASE:
      return { value: state.value - 1 };

    default:
      return state;
  }
};

export const register = (globalState, globalActions) => {
  globalState.calculator = initialState;
  globalActions.calculator = actions;
};