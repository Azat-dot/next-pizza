import { axiosInstance } from "./instance";
import { CartDTO, CreateCartItemValues } from './dto/cart.dto'

export const fetchCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstance.get<CartDTO>('/cart');

    return data
}

export function addCartItem(values: CreateCartItemValues) {
  throw new Error('Function not implemented.');
}
