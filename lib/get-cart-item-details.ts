import { mapType, PizzaSize, PizzaType } from "@/constants/pizza";
import { Item } from "./get-cart-details";


export const getCartItemDetails = (
    ingredients: Item['ingredients'],
    pizzaType: PizzaType,
    pizzaSize: PizzaSize,
): string => {
    const details = []

    console.log(pizzaType, pizzaSize)
        if (pizzaSize && pizzaType) {
        const typeName = mapType[pizzaType];
        details.push(`${typeName} ${pizzaSize} см`);
        }

        if (ingredients) {
            details.push(...ingredients.map((ingredient) => ingredient.name));
        }
    return details.join(', ')
}