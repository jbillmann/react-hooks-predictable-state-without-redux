import { useContext, useEffect } from "react";
import { StoreContext } from "../providers/Store";

export default function useName() {
  const { state, actions, dispatch } = useContext(StoreContext);

  useEffect(() => {
    dispatch(actions.name.requestName());
    //  Simulate async fetch
    setTimeout(() => {
      dispatch(actions.name.receiveName({ name: "Jeremiah Billmann" }));
    }, 500);
  }, [actions.name, dispatch]);

  const updateName = (updates) => {
    dispatch(actions.name.updateName(updates));
  };

  return {
    state: state.name,
    updateName,
  };
}
