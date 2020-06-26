const types = {
  RESET_NAME: "RESET_NAME",
  UPDATE_NAME: "UPDATE_NAME",
  REQUEST_NAME: "REQUEST_NAME",
  RECEIVE_NAME: "RECEIVE_NAME",
};

const initialState = {
  firstName: "",
  lastName: "",
  isLoading: false,
};

const actions = {
  updateName: (updates) => ({ type: types.UPDATE_NAME, value: updates }),
  resetName: () => ({ type: types.RESET_NAME }),
  requestName: () => ({ type: types.REQUEST_NAME }),
  receiveName: (json) => ({ type: types.RECEIVE_NAME, value: json }),
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.RESET_NAME:
      return { ...initialState };

    case types.REQUEST_NAME:
      return { ...state, ...{ isLoading: false } };

    case types.RECEIVE_NAME:
      const newName = action.value.name.split(" ");
      return {
        ...state,
        ...{ firstName: newName[0], lastName: newName[1], isLoading: true },
      };

    case types.UPDATE_NAME:
      const newState = { ...state, ...action.value };
      return newState;

    default:
      return state;
  }
};

export default {
  initialState,
  actions,
  reducer,
};
