import { axiosInstance } from "./instance";
import { CartDTO, CreateCartItemValues } from './dto/cart.dto'

export const getCart = async (): Promise<CartDTO> => {
    return (await axiosInstance.get<CartDTO>('/cart')).data
}

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
    return (await axiosInstance.patch<CartDTO>('/cart/' + itemId, { quantity})).data
}

export const removeCartItem = async (Id: number): Promise<CartDTO> => {
    return (await axiosInstance.delete<CartDTO>('/cart/' + Id)).data
}
