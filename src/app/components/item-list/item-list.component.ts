import { Component, Input, OnDestroy, OnInit, input } from '@angular/core';
import { CartItems } from '../../models';
import { CustomerService } from '../../services/customer.service';

@Component({
	selector: 'item-list',
	templateUrl: './item-list.component.html',
	styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
	@Input() items: CartItems | null = null;
	
} 
