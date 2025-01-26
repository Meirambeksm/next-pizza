import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { CartStateItem } from "./get-cart-details";

export const getCartItemDetails = (
  ingredients: CartStateItem["ingredients"] /*16e change*/,
  pizzaType: PizzaType,
  pizzaSize: PizzaSize
) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};

// 16f. Go to cart-drawer.tsx
