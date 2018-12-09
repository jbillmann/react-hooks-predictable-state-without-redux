export const initialState = {
  actions: []
};

export const actions = {
};

export const reducer = (state, action) => {
  const newActions = [...state.actions];
  newActions.unshift(action);

  return {
    actions: newActions
  };
};

export const register = (globalState, globalActions) => {
  globalState.history = initialState;
  globalActions.history = actions;
};