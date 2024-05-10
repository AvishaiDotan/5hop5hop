import { Item } from "./item.model";

export type CartItem = Item & {
    number: number;
};