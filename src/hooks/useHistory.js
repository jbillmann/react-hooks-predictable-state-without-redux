import { useContext } from "react";
import { StoreContext } from "../providers/Store";

export default function useHistory() {
  const { state } = useContext(StoreContext);

  return {
    state: state.history,
  };
}
