import { useContext } from 'react';
import { StoreContext } from "../providers/Store";

export default function useCalculator() {
  const { state, actions, dispatch } = useContext(StoreContext);

  const add = () => {
    dispatch(actions.calculator.add());
  };

  const subtract = () => {
    dispatch(actions.calculator.subtract());
  };

  return {
    state: state.calculator,
    add,
    subtract
  };
};