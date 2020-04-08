import createDataContext from "./createDataContext";

import {
  CRUSTIES,
  EXTRA_TOPPING_PRICE,
  SIZES,
  SizeType,
} from "../constants/pizzaOptions";

export interface StateType {
  size: SizeType | undefined;
  crusty: SizeType | undefined;
  toppings: string[] | undefined;
  price: number;
  extraToppingPrice: number;
}

export type ActionType = {
  type: "CHANGE_PIZZA_SIZE" | "CHANGE_PIZZA_CRUST" | "TOGGLE_TOPPING";
  payload: number | string;
};

const initialState: StateType = {
  size: SIZES[0],
  crusty: CRUSTIES[0],
  toppings: [],
  price: 10.0,
  extraToppingPrice: EXTRA_TOPPING_PRICE,
};

const getPrice = (state: StateType) => {
  let total = 0;
  const extraToppings = state?.toppings.length - state.size.maxToppings;
  if (extraToppings > 0) total += extraToppings * state.extraToppingPrice;
  total += state.size.price + state.crusty.price;
  return total;
};

const pizzaReducer = (state: StateType, action: ActionType) => {
  let newState = {};
  switch (action.type) {
    case "CHANGE_PIZZA_SIZE":
      newState = { ...state, size: SIZES[action.payload] };
      newState = { ...newState, price: getPrice(newState) };
      return newState;
    case "CHANGE_PIZZA_CRUST":
      return { ...state, crusty: CRUSTIES[action.payload] };
    case "TOGGLE_TOPPING":
      return state.toppings?.indexOf(action.payload) < 0
        ? { ...state, toppings: [...state.toppings, action.payload] }
        : {
            ...state,
            toppings: state.toppings?.filter((top) => top !== action.payload),
          };
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

const toggleTopping = (dispatch: React.Dispatch<ActionType>) => {
  return (topping: string) => {
    dispatch({ type: "TOGGLE_TOPPING", payload: topping });
  };
};

export const { Context, Provider } = createDataContext(
  pizzaReducer,
  { changePizzaSize, changePizzaCrust, toggleTopping },
  initialState
);
