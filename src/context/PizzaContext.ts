import createDataContext from "./createDataContext";

import { CRUSTIES, SIZES } from "../constants/pizzaOptions";

export interface StateType {
  size: string | undefined;
  crusty: string | undefined;
  toppings: string[] | undefined;
  price: number;
}

const initialState: StateType = {
  size: SIZES[0].short,
  crusty: CRUSTIES[0].name,
  toppings: [],
  price: 10.0,
};

const pizzaReducer = (state: StateType, action) => {
  switch (action.type) {
    case "change_pizza-size":
      return { ...state, pizzaSize: action.payload };
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  pizzaReducer,
  {},
  initialState
);
