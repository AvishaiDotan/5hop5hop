import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer, Item, Produce } from '../../models';
import { ProductsService } from '../../services/products.service';
import { Subscribable, Subscription } from 'rxjs';
import { UserMessageService } from '../../services/user-message.service';
import { CustomerService } from '../../services/customer.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {
	
	// Subscriptions
	produceSubscription!: Subscription
	customerSubscription!: Subscription

	produce: Produce | null = null;
	customer: Customer | null = null;

	constructor(private productService: ProductsService, private userMessageService: UserMessageService, private customerService: CustomerService) {}

	ngOnInit(): void {
		this.produceSubscription = this.productService.produce$.subscribe({
			next: (produce) => {
				this.produce = produce;
			},
			error: (error) => {
				this.userMessageService.showMessage(error);
			}
		})

		this.customerSubscription = this.customerService.customer$.subscribe({
			next: (customer) => {
				this.customer = customer;
			},
			error: (error) => {
				this.userMessageService.showMessage(error);
			}
		})
	}

	ngOnDestroy(): void {
		this.produceSubscription.unsubscribe();
	}

	async onAddToCart(item: Item) {
		var updatedCustomer: Customer = {
			cash: this.customer?.cash || 0,
			imgUrl: this.customer?.imgUrl || "",
			name: this.customer?.name || "", 
			cartItems: [...(this?.customer?.cartItems || []), item]
		};
		try {
			this.customerService.updateCustomer(updatedCustomer);
		} catch (error) {
			this.userMessageService.showMessage(error);
		}
		
	}
}
