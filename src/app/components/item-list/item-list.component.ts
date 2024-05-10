import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { CartItem, CartItems, Item } from '../../models';
import { CustomerService } from '../../services/customer.service';
import { UtilityService } from '../../services/utility.service';


@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnChanges {

	itemsToShow: CartItem[] | null = null;
	@Input() items: CartItems | null = null;
	@Output() onAddOrRemoveFromCart: EventEmitter<{item: Item, add: boolean}> = new EventEmitter<{item: Item, add: boolean}>();
	
	constructor(private utilityService: UtilityService) { }
	
	ngOnChanges(changes: SimpleChanges): void {
		if (changes["items"]) {
			this.updateItemsToShow(changes["items"].currentValue as CartItems)
		}
	}

	updateItemsToShow(cartItems: CartItems) {
		
		const notDistinctList = cartItems.map((item) => {
			return {
				...item,
				number: cartItems.reduce((acc, cur) => {
					return acc + (cur.id === item.id ? 1 : 0)
				}, 0)
			}
		})
		
		this.itemsToShow = this.utilityService.distinctBy(notDistinctList, (item) => item.id)
	}

	onAddOrRemove(add: boolean, item: CartItem) {
		var dbItem = this.items?.find((i) => i.id === item.id);
		console.log(dbItem);
		
		if (!dbItem) return;
		this.onAddOrRemoveFromCart.emit({item: dbItem, add: add});
	}

	
} 

