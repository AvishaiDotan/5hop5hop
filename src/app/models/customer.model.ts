import { CartItems } from "./cartItems.model";

export type Customer = {
    imgUrl: string;
    name: string;
    cash: number;
    cartItems: CartItems;
}