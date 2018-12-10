import { register as nameRegister, reducer as nameReducer } from './nameReducer';
import { register as historyRegister, reducer as historyReducer } from './historyReducer';
import { register as calculatorRegister, reducer as calculatorReducer } from './calculatorReducer';

export const initialState = {};
export const actions = {};

nameRegister(initialState, actions);
historyRegister(initialState, actions);
calculatorRegister(initialState, actions);

export const reducer = (state, action) => {
  return {
    history: historyReducer(state.history, action),
    name: nameReducer(state.name, action),
    calculator: calculatorReducer(state.calculator, action)
  };
};