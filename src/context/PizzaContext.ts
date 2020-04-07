import createDataContext from "./createDataContext";

import { CRUSTIES, SIZES } from "../constants/pizzaOptions";

export interface StateType {
  size: string | undefined;
  crusty: string | undefined;
  toppings: string[] | undefined;
  price: number;
}

export type ActionType = {
  type: "CHANGE_PIZZA_SIZE" | "CHANGE_PIZZA_CRUST";
  payload: number;
};

const initialState: StateType = {
  size: SIZES[0].short,
  crusty: CRUSTIES[0].name,
  toppings: [],
  price: 10.0,
};

const pizzaReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_PIZZA_SIZE":
      return { ...state, size: SIZES[action.payload].short };
    case "CHANGE_PIZZA_CRUST":
      return { ...state, crusty: CRUSTIES[action.payload].name };
    default:
      return state;
  }
};

const changePizzaSize = (dispatch: React.Dispatch<ActionType>) => {
  return (index: number) => {
    dispatch({ type: "CHANGE_PIZZA_SIZE", payload: index });
  };
};

const changePizzaCrust = (dispatch: React.Dispatch<ActionType>) => {
  return (index: number) => {
    dispatch({ type: "CHANGE_PIZZA_CRUST", payload: index });
  };
};

export const { Context, Provider } = createDataContext(
  pizzaReducer,
  { changePizzaSize, changePizzaCrust },
  initialState
);
