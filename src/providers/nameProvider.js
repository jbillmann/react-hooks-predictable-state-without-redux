import React, { useReducer, useEffect } from "react";
import { actions, initialState, reducer } from '../reducers/nameReducer';

export const NameContext = React.createContext();

export const NameProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState, actions.resetName());

  useEffect(() => {
    dispatch(actions.requestName());
    //  Simulate async fetch
    setTimeout(() => {
      dispatch(actions.receiveName({ name: 'Jeremiah Billmann' }));
    }, 500);
  }, []);

  return (
    <NameContext.Provider value={{ state, actions, dispatch }}>
      {props.children}
    </NameContext.Provider>
  );
};