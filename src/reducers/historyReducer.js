const initialState = {
  actions: [],
};

const actions = {};

const reducer = (state, action) => {
  const newActions = [...state.actions];
  newActions.unshift(action);

  return {
    actions: newActions,
  };
};

export default {
  initialState,
  actions,
  reducer,
};
