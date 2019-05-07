/**
 * These are options to be used in many form examples
 */

export const LIKE = {
  ICE_CREAM: 'ice_cream',
  SUMMER: 'summer',
  GREEN_TEST: 'green_test',
  HIGH_FIVE: 'high_five',
}

export const LIKE_OPTIONS = [
  { label: 'Ice Cream', value: LIKE.ICE_CREAM },
  { label: 'Summer', value: LIKE.SUMMER },
  { label: 'Green Tests', value: LIKE.GREEN_TEST, disabled: true },
  { label: 'High Fives', value: LIKE.HIGH_FIVE },
]

export const OUTLOOK = {
  GLASS_HALF_FULL: 'glass_half_full',
  GLASS_HALF_EMPTY: 'glass_half_empty',
  NO_GLASS: 'no_glass',
}

export const OUTLOOK_OPTIONS = [
  { label: 'Glass Half Full', value: OUTLOOK.GLASS_HALF_FULL },
  { label: 'Glass Half Empty', value: OUTLOOK.GLASS_HALF_EMPTY },
  { label: 'There is no Glass', value: OUTLOOK.NO_GLASS, disabled: true },
]

export const PIZZA_TOPPINGS = {
  ANCHOVIES: '1',
  BACON: '2',
  CHICKEN: '3',
  HAM: '4',
  MUSHROOMS: '5',
  OLIVES: '6',
  ONION: '7',
  PEPPERONI: '8',
  PEPPERS: '9',
  SAUSAGE: '10',
}

export const PIZZA_TOPPING_OPTIONS = [
  { label: 'Anchovies', value: PIZZA_TOPPINGS.ANCHOVIES },
  { label: 'Bacon', value: PIZZA_TOPPINGS.BACON },
  { label: 'Chicken', value: PIZZA_TOPPINGS.CHICKEN },
  { label: 'Ham', value: PIZZA_TOPPINGS.HAM },
  { label: 'Mushrooms', value: PIZZA_TOPPINGS.MUSHROOMS },
  { label: 'Olives', value: PIZZA_TOPPINGS.OLIVES },
  { label: 'Onion', value: PIZZA_TOPPINGS.ONION },
  { label: 'Pepperoni', value: PIZZA_TOPPINGS.PEPPERONI },
  { label: 'Peppers', value: PIZZA_TOPPINGS.PEPPERS },
  { label: 'Sausage', value: PIZZA_TOPPINGS.SAUSAGE },
]

export const SERVICE_RATING = {
  VERY_UNSATISFIED: '1',
  UNSATISFIED: '2',
  INDIFFERENT: '3',
  SATISFIED: '4',
  VERY_SATISFIED: '5',
}

export const SERVICE_RATING_OPTIONS = [
  { label: 'Very Unsatisfied', value: SERVICE_RATING.VERY_UNSATISFIED },
  { label: 'Unsatisfied', value: SERVICE_RATING.UNSATISFIED },
  { label: 'Indifferent', value: SERVICE_RATING.INDIFFERENT },
  { label: 'Satisfied', value: SERVICE_RATING.SATISFIED },
  { label: 'Very Satisfied', value: SERVICE_RATING.VERY_SATISFIED },
]
