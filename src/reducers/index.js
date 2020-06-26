import reducerIndex from "./reducerIndex";

let initialState = {};
let actions = {};

Object.keys(reducerIndex).forEach((p) => {
  initialState[p] = reducerIndex[p].initialState;
  actions[p] = reducerIndex[p].actions;
});

export { initialState };
export { actions };

export const reducer = (state, action) => {
  let newState = {};

  Object.keys(reducerIndex).forEach((p) => {
    newState[p] = reducerIndex[p].reducer(state[p], action);
  });

  return newState;
};
