export interface SizeType {
  name: string;
  price: number;
  short?: string;
  maxToppings?: number;
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

export const TOPPINGS: string[] = [
  "Pepperoni",
  "Mushrooms",
  "Onions",
  "Sausage",
  "Bacon",
  "Extra cheese",
  "Black olives",
  "Green peppers",
  "Pineapple",
  "Spinach",
];
