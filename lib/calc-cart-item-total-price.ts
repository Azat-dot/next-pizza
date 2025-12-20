import { CartItemDTO } from '@/services/dto/cart.dto';
import { Ingredient, ProductItem } from '@prisma/client';

type Item = {
  productItem: ProductItem;
  ingredients: Ingredient[];
  quantity: number;
};


export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  return (
    (item.productItem.price +
      item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)) *
    item.quantity
  );
};
