import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
import { PizzaSize, PizzaType, pizzaTypes} from "@/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

export const getPizzaDetails = (
      type: PizzaType,
      size: PizzaSize,
      items: ProductItem[],
      ingredients: Ingredient[],
      selectedIngredients: Set<Number>,
) => {

  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} см, ${pizzaTypes[type]} пицца`

  return { totalPrice, textDetails}
}