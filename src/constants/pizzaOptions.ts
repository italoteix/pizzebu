export interface SizeType {
  name: string;
  price: number;
  short?: string;
  maxToppings?: number;
}

export interface ToppingsType {
  name: string;
  imgUrl: string;
}

export const SIZES: SizeType[] = [
  {
    name: "Small",
    short: "S",
    price: 8.0,
    maxToppings: 5,
  },
  {
    name: "Medium",
    short: "M",
    price: 10.0,
    maxToppings: 7,
  },
  {
    name: "Large",
    short: "L",
    price: 12.0,
    maxToppings: 9,
  },
];

export const CRUSTIES: SizeType[] = [
  {
    name: "Thin",
    price: 2.0,
  },
  {
    name: "Thick",
    price: 4.0,
  },
];

export const TOPPINGS: ToppingsType[] = [
  {
    name: "Pepperoni",
    imgUrl: "pepperoni",
  },
  {
    name: "Mushrooms",
    imgUrl: "mushrooms",
  },
  {
    name: "Onions",
    imgUrl: "onions",
  },
  {
    name: "Sausage",
    imgUrl: "sausage",
  },
  {
    name: "Bacon",
    imgUrl: "bacon",
  },
  {
    name: "Extra cheese",
    imgUrl: "extraCheese",
  },
  {
    name: "Black olives",
    imgUrl: "blackOlives",
  },
  {
    name: "Green peppers",
    imgUrl: "greenPeppers",
  },
  {
    name: "Pineapple",
    imgUrl: "pineapple",
  },
  {
    name: "Spinach",
    imgUrl: "spinach",
  },
];

export const EXTRA_TOPPING_PRICE = 0.5;
