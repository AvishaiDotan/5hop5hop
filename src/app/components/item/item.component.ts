import { Component, Input } from '@angular/core';
import { Item } from '../../models';

@Component({
	selector: 'item',
	templateUrl: './item.component.html',
	styleUrl: './item.component.scss'
})
export class ItemComponent {
	@Input() item: Item | null = null;
}
