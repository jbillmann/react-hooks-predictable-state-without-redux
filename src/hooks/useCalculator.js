import { useContext } from "react";
import { StoreContext } from "../providers/Store";

export default function useCalculator() {
  const { state, actions, dispatch } = useContext(StoreContext);

  const increase = () => {
    dispatch(actions.calculator.increase());
  };

  const decrease = () => {
    dispatch(actions.calculator.decrease());
  };

  return {
    state: state.calculator,
    increase,
    decrease,
  };
}
