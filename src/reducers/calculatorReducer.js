const types = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};

const initialState = {
  value: 0,
};

const actions = {
  increase: () => ({ type: types.INCREASE }),
  decrease: () => ({ type: types.DECREASE }),
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREASE:
      return { value: state.value + 1 };

    case types.DECREASE:
      return { value: state.value - 1 };

    default:
      return state;
  }
};

export default {
  initialState,
  actions,
  reducer,
};
