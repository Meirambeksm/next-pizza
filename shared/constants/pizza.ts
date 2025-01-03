export const mapPizzaSize = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
} as const; /*3a*/

export const mapPizzaType = {
  1: "традиционная",
  2: "тонкая",
} as const; /*3b*/

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
})); /*3c*/

export const pizzaTypes = Object.entries(mapPizzaType).map(([value, name]) => ({
  name,
  value,
})); /*3d*/

export type PizzaSize = keyof typeof mapPizzaSize; /*8a*/
export type PizzaType = keyof typeof mapPizzaType; /*8b*/

// 3e. Go to choose-pizza-form.tsx
// 8c. Go to choose-pizza-form.tsx
