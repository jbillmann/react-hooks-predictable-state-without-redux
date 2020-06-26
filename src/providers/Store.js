import React, { useReducer } from "react";
import { reducer, initialState, actions } from "../reducers";

export const StoreContext = React.createContext();

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, actions, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
