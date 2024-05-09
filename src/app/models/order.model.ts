import { CartItems } from "./cartItems.model";

export type Order = {
    id: number;
    date: string;
    items: CartItems;
}