const types = {
  RESET_NAME: 'RESET_NAME',
  UPDATE_NAME: 'UPDATE_NAME',
  REQUEST_NAME: 'REQUEST_NAME',
  RECEIVE_NAME: 'RECEIVE_NAME'
};

export const initialState = {
  firstName: '',
  lastName: '',
  actions: [],
  isLoading: false
};

export const actions = {
  updateName: (updates) => ({ type: types.UPDATE_NAME, value: updates }),
  resetName: () => ({ type: types.RESET_NAME }),
  requestName: () => ({ type: types.REQUEST_NAME }),
  receiveName: (json) => ({ type: types.RECEIVE_NAME, value: json })
};

export const reducer = (state, action) => {
  var newActions = [...state.actions];
  newActions.unshift(action);

  switch (action.type) {
    case types.RESET_NAME:
      return { ...initialState, ...{ actions: newActions }};

    case types.REQUEST_NAME:
      return { ...state, ...{ actions: newActions, isLoading: false }};

    case types.RECEIVE_NAME:
      var newName = action.value.name.split(' ');
      return { ...state, ...{ actions: newActions, firstName: newName[0], lastName: newName[1], isLoading: true }};

    case types.UPDATE_NAME:
      var newState = { ...state, ...action.value, ...{ actions: newActions }}
      return newState;

    default:
      return state;
  }
};