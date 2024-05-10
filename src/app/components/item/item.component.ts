import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, Item } from '../../models';

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrl: './item.component.scss'
})
export class ItemComponent {

	@Output() onAddOrRemoveFromCart: EventEmitter<boolean> = new EventEmitter();
	@Input() item: CartItem | null = null;

	onAddOrRemove(add: boolean) {
		this.onAddOrRemoveFromCart.emit(add);
	}
}
