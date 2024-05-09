import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item, Produce } from '../../models';

@Component({
	selector: 'product',
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss'
})
export class ProductComponent {
	@Output() addToCart: EventEmitter<Item> = new EventEmitter();
	@Input() item: Item | null = null;

	isMouseOverItem: boolean = false;

	toggleMouseOverItem() {
		this.isMouseOverItem = !this.isMouseOverItem;
	}

	onAddToCart(item: Item) {
		console.log("onAddToCart");
		
		this.addToCart.emit(item);
	}
}
