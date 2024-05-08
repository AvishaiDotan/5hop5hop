import { Amount } from './amount.model';
import { ProduceCategory } from './produceCategory.model';

export type Item = {
    id: number;
    name: string;
    price: number;
    amount: Amount;
    imgUrl: string;
    category: ProduceCategory[];
}